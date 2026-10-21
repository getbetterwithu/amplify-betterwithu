// BetterWithU AI proxy. API keys belong only in Vercel environment variables.
// GEMINI_API_KEYS accepts comma/newline-separated keys; GEMINI_API_KEY remains a fallback.
import { createHash, timingSafeEqual } from 'node:crypto';
const MODEL = process.env.GEMINI_MODEL || 'gemini-3.7-flash';
const PROMPTS = {
  convert: `중학교 수학 교과서 사진을 Amplify Classroom에 붙여넣을 수 있는 형태로 정확히 옮겨라. 이미지에 있는 내용만 옮기고 설명이나 코드펜스를 덧붙이지 않는다. 수식은 백틱으로 감싸고 기본 LaTeX 문법을 쓴다. 한글 설명은 백틱 밖에 둔다. 점 이름은 \\mathrm{}로 감싼다. 닮음 ∽, 합동 ≡, 평행 ⫽, 따라서 ∴, 왜냐하면 ∵, 함의 ⇒, 동치 ⇔, 근삿값 ≒, 비례 ∝는 특수문자를 직접 쓴다. 줄바꿈과 들여쓰기를 가능한 한 보존한다. 수학 내용이 없으면 "이미지에서 수학 내용을 찾지 못했습니다."라고만 답한다.`,
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
