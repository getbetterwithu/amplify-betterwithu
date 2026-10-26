// BetterWithU AI proxy. API keys belong only in Vercel environment variables.
// GEMINI_API_KEYS accepts comma/newline-separated keys; GEMINI_API_KEY remains a fallback.
import { createHash, timingSafeEqual } from 'node:crypto';
const MODEL = process.env.GEMINI_MODEL || 'gemini-3.7-flash';
const PROMPTS = {
  convert: "당신은 중학교 수학 교과서 지면을 Amplify Classroom(Desmos)에 넣을 수 있는 형태로 옮기는 일을 합니다.\n이미지에 보이는 수학 내용을 아래 규칙에 따라 그대로 옮겨 주세요.\n\n[가장 중요한 원칙]\n1. 수식은 앞뒤를 백틱(`)으로 감쌉니다.\n2. 기본은 LaTeX 문법입니다. 다만 교과서와 모양이 다른 기호는 명령어 대신 특수문자를 수식 안에 직접 넣습니다.\n3. 이미지에 있는 내용만 옮깁니다. 없는 것을 지어내지 않고, 있는 것을 빠뜨리지 않습니다.\n4. 한글 설명은 백틱 밖에 그대로 둡니다. 수식만 백틱으로 감쌉니다.\n\n[명령어로 쓰는 것]\n선분 \\overline{\\mathrm{AB}} · 아랫줄 \\underline{} · 직선 \\overleftrightarrow{\\mathrm{PQ}} · 호 \\overarc{\\mathrm{AB}}\n삼각형 \\triangle · 각 \\angle · 도 \\degree · 수직 \\perp · 평행사변형 \\parallelogram · 원 \\bigcirc\n분수 \\frac{}{} · 제곱근 \\sqrt{} · 세제곱근 \\sqrt[3]{} · 지수 ^2 ^{10} · 아래첨자 _1 _{12}\n\\neq \\leq \\geq · \\pm \\mp · \\times \\div \\cdot · \\infty · \\to\n굵게 \\mathbf{} · 색 \\textcolor{red}{} 또는 \\textcolor{#2f6bd8}{}\n비례식은 콜론을 그대로 씁니다: `2:3` 또는 `c\\ :\\ a\\ =\\ a\\ :\\ b`\n\n[반드시 특수문자를 직접 넣는 것 — 명령어를 쓰면 안 됩니다]\n닮음 ∽   (\\sim, \\backsim 금지 — 물결표라 교과서와 다릅니다)\n합동 ≡   (\\equiv 금지 — 렌더되지 않습니다)\n평행 ⫽   (\\parallel, \\|, ∥ 금지 — 교과서와 다르거나 Amplify에서 수식이 통째로 빈칸이 됩니다)\n따라서 ∴  왜냐하면 ∵  함의 ⇒  동치 ⇔  근삿값 ≒  비례 ∝\n\n[렌더되지 않으므로 쓰지 말 것]\n\\therefore \\because \\Rightarrow \\Leftrightarrow \\equiv \\ldots \\cdots \\propto \\bot \\backsim \\text{} \\underbrace{} \\quad \\cbrt\n\\lim 은 이탤릭 낱글자(l i m)로 그려져 교과서 모양이 아니므로 쓰지 않습니다.\n\\dfrac \\cfrac 는 \\frac 과 크기가 같으므로 \\frac 만 씁니다.\n\n[꼭짓점 글자]\nA, B, C 같은 점 이름은 반드시 \\mathrm{} 으로 감쌉니다. 쓰지 않으면 이탤릭이라 교과서 표기와 다릅니다.\n예: \\triangle\\mathrm{ABC}, \\angle\\mathrm{ACB}, \\overline{\\mathrm{BD}}\n단, a b c x y 같은 변·변수 문자는 \\mathrm 을 쓰지 않습니다(교과서도 이탤릭입니다).\n\n[공백 \\ (백슬래시+공백)]\n특수문자(∽ ≡ ⫽ ∴ ∵ ⇒) 앞뒤 → 반드시 넣습니다. 없으면 글자가 달라붙습니다.\n등호 = 와 비례식 콜론 : 앞뒤 → 넣습니다.\n+ − × ÷ → 넣지 않습니다. 자동으로 벌어집니다.\n\n[백틱 밖에 두는 것]\n말줄임표(…… ①), (AA 닮음) 같은 한글 괄호 설명, 번호표는 수식이 아니므로 백틱 밖에 둡니다.\n\\text{} 가 렌더되지 않으므로 수식 안에 한글을 넣지 마세요.\n\n[출력 형식]\n- 교과서의 줄바꿈과 들여쓰기를 그대로 살립니다.\n- 설명, 머리말, 코드펜스(```) 없이 변환 결과만 출력합니다.\n- 이미지에 수학 내용이 없으면 \"이미지에서 수학 내용을 찾지 못했습니다.\"라고만 답합니다.",
};
const ALLOWED = ['https://amplify.betterwithu.kr'];
const retryable = (text) => /high demand|overload|temporar|rate.?limit|quota|resource.?exhaust|unavailable|429|503|529|timeout|deadline/i.test(String(text || ''));
const keys = () => String(process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || '').split(/[\n,]+/).map((x) => x.trim()).filter(Boolean);
const failures = new Map();
const digest = (value) => createHash('sha256').update(String(value || '')).digest();
const sameSecret = (left,right) => timingSafeEqual(digest(left),digest(right));
const clientId = (req) => String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
const blocked = (req) => { const now=Date.now(),id=clientId(req),entry=failures.get(id); if(!entry||now-entry.since>600000){failures.set(id,{since:now,count:0});return false} return entry.count>=20 };
const recordFailure = (req) => { const id=clientId(req),entry=failures.get(id)||{since:Date.now(),count:0};entry.count+=1;failures.set(id,entry) };

async function call(key, task, body) {
  const parts = [{ text: PROMPTS[task] }];
  if (body.image) parts.push({ inline_data: { mime_type: body.mime || 'image/png', data: body.image } });
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(key)}`, {method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({contents:[{parts}],generationConfig:{temperature:0}})});
  const data = await response.json().catch(() => ({}));
  if (!response.ok) { const error = new Error(data?.error?.message || `Gemini 오류 ${response.status}`); error.status=response.status; throw error; }
  return data?.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join('') || '';
}

export default async function handler(req,res){
  const origin=req.headers.origin||'';
  if(ALLOWED.includes(origin))res.setHeader('Access-Control-Allow-Origin',origin);
  res.setHeader('Vary','Origin');res.setHeader('Access-Control-Allow-Methods','POST, OPTIONS');res.setHeader('Access-Control-Allow-Headers','content-type');
  if(req.method==='OPTIONS')return res.status(204).end();
  if(req.method!=='POST')return res.status(405).json({error:'POST만 받습니다.'});
  if(!origin||!ALLOWED.includes(origin))return res.status(403).json({error:'허용되지 않은 요청 출처입니다.'});
  const available=keys(),password=process.env.SHARE_PASSWORD,body=req.body||{},task=body.task;
  if(!password||!available.length)return res.status(503).json({error:'공유 AI 설정이 아직 준비되지 않았습니다.'});
  if(blocked(req))return res.status(429).json({error:'암호 확인 요청이 너무 많습니다. 10분 뒤 다시 시도해 주세요.'});
  if(!sameSecret(body.password,password)){recordFailure(req);return res.status(401).json({error:'공유 암호가 맞지 않습니다.'})}
  failures.delete(clientId(req));
  if(!PROMPTS[task])return res.status(400).json({error:'허용되지 않은 작업입니다.'});
  if(task==='convert'&&!body.image)return res.status(400).json({error:'변환할 이미지가 필요합니다.'});
  if(body.image&&!/^image\/(png|jpeg|webp)$/i.test(String(body.mime||'')))return res.status(415).json({error:'PNG·JPG·WebP 이미지만 사용할 수 있습니다.'});
  if(body.image&&body.image.length>3_600_000)return res.status(413).json({error:'이미지가 너무 큽니다. 2.5MB 이하로 줄여 주세요.'});
  const start=Math.floor(Math.random()*available.length);let last;
  for(let i=0;i<available.length;i++){try{return res.status(200).json({text:await call(available[(start+i)%available.length],task,body)})}catch(error){last=error;if(!retryable(error.message))break}}
  return res.status(last?.status||502).json({error:last?.message||'AI 서버에 연결하지 못했습니다.'});
}
