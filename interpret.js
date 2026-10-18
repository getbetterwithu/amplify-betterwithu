(function(){
  'use strict';
  var $=function(id){return document.getElementById(id)};
  var imageData=null, imageMode=false;
  var SYSTEM=`당신은 Amplify Classroom의 Computation Layer(CL) 코드를 교사에게 설명하는 보조자다. 일반 프로그래밍 언어의 상식으로 빈칸을 지어내지 말고 아래 규칙과 입력에서 확인되는 사실만 확정적으로 말한다.

[핵심 규칙]
- CL은 명령을 순서대로 실행하는 언어라기보다 값들이 계속 일치하도록 연결하는 반응형 언어다.
- sink는 값을 구성요소 안으로 넣으며 보통 이름 뒤에 콜론(:)이 온다. source는 구성요소에서 값을 꺼내며 보통 componentName.property 형태다.
- 등호(=)는 변수 정의나 값의 지속적인 연결에 쓰인다. 콜론(:)과 같은 역할이라고 설명하지 않는다.
- when 조건 otherwise 값은 조건에 따라 값을 고른다. 계산기 조건식과 CL 조건문을 혼동하지 않는다.
- 백틱 안의 텍스트에서 \${식}은 동적 값을 끼워 넣는다.
- correct sink는 교사 대시보드의 정답 상태와 관련된다. 코드만으로 화면 구성요소의 실제 이름이나 의도를 단정하지 않는다.
- 영어 주석과 코드가 다르면 실제 코드를 기준으로 설명하고 불일치를 알린다.
- 이미지 입력이면 먼저 보이는 코드를 원문 그대로 전사한다. 불분명한 글자는 [불명확]으로 표시하고 임의로 고치지 않는다.
- 문서 근거가 부족한 함수·source·sink는 '확인 필요'로 분류한다.
- 답변은 한국어 존댓말이 아닌 간결한 설명체로 작성한다. sink, source, CL, latex는 번역하지 않는다.

반드시 JSON 하나만 반환한다. 형식:
{"recognizedCode":"인식하거나 입력받은 코드","summary":"전체 역할 한 문장","flow":["값 흐름 단계"],"lines":[{"code":"원문 한 줄","kind":"sink/source/변수/조건/함수/주석/기타","meaning":"쉬운 설명","confidence":"확인/추정/확인 필요"}],"warnings":["오류·불일치·불확실성"],"related":["관련 학습 주제"]}`;

  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function showStatus(msg,err){$('status').hidden=false;$('status').className='status'+(err?' error':'');$('status').textContent=msg}
  function switchMode(img){imageMode=img;$('codePanel').hidden=img;$('imagePanel').hidden=!img;$('codeTab').classList.toggle('on',!img);$('imageTab').classList.toggle('on',img)}
  $('codeTab').onclick=function(){switchMode(false)};$('imageTab').onclick=function(){switchMode(true)};
  $('image').onchange=function(){var f=this.files&&this.files[0];imageData=null;$('preview').hidden=true;if(!f)return;if(f.size>6*1024*1024){this.value='';showStatus('이미지는 6MB 이하만 사용할 수 있습니다.',true);return}var reader=new FileReader();reader.onload=function(){imageData={mimeType:f.type,data:String(reader.result).split(',')[1]};$('preview').src=reader.result;$('preview').hidden=false};reader.readAsDataURL(f)};
  function settings(){return window.BWUAI?BWUAI.read():{mode:'',key:'',password:'',model:''}}
  function paintSettings(){var cfg=settings();$('aiStatus').textContent=window.BWUAI?BWUAI.label(cfg):'AI 설정 필요'}
  paintSettings();window.addEventListener('focus',paintSettings);
  function render(d){var rows=(d.lines||[]).map(function(x){return '<tr><td><code>'+esc(x.code)+'</code></td><td>'+esc(x.kind)+'</td><td>'+esc(x.meaning)+'</td><td>'+esc(x.confidence)+'</td></tr>'}).join('');var flow=(d.flow||[]).map(esc).join(' → ');var warnings=(d.warnings||[]).map(function(x){return '<li>'+esc(x)+'</li>'}).join('')||'<li>별도로 확인된 주의점이 없습니다.</li>';var related=(d.related||[]).map(function(x){return '<li>'+esc(x)+'</li>'}).join('');$('result').innerHTML='<h2>해석 결과</h2><section><h3>인식한 코드</h3><pre><code>'+esc(d.recognizedCode)+'</code></pre></section><section><h3>한 문장 설명</h3><p>'+esc(d.summary)+'</p></section>'+(flow?'<section><h3>값의 흐름</h3><p><strong>'+flow+'</strong></p></section>':'')+'<section><h3>줄별 해석</h3><div style="overflow:auto"><table><thead><tr><th>코드</th><th>분류</th><th>설명</th><th>근거</th></tr></thead><tbody>'+rows+'</tbody></table></div></section><section><h3>주의할 점</h3><ul>'+warnings+'</ul></section>'+(related?'<section><h3>관련 학습 주제</h3><ul>'+related+'</ul><p><a href="https://cl.betterwithu.kr/">CL 학습자료에서 찾아보기 →</a></p></section>':'')}
  $('run').onclick=async function(){
    if(!$('adult').checked){showStatus('만 18세 이상 교사·성인 교육자 확인이 필요합니다.',true);return}
    var cfg=settings(),code=$('code').value.trim();
    if(!window.BWUAI||!BWUAI.ready(cfg)){showStatus('먼저 AI 사용 설정에서 내 키나 공유 암호를 저장해 주세요.',true);return}if(imageMode&&!imageData){showStatus('해석할 화면 캡처를 선택해 주세요.',true);return}if(!imageMode&&!code){showStatus('해석할 CL 코드를 붙여 넣어 주세요.',true);return}
    $('run').disabled=true;$('result').innerHTML='';showStatus(imageMode?'이미지에서 CL 코드를 확인하고 있습니다…':'CL 문법과 값의 흐름을 확인하고 있습니다…');
    var parts=[{text:SYSTEM+'\n\n[사용자 입력]\n'+(imageMode?'첨부 이미지에서 CL 코드를 읽고 해석하라.':code)}];if(imageMode)parts.push({inlineData:imageData});
    try{
      var response;
      if(cfg.mode==='share'){
        response=await fetch(window.AI_ENDPOINT||'/api/ai',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({task:'interpret',password:cfg.password,code:code,image:imageData&&imageData.data,mime:imageData&&imageData.mimeType})});
      }else{
        var url='https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(cfg.model||'gemini-3.7-flash')+':generateContent?key='+encodeURIComponent(cfg.key);
        response=await fetch(url,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({contents:[{role:'user',parts:parts}],generationConfig:{temperature:.15,responseMimeType:'application/json'}})});
      }
      var payload=await response.json();if(!response.ok)throw new Error(payload.error&&payload.error.message||('HTTP '+response.status));
      var text=payload.text||(payload.candidates&&payload.candidates[0]&&payload.candidates[0].content&&payload.candidates[0].content.parts&&payload.candidates[0].content.parts.map(function(p){return p.text||''}).join(''));if(!text)throw new Error('Gemini가 빈 응답을 반환했습니다.');
      render(JSON.parse(text.replace(/^```json\s*|\s*```$/g,'')));showStatus('해석을 완료했습니다. 실제 수업 적용 전 CL 학습자료와 함께 확인해 주세요.');
    }catch(e){showStatus('해석하지 못했습니다: '+e.message,true)}finally{$('run').disabled=false}
  };
})();
