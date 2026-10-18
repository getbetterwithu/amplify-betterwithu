// BetterWithU AI proxy. API keys belong only in Vercel environment variables.
// GEMINI_API_KEYS accepts comma/newline-separated keys; GEMINI_API_KEY remains a fallback.
const MODEL = process.env.GEMINI_MODEL || 'gemini-3.7-flash';
const PROMPTS = {
  convert: `중학교 수학 교과서 사진을 Amplify Classroom에 붙여넣을 수 있는 형태로 정확히 옮겨라. 이미지에 있는 내용만 옮기고 설명이나 코드펜스를 덧붙이지 않는다. 수식은 백틱으로 감싸고 기본 LaTeX 문법을 쓴다. 한글 설명은 백틱 밖에 둔다. 점 이름은 \\mathrm{}로 감싼다. 닮음 ∽, 합동 ≡, 평행 ⫽, 따라서 ∴, 왜냐하면 ∵, 함의 ⇒, 동치 ⇔, 근삿값 ≒, 비례 ∝는 특수문자를 직접 쓴다. 줄바꿈과 들여쓰기를 가능한 한 보존한다. 수학 내용이 없으면 "이미지에서 수학 내용을 찾지 못했습니다."라고만 답한다.`,
  interpret: `Amplify Classroom의 Computation Layer(CL) 코드를 교사에게 설명하라. 확인할 수 없는 내용을 지어내지 않는다. CL은 값들이 계속 일치하도록 연결하는 반응형 언어다. sink는 값을 구성요소 안으로 넣고 보통 이름 뒤에 콜론(:)이 온다. source는 componentName.property 형태로 값을 읽는다. 등호(=)는 변수 정의나 값의 지속적인 연결이며 콜론과 같다고 설명하지 않는다. 이미지에서는 먼저 코드를 전사하고 불분명한 글자는 [불명확]으로 표시한다. 문서 근거가 부족하면 "확인 필요"로 분류한다. 반드시 다음 형식의 JSON 하나만 반환한다: {"recognizedCode":"코드","summary":"전체 역할 한 문장","flow":["값 흐름"],"lines":[{"code":"원문 한 줄","kind":"sink/source/변수/조건/함수/주석/기타","meaning":"쉬운 설명","confidence":"확인/추정/확인 필요"}],"warnings":["주의점"],"related":["관련 학습 주제"]}`,
};
const ALLOWED = ['https://getbetterwithu.github.io','https://amplify.betterwithu.kr','http://localhost:8080','http://127.0.0.1:8080','http://localhost:8875','http://127.0.0.1:8875'];
const retryable = (text) => /high demand|overload|temporar|rate.?limit|quota|resource.?exhaust|unavailable|429|503|529|timeout|deadline/i.test(String(text || ''));
const keys = () => String(process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || '').split(/[\n,]+/).map((x) => x.trim()).filter(Boolean);

async function call(key, task, body) {
  const parts = [{ text: PROMPTS[task] + (task === 'interpret' && body.code ? `\n\n[사용자 입력]\n${String(body.code).slice(0,30000)}` : '') }];
  if (body.image) parts.push({ inline_data: { mime_type: body.mime || 'image/png', data: body.image } });
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(key)}`, {method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({contents:[{parts}],generationConfig:{temperature:task==='interpret'?.15:0,...(task==='interpret'?{responseMimeType:'application/json'}:{})}})});
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
  if(origin&&!ALLOWED.includes(origin))return res.status(403).json({error:'허용되지 않은 요청 출처입니다.'});
  const available=keys(),password=process.env.SHARE_PASSWORD,body=req.body||{},task=body.task;
  if(!password||!available.length)return res.status(503).json({error:'공유 AI 설정이 아직 준비되지 않았습니다.'});
  if(body.password!==password)return res.status(401).json({error:'공유 암호가 맞지 않습니다.'});
  if(!PROMPTS[task])return res.status(400).json({error:'허용되지 않은 작업입니다.'});
  if(task==='convert'&&!body.image)return res.status(400).json({error:'변환할 이미지가 필요합니다.'});
  if(task==='interpret'&&!body.image&&!String(body.code||'').trim())return res.status(400).json({error:'해석할 코드나 이미지가 필요합니다.'});
  if(body.image&&body.image.length>8_000_000)return res.status(413).json({error:'이미지가 너무 큽니다. 더 작게 잘라서 올려 주세요.'});
  const start=Math.floor(Math.random()*available.length);let last;
  for(let i=0;i<available.length;i++){try{return res.status(200).json({text:await call(available[(start+i)%available.length],task,body)})}catch(error){last=error;if(!retryable(error.message))break}}
  return res.status(last?.status||502).json({error:last?.message||'AI 서버에 연결하지 못했습니다.'});
}
