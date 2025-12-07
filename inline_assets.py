#!/usr/bin/env python3
"""
Inline Assets Script
Bundles the Vite React build into a single, self-contained HTML file.
"""

import os
import re
from pathlib import Path

# --- CONFIGURATION ---
DIST_DIR = Path('dist')
ASSETS_DIR = DIST_DIR / 'assets'
INPUT_HTML = DIST_DIR / 'index.html'
OUTPUT_HTML = Path('complete_web.html')

def main():
    if not INPUT_HTML.exists():
        print(f"ERROR: {INPUT_HTML} not found. Run 'npm run build' first.")
        exit(1)

    html_content = INPUT_HTML.read_text(encoding='utf-8')

    # --- 1. INLINE CSS FILES ---
    css_files = list(ASSETS_DIR.glob('*.css'))
    for css_file in css_files:
        css_content = css_file.read_text(encoding='utf-8')
        # Match: <link rel="stylesheet" crossorigin href="/assets/index-XXX.css">
        pattern = rf'<link\s+[^>]*href="[^"]*{re.escape(css_file.name)}"[^>]*>'
        match = re.search(pattern, html_content)
        if match:
            replacement = f'<style>{css_content}</style>'
            html_content = html_content[:match.start()] + replacement + html_content[match.end():]
            print(f"✓ Inlined CSS: {css_file.name}")
        else:
            # If not found by pattern, just append the style to head
            print(f"⚠ CSS link not found, appending to head: {css_file.name}")
            html_content = html_content.replace('</head>', f'<style>{css_content}</style>\n</head>')

    # --- 2. INLINE JS FILES ---
    js_files = list(ASSETS_DIR.glob('*.js'))
    for js_file in js_files:
        js_content = js_file.read_text(encoding='utf-8')
        # Match: <script type="module" crossorigin src="/assets/index-XXX.js"></script>
        pattern = rf'<script\s+[^>]*src="[^"]*{re.escape(js_file.name)}"[^>]*></script>'
        match = re.search(pattern, html_content)
        if match:
            replacement = f'<script type="module">{js_content}</script>'
            html_content = html_content[:match.start()] + replacement + html_content[match.end():]
            print(f"✓ Inlined JS: {js_file.name}")
        else:
            print(f"⚠ JS script tag not found for: {js_file.name}")

    # --- 3. INLINE index.css FROM ROOT IF EXISTS ---
    root_css = DIST_DIR / 'index.css'
    if root_css.exists():
        css_content = root_css.read_text(encoding='utf-8')
        pattern = r'<link\s+[^>]*href="[^"]*index\.css"[^>]*>'
        match = re.search(pattern, html_content)
        if match:
            replacement = f'<style>{css_content}</style>'
            html_content = html_content[:match.start()] + replacement + html_content[match.end():]
            print(f"✓ Inlined root CSS: index.css")

    # --- 4. CLEAN UP ANY REMAINING BROKEN LINKS ---
    # Remove any remaining <link> tags pointing to /assets/ that we couldn't inline
    html_content = re.sub(r'<link\s+[^>]*href="/assets/[^"]*"[^>]*>', '', html_content)
    # Remove any remaining <script> tags pointing to /assets/ that we couldn't inline
    html_content = re.sub(r'<script\s+[^>]*src="/assets/[^"]*"[^>]*></script>', '', html_content)

    # --- 5. WRITE OUTPUT ---
    OUTPUT_HTML.write_text(html_content, encoding='utf-8')
    size_kb = OUTPUT_HTML.stat().st_size / 1024
    print(f"\n✅ Successfully created: {OUTPUT_HTML} ({size_kb:.1f} KB)")

if __name__ == '__main__':
    main()
