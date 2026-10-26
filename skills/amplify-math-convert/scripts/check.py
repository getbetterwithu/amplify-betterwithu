#!/usr/bin/env python3
"""Amplify 수식 문자열 검사·고침.

사용: python3 check.py 입력.txt [--fix] [--target memo|cl|calc] [-o 출력.txt]
- 규칙의 원본은 ../reference/rules.md 와 ../reference/commands.json 이다.
- --fix 를 주면 확실한 치환만 자동으로 고치고, 나머지는 경고로 남긴다.
- 끝날 때 경고가 남아 있으면 종료 코드 1.
"""
import argparse, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
TABLE = json.load(open(os.path.join(HERE, '..', 'reference', 'commands.json'), encoding='utf-8'))
OK = set(TABLE['measured_ok'])
EMPTY = set(TABLE['measured_empty'])
UNMEASURED = set(TABLE['registry_unmeasured'])
REPLACE = TABLE['replace']            # 확실한 치환
SHAPE = TABLE['shape_replace']        # 모양 때문에 바꾸는 것 (닮음·평행 의도)
REL = '∽≡⫽∴∵⇒⇔'
HANGUL = re.compile(r'[가-힣]')


def fix_math(m, notes):
    """백틱 안 수식 한 덩어리를 고친다."""
    orig = m
    m = re.sub(r'\\cbrt\{', r'\\sqrt[3]{', m)
    m = re.sub(r'\^\s*\{?\\circ\}?', r'\\degree ', m)
    m = re.sub(r'\\quad\s*', lambda _: '\\ ', m)
    for k, v in {**REPLACE, **SHAPE}.items():
        m = re.sub(r'\\' + k + r'(?![A-Za-z])', lambda _: v, m)
    # 관계 기호 앞뒤 공백
    m = re.sub(r'\s*(?<!\\ )([' + REL + r'])(?!\\ )\s*', r'\\ \1\\ ', m)
    m = re.sub(r'(\\ ){2,}', r'\\ ', m).strip()
    if m.startswith('\\ '): m = m[2:]
    if m.endswith('\\') : m = m + ' '
    if m != orig:
        notes.append(f'고침: `{orig}` → `{m}`')
    return m


def check_math(m, where, warns):
    for c in re.findall(r'\\([A-Za-z]+)', m):
        if c in OK:
            continue
        if c in EMPTY:
            warns.append(f'{where}: `\\{c}`는 Amplify에서 안 그려집니다 (rules.md B)')
        elif c in UNMEASURED:
            warns.append(f'{where}: `\\{c}`는 실측하지 않은 명령입니다. 쓰지 마세요 (rules.md E)')
        else:
            warns.append(f'{where}: `\\{c}`는 허용 표에 없습니다')
    if HANGUL.search(m):
        warns.append(f'{where}: 백틱 안에 한글이 있습니다. 한글은 백틱 밖으로')
    for pat in (r'\\overline\{([A-Z]{2,})\}', r'\\overarc\{([A-Z]{2,})\}', r'\\triangle\s*([A-Z]{3})', r'\\angle\s*([A-Z]{3})'):
        for g in re.findall(pat, m):
            warns.append(f'{where}: 점 이름 `{g}`를 `\\mathrm{{{g}}}`로 감싸세요')


def process(text, fix):
    notes, warns, out = [], [], []
    for ln, line in enumerate(text.split('\n'), 1):
        parts = re.split(r'(`[^`]*`)', line)
        if line.count('`') % 2:
            warns.append(f'{ln}행: 백틱 개수가 홀수입니다')
        new = []
        for p in parts:
            if len(p) > 1 and p[0] == '`' and p[-1] == '`':
                m = p[1:-1]
                if fix:
                    m = fix_math(m, notes)
                check_math(m, f'{ln}행', warns)
                new.append('`' + m + '`')
            else:
                if re.search(r'\\[A-Za-z]+', p):
                    warns.append(f'{ln}행: 백틱 밖에 LaTeX 명령이 있습니다: {p.strip()[:40]}')
                new.append(p)
        out.append(''.join(new))
    return '\n'.join(out), notes, warns


def main():
    a = argparse.ArgumentParser()
    a.add_argument('input'); a.add_argument('--fix', action='store_true')
    a.add_argument('--target', choices=['memo', 'cl', 'calc'], default='memo')
    a.add_argument('-o', '--output')
    o = a.parse_args()
    text = open(o.input, encoding='utf-8').read().rstrip('\n')
    if o.target == 'calc':
        text = '`' + text.strip('`') + '`'
    result, notes, warns = process(text, o.fix)
    if o.target == 'calc':
        result = result.strip('`')
    if o.target == 'cl':
        result = result.replace('\\', '\\\\')
    if o.output:
        open(o.output, 'w', encoding='utf-8').write(result + '\n')
    else:
        print(result)
    for n in notes: print('[고침] ' + n, file=sys.stderr)
    for w in warns: print('[경고] ' + w, file=sys.stderr)
    print(f'[요약] 고침 {len(notes)}건, 경고 {len(warns)}건', file=sys.stderr)
    sys.exit(1 if warns else 0)


if __name__ == '__main__':
    main()
