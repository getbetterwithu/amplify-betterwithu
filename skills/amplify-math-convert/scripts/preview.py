#!/usr/bin/env python3
"""변환 결과를 MathQuill로 그린 미리보기 HTML을 만든다 (사이트 convert.html의 미리보기와 같은 방식).

사용: python3 preview.py 결과.txt [-o 미리보기.html] [--no-open]
- 백틱 안은 수식(MathQuill StaticMath), 밖은 글자로 그린다. 그리지 못한 수식은 빨간 글자로 남는다.
- MathQuill 파일은 ../assets/ 의 것을 쓴다 (사이트 lib/ 와 같은 v0.10.1).
"""
import argparse, html, json, os, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.abspath(os.path.join(HERE, '..', 'assets'))

PAGE = """<!doctype html><html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Amplify 수식 미리보기</title>
<link rel="stylesheet" href="{css}">
<style>
body{{font-family:-apple-system,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;margin:24px;line-height:1.9;color:#12151b;background:#fff}}
h1{{font-size:15px;margin:0 0 4px}} p.n{{font-size:12px;color:#5f6b7f;margin:0 0 16px}}
#render{{border:1px solid #e3e7ee;border-radius:10px;padding:16px 18px;font-size:16px}}
.bad{{color:#b02020}} pre{{background:#f6f8fb;padding:12px;border-radius:8px;white-space:pre-wrap;font-size:13px}}
</style></head><body>
<h1>Amplify 수식 미리보기</h1>
<p class="n">MathQuill v0.10.1로 그렸습니다. 빨간 글자는 그리지 못한 수식입니다. 최종 확인은 Amplify에서 해 주세요.</p>
<div id="render"></div>
<h1 style="margin-top:20px">복사할 내용</h1>
<pre id="src"></pre>
<script src="{jq}"></script><script src="{mq}"></script>
<script>
var SRC={src};
document.getElementById('src').textContent=SRC;
var MQ=MathQuill.getInterface(2), box=document.getElementById('render');
SRC.split('\\n').forEach(function(line){{
  var row=document.createElement('div');
  if(!line.trim()){{row.style.height='1em';box.appendChild(row);return;}}
  line.split(/(`[^`]*`)/).forEach(function(p){{
    if(!p)return;
    if(p.charAt(0)==='`'&&p.charAt(p.length-1)==='`'&&p.length>1){{
      var sp=document.createElement('span');row.appendChild(sp);
      try{{MQ.StaticMath(sp).latex(p.slice(1,-1));
        if(!sp.textContent.trim()){{sp.textContent=p;sp.className='bad';}}}}
      catch(e){{sp.textContent=p;sp.className='bad';}}
    }} else row.appendChild(document.createTextNode(p));
  }});
  box.appendChild(row);
}});
</script></body></html>"""


def main():
    a = argparse.ArgumentParser()
    a.add_argument('input'); a.add_argument('-o', '--output'); a.add_argument('--no-open', action='store_true')
    o = a.parse_args()
    src = open(o.input, encoding='utf-8').read().rstrip('\n')
    url = lambda f: 'file://' + os.path.join(ASSETS, f)
    page = PAGE.format(css=url('mathquill.css'), jq=url('jquery.min.js'), mq=url('mathquill.js'),
                       src=json.dumps(src, ensure_ascii=False).replace('</', '<\\/'))
    out = o.output or os.path.join(tempfile.gettempdir(), 'amplify-math-preview.html')
    open(out, 'w', encoding='utf-8').write(page)
    print(out)
    if not o.no_open:
        opener = 'open' if sys.platform == 'darwin' else ('start' if os.name == 'nt' else 'xdg-open')
        try:
            subprocess.run([opener, out], check=False, shell=(os.name == 'nt'))
        except Exception as e:
            print('[안내] 브라우저를 열지 못했습니다. 위 파일을 직접 여세요: ' + str(e), file=sys.stderr)


if __name__ == '__main__':
    main()
