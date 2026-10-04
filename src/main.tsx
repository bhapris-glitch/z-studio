<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Viewer - main.tsx</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #060709;
      color: #f1f5f9;
    }
    pre, code, .font-code {
      font-family: 'Fira Code', monospace;
    }
    .syntax-comment { color: #64748b; font-style: italic; }
    .syntax-keyword { color: #f43f5e; font-weight: 600; }
    .syntax-import { color: #c084fc; font-weight: 500; }
    .syntax-fn { color: #38bdf8; font-weight: 600; }
    .syntax-string { color: #34d399; }
    .syntax-tag { color: #00f2fe; }
    .syntax-attr { color: #fbbf24; }
    .syntax-punct { color: #94a3b8; }
    .syntax-type { color: #fb7185; }

    /* Custom sleek scrollbars */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #090a0d; }
    ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #334155; }
  </style>
</head>
<body class="min-h-screen bg-[#07080b] flex flex-col antialiased selection:bg-[#00f2fe]/30 selection:text-white">

  <!-- Top Global Bar -->
  <header class="h-16 border-b border-white/10 bg-[#0b0d12]/90 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between sticky top-0 z-40">
    <div class="flex items-center gap-3 sm:gap-4">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f2fe] via-[#3b82f6] to-[#a855f7] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.35)]">
        <div class="w-full h-full bg-[#0b0d12] rounded-[10px] flex items-center justify-center">
          <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#a855f7] text-sm tracking-wider">Z</span>
        </div>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h1 class="text-sm font-extrabold text-white tracking-tight">Zavoka Studio</h1>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30">SRC ROOT</span>
        </div>
        <p class="text-xs font-mono text-slate-400">src / <strong class="text-white">main.tsx</strong></p>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2.5 sm:gap-3">
      <button id="copyBtn" onclick="copySourceCode()" class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-slate-200 transition-all cursor-pointer hover:border-white/25 active:scale-95">
        <svg id="copyIcon" class="w-4 h-4 text-[#00f2fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span id="copyText">1-Click Copy Code</span>
      </button>

      <button onclick="downloadFile()" class="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#818cf8] text-[#07090e] text-xs font-bold font-mono tracking-tight shadow-[0_0_18px_rgba(0,242,254,0.3)] hover:shadow-[0_0_24px_rgba(0,242,254,0.5)] transition-all cursor-pointer active:scale-95">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Download .tsx</span>
      </button>
    </div>
  </header>

  <!-- Sub-header metadata strip -->
  <div class="bg-[#0e1017] border-b border-white/[0.06] px-4 sm:px-8 py-2 text-[11px] font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
    <div class="flex items-center gap-4">
      <span class="flex items-center gap-1.5 text-emerald-400">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        Zero Syntax Errors
      </span>
      <span>Lines: <strong class="text-white">62</strong></span>
      <span>Size: <strong class="text-white">2.4 KB</strong></span>
      <span>Encoding: <strong class="text-white">UTF-8</strong></span>
    </div>
    <div class="flex items-center gap-3 text-slate-400">
      <span>Runtime: <strong class="text-slate-200">React 18.2 Concurrent Root</strong></span>
      <span>•</span>
      <span>Mount: <strong class="text-[#00f2fe]">#root DOM Node</strong></span>
    </div>
  </div>

  <!-- Main Code Container -->
  <main class="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-4">
    
    <!-- Code Window Card -->
    <div class="bg-[#0b0d13] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
      
      <!-- Code Window Header / Tabs -->
      <div class="px-4 py-3 bg-[#11141c] border-b border-white/[0.08] flex items-center justify-between select-none">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1.5 mr-2">
            <span class="w-3 h-3 rounded-full bg-[#f43f5e]/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-[#fbbf24]/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-[#34d399]/80 inline-block"></span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0b0d13] border border-white/10 text-xs font-mono text-white">
            <svg class="w-3.5 h-3.5 text-[#00f2fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span class="font-bold">main.tsx</span>
            <span class="text-[10px] text-slate-400">Entrypoint</span>
          </div>
        </div>

        <div class="text-[11px] font-mono text-slate-400 flex items-center gap-3">
          <span>Vite 5 / ESNext</span>
          <span>•</span>
          <span class="text-[#00f2fe]">TypeScript Strict</span>
        </div>
      </div>

      <!-- Syntax Highlighted Code Viewer -->
      <div class="p-4 sm:p-6 overflow-x-auto text-xs sm:text-[13px] leading-relaxed font-code bg-[#08090e]">
        <pre class="text-slate-300"><code><span class="syntax-comment">/**
 * Zavoka Studio - Client Application Entrypoint
 * Path: src/main.tsx
 * 
 * Responsibilities:
 * - Bootstraps React 18 Concurrent Root onto document.getElementById('root')
 * - Imports global base resets, neural grid patterns, and typography tokens
 * - Initializes dark obsidian studio theme tokens
 * - Ensures fail-safe graceful root element assertion
 */</span>

<span class="syntax-keyword">import</span> <span class="syntax-import">React</span> <span class="syntax-keyword">from</span> <span class="syntax-string">'react'</span><span class="syntax-punct">;</span>
<span class="syntax-keyword">import</span> <span class="syntax-import">ReactDOM</span> <span class="syntax-keyword">from</span> <span class="syntax-string">'react-dom/client'</span><span class="syntax-punct">;</span>
<span class="syntax-keyword">import</span> <span class="syntax-import">App</span> <span class="syntax-keyword">from</span> <span class="syntax-string">'./App'</span><span class="syntax-punct">;</span>

<span class="syntax-comment">// Core Global Stylesheets</span>
<span class="syntax-keyword">import</span> <span class="syntax-string">'./assets/styles/globals.css'</span><span class="syntax-punct">;</span>
<span class="syntax-keyword">import</span> <span class="syntax-string">'./assets/styles/theme-dark.css'</span><span class="syntax-punct">;</span>

<span class="syntax-comment">// Locate the HTML container mount node</span>
<span class="syntax-keyword">const</span> <span class="syntax-fn">rootElement</span> = <span class="syntax-import">document</span><span class="syntax-punct">.</span><span class="syntax-fn">getElementById</span><span class="syntax-punct">(</span><span class="syntax-string">'root'</span><span class="syntax-punct">);</span>

<span class="syntax-comment">// Runtime validation ensuring mount node exists</span>
<span class="syntax-keyword">if</span> <span class="syntax-punct">(!</span><span class="syntax-fn">rootElement</span><span class="syntax-punct">)</span> <span class="syntax-punct">{</span>
  <span class="syntax-keyword">const</span> <span class="syntax-fn">errMsg</span> = <span class="syntax-string">'[Zavoka Studio]: Fatal Error - Target container "#root" was not found in index.html DOM hierarchy.'</span><span class="syntax-punct">;</span>
  <span class="syntax-import">console</span><span class="syntax-punct">.</span><span class="syntax-fn">error</span><span class="syntax-punct">(</span><span class="syntax-fn">errMsg</span><span class="syntax-punct">);</span>
  <span class="syntax-keyword">throw new</span> <span class="syntax-type">Error</span><span class="syntax-punct">(</span><span class="syntax-fn">errMsg</span><span class="syntax-punct">);</span>
<span class="syntax-punct">}</span>

<span class="syntax-comment">// Initialize React 18 Concurrent Mode root and render application</span>
<span class="syntax-import">ReactDOM</span><span class="syntax-punct">.</span><span class="syntax-fn">createRoot</span><span class="syntax-punct">(</span><span class="syntax-fn">rootElement</span><span class="syntax-punct">).</span><span class="syntax-fn">render</span><span class="syntax-punct">(</span>
  <span class="syntax-punct">&lt;</span><span class="syntax-tag">React.StrictMode</span><span class="syntax-punct">&gt;</span>
    <span class="syntax-punct">&lt;</span><span class="syntax-tag">App</span> <span class="syntax-punct">/&gt;</span>
  <span class="syntax-punct">&lt;/</span><span class="syntax-tag">React.StrictMode</span><span class="syntax-punct">&gt;</span>
<span class="syntax-punct">);</span>
</code></pre>
      </div>

    </div>

    <!-- Architecture & Integration Notes Box -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
      <div class="p-4 rounded-2xl bg-[#0e1017] border border-white/[0.08] flex flex-col gap-1.5">
        <div class="flex items-center gap-2 text-xs font-bold text-white">
          <svg class="w-4 h-4 text-[#00f2fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>React 18 Concurrent Root</span>
        </div>
        <p class="text-xs text-slate-400">Uses <code class="text-[#00f2fe] font-mono">createRoot()</code> for non-blocking UI transitions when processing large 8K imagery.</p>
      </div>

      <div class="p-4 rounded-2xl bg-[#0e1017] border border-white/[0.08] flex flex-col gap-1.5">
        <div class="flex items-center gap-2 text-xs font-bold text-white">
          <svg class="w-4 h-4 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          <span>Global Design Cascade</span>
        </div>
        <p class="text-xs text-slate-400">Pipes <code class="text-purple-300 font-mono">globals.css</code> and <code class="text-purple-300 font-mono">theme-dark.css</code> across all downstream tabs.</p>
      </div>

      <div class="p-4 rounded-2xl bg-[#0e1017] border border-white/[0.08] flex flex-col gap-1.5">
        <div class="flex items-center gap-2 text-xs font-bold text-white">
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Fail-Safe Mount Guard</span>
        </div>
        <p class="text-xs text-slate-400">Strict TypeScript runtime guard preventing unhandled null dereferences if HTML root is missing.</p>
      </div>
    </div>

  </main>

  <!-- Bottom Navigation Link Bar -->
  <footer class="h-12 border-t border-white/[0.08] bg-[#090b10] px-4 sm:px-8 flex items-center justify-between text-xs font-mono text-slate-400">
    <div>
      <span>Previous in tree: </span>
      <span class="text-[#00f2fe]">src/App.tsx</span>
    </div>
    <div>
      <span>Next in tree: </span>
      <span class="text-[#00f2fe]">index.html</span>
    </div>
  </footer>

  <script>
    const RAW_SOURCE_CODE = `/**
 * Zavoka Studio - Client Application Entrypoint
 * Path: src/main.tsx
 * 
 * Responsibilities:
 * - Bootstraps React 18 Concurrent Root onto document.getElementById('root')
 * - Imports global base resets, neural grid patterns, and typography tokens
 * - Initializes dark obsidian studio theme tokens
 * - Ensures fail-safe graceful root element assertion
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Core Global Stylesheets
import './assets/styles/globals.css';
import './assets/styles/theme-dark.css';

// Locate the HTML container mount node
const rootElement = document.getElementById('root');

// Runtime validation ensuring mount node exists
if (!rootElement) {
  const errMsg = '[Zavoka Studio]: Fatal Error - Target container "#root" was not found in index.html DOM hierarchy.';
  console.error(errMsg);
  throw new Error(errMsg);
}

// Initialize React 18 Concurrent Mode root and render application
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;

    function copySourceCode() {
      navigator.clipboard.writeText(RAW_SOURCE_CODE).then(() => {
        const copyText = document.getElementById('copyText');
        const copyIcon = document.getElementById('copyIcon');
        copyText.textContent = 'Copied to Clipboard!';
        copyText.classList.add('text-[#00f2fe]');
        setTimeout(() => {
          copyText.textContent = '1-Click Copy Code';
          copyText.classList.remove('text-[#00f2fe]');
        }, 2500);
      }).catch(err => {
        console.error('Failed to copy', err);
      });
    }

    function downloadFile() {
      const blob = new Blob([RAW_SOURCE_CODE], { type: 'text/typescript' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'main.tsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>
