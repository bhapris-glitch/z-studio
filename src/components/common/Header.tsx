<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Viewer - Header.tsx</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #0b0d11;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: #f8fafc;
    }
    .code-font {
      font-family: 'Fira Code', monospace;
    }
    .line-number {
      user-select: none;
      color: #475569;
      text-align: right;
      padding-right: 1.5rem;
      min-width: 3.5rem;
    }
    .code-scroll::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .code-scroll::-webkit-scrollbar-track {
      background: #0d0f14;
    }
    .code-scroll::-webkit-scrollbar-thumb {
      background: #1e222b;
      border-radius: 4px;
    }
    .code-scroll::-webkit-scrollbar-thumb:hover {
      background: #2a303c;
    }
    /* Syntax highlighting */
    .token-kw { color: #d946ef; font-weight: 500; } /* keywords: import, from, const, return, export */
    .token-fn { color: #38bdf8; } /* function / component names */
    .token-str { color: #34d399; } /* strings */
    .token-type { color: #f59e0b; } /* types & interfaces */
    .token-tag { color: #00f2fe; } /* JSX tags */
    .token-attr { color: #c084fc; } /* JSX props */
    .token-cmt { color: #64748b; font-style: italic; } /* comments */
    .token-punct { color: #94a3b8; }
    .token-bool { color: #fb7185; }
  </style>
</head>
<body class="min-h-screen bg-[#0b0d11] text-slate-100 flex flex-col justify-between selection:bg-[#00f2fe]/20 selection:text-[#00f2fe]">

  <!-- Top App Navigation / Status Bar -->
  <header class="border-b border-white/10 bg-[#111318]/90 backdrop-blur-xl sticky top-0 z-50 px-6 py-3.5 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <!-- Zavoka Z Logo Mark -->
      <div class="w-9 h-9 rounded-xl bg-[#0c0e12] border border-[#00f2fe]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.15)] overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" fill="none">
          <defs>
            <linearGradient id="topF" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#00f2fe"/>
              <stop offset="100%" stop-color="#38bdf8"/>
            </linearGradient>
            <linearGradient id="diagF" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#00f2fe"/>
              <stop offset="50%" stop-color="#8b5cf6"/>
              <stop offset="100%" stop-color="#d946ef"/>
            </linearGradient>
            <linearGradient id="botF" x1="0%" y1="100%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a855f7"/>
              <stop offset="100%" stop-color="#6366f1"/>
            </linearGradient>
          </defs>
          <path d="M 44 68 L 212 68 L 176 108 L 44 108 Z" fill="url(#topF)"/>
          <polygon points="212,68 176,108 80,188 116,148" fill="url(#diagF)"/>
          <path d="M 44 148 L 80 148 L 212 188 L 44 188 Z" fill="url(#botF)"/>
          <circle cx="212" cy="68" r="8" fill="#00f2fe" opacity="0.8"/>
        </svg>
      </div>

      <div class="flex items-center gap-2">
        <span class="font-bold tracking-tight text-white text-base">Zavoka Studio</span>
        <span class="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20">CODE HUB</span>
      </div>

      <div class="h-4 w-px bg-white/10 mx-1"></div>

      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
        <span>src</span>
        <span class="text-slate-600">/</span>
        <span>components</span>
        <span class="text-slate-600">/</span>
        <span>common</span>
        <span class="text-slate-600">/</span>
        <span class="text-[#00f2fe] font-semibold">Header.tsx</span>
      </nav>
    </div>

    <!-- Actions: Copy & Download -->
    <div class="flex items-center gap-3">
      <!-- Toast feedback -->
      <div id="copy-toast" class="hidden items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-pulse">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
        <span>Copied to clipboard!</span>
      </div>

      <button id="copy-btn" onclick="copySourceCode()" class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-slate-200 text-xs font-semibold transition-all shadow-sm group">
        <svg class="w-3.5 h-3.5 text-[#00f2fe] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
        <span>1-Click Copy Code</span>
      </button>

      <button id="download-btn" onclick="downloadFile()" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] hover:opacity-95 active:scale-95 text-[#0b0d11] text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)]">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        <span>Download .tsx</span>
      </button>
    </div>
  </header>

  <!-- Main Viewer Content -->
  <main class="max-w-6xl w-full mx-auto p-6 md:p-8 flex-1 flex flex-col">
    <!-- Meta Summary Bar -->
    <div class="mb-5 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#111318]/80 border border-white/5 backdrop-blur-md">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#00f2fe] font-bold code-font text-xs">
          TSX
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-sm font-bold text-white tracking-wide">src/components/common/Header.tsx</h1>
            <span class="text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded-full">React 18 / TypeScript</span>
          </div>
          <p class="text-xs text-slate-400 mt-0.5">Global Header Navigation &bull; Live 8K Core Engine Status &bull; Upload CTA Trigger &bull; User Avatar</p>
        </div>
      </div>

      <div class="flex items-center gap-4 text-xs text-slate-400 code-font">
        <div class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]"></span>
          <span>TypeScript Component</span>
        </div>
        <span>Lines: <strong class="text-white">105</strong></span>
        <span>Size: <strong class="text-white">3.4 KB</strong></span>
      </div>
    </div>

    <!-- Code Editor Card -->
    <div class="rounded-2xl border border-white/10 bg-[#0d0f14] overflow-hidden shadow-2xl flex-1 flex flex-col">
      <!-- Mac-style Window Title Bar -->
      <div class="bg-[#14171e] px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
          <span class="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
          <span class="w-3 h-3 rounded-full bg-[#27c93f]"></span>
          <span class="ml-3 text-xs text-slate-400 font-mono">Header.tsx</span>
        </div>
        <div class="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
          <span>UTF-8</span>
          <span>&bull;</span>
          <span>TypeScript JSX</span>
        </div>
      </div>

      <!-- Code Stream Display with line numbers -->
      <div class="p-4 md:p-6 overflow-x-auto code-scroll flex-1 font-mono text-[13px] leading-relaxed select-text">
        <div class="flex">
          <!-- Line Numbers -->
          <div class="line-number select-none text-slate-600 font-mono">
            1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>87<br>88<br>89<br>90<br>91<br>92<br>93<br>94<br>95<br>96<br>97<br>98<br>99<br>100<br>101<br>102<br>103<br>104<br>105
          </div>

          <!-- Formatted Code Text -->
          <pre class="flex-1 text-slate-300 font-mono whitespace-pre overflow-x-visible"><code><span class="token-cmt">/**
 * Zavoka Studio - Global Persistent Application Header
 * Path: src/components/common/Header.tsx
 * Features: Brand Logomark, 8K Neural Status, Quick Upload Action, User Avatar
 */</span>

<span class="token-kw">import</span> React <span class="token-kw">from</span> <span class="token-str">'react'</span>;

<span class="token-kw">export interface</span> <span class="token-type">HeaderProps</span> {
  <span class="token-attr">onOpenUpload</span>?: () =&gt; <span class="token-type">void</span>;
  <span class="token-attr">activeTab</span>?: <span class="token-type">string</span>;
  <span class="token-attr">isNeuralEngineActive</span>?: <span class="token-type">boolean</span>;
  <span class="token-attr">userProfile</span>?: {
    <span class="token-attr">name</span>: <span class="token-type">string</span>;
    <span class="token-attr">avatarUrl</span>: <span class="token-type">string</span>;
    <span class="token-attr">tier</span>: <span class="token-str">'PRO'</span> | <span class="token-str">'STUDIO'</span> | <span class="token-str">'FREE'</span>;
  };
}

<span class="token-kw">export const</span> <span class="token-fn">Header</span>: React.FC&lt;<span class="token-type">HeaderProps</span>&gt; = ({
  <span class="token-attr">onOpenUpload</span>,
  <span class="token-attr">activeTab</span> = <span class="token-str">'studio'</span>,
  <span class="token-attr">isNeuralEngineActive</span> = <span class="token-bool">true</span>,
  <span class="token-attr">userProfile</span> = {
    <span class="token-attr">name</span>: <span class="token-str">'Studio Artist'</span>,
    <span class="token-attr">avatarUrl</span>: <span class="token-str">'/avatars/photographer.jpg'</span>,
    <span class="token-attr">tier</span>: <span class="token-str">'PRO'</span>,
  },
}) =&gt; {
  <span class="token-kw">return</span> (
    &lt;<span class="token-tag">header</span> <span class="token-attr">className</span>=<span class="token-str">"sticky top-0 z-40 w-full bg-[#111318]/90 backdrop-blur-xl border-b border-white/10 px-4 lg:px-6 py-3 transition-colors duration-200"</span>&gt;
      &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"max-w-7xl mx-auto flex items-center justify-between gap-4"</span>&gt;
        
        <span class="token-cmt">{/* Brand Identity & Neural Status Badge */}</span>
        &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"flex items-center gap-3.5"</span>&gt;
          &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0b0d11] border border-[#00f2fe]/40 shadow-[0_0_16px_rgba(0,242,254,0.2)] overflow-hidden group cursor-pointer"</span>&gt;
            &lt;<span class="token-tag">img</span> 
              <span class="token-attr">src</span>=<span class="token-str">"/favicon.svg"</span> 
              <span class="token-attr">alt</span>=<span class="token-str">"Zavoka Studio Logo"</span> 
              <span class="token-attr">className</span>=<span class="token-str">"w-8 h-8 object-contain transition-transform group-hover:scale-110"</span>
            /&gt;
            &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"absolute inset-0 bg-gradient-to-tr from-[#00f2fe]/10 to-transparent pointer-events-none"</span> /&gt;
          &lt;/<span class="token-tag">div</span>&gt;

          &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"flex flex-col"</span>&gt;
            &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"flex items-center gap-2"</span>&gt;
              &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>=<span class="token-str">"text-lg font-extrabold tracking-tight text-white"</span>&gt;
                Zavoka
              &lt;/<span class="token-tag">span</span>&gt;
              &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>=<span class="token-str">"px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#00f2fe] to-[#8b5cf6] text-[#0b0d11]"</span>&gt;
                {userProfile.tier}
              &lt;/<span class="token-tag">span</span>&gt;
            &lt;/<span class="token-tag">div</span>&gt;

            <span class="token-cmt">{/* 8K Neural Status Indicator */}</span>
            &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"flex items-center gap-1.5 mt-0.5"</span>&gt;
              &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>={<span class="token-str">`w-2 h-2 rounded-full ${isNeuralEngineActive ? 'bg-[#00f2fe] animate-pulse shadow-[0_0_8px_#00f2fe]' : 'bg-slate-600'}`</span>} /&gt;
              &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>=<span class="token-str">"text-[10px] font-semibold tracking-wider uppercase text-slate-400"</span>&gt;
                {isNeuralEngineActive ? '8K NEURAL ACTIVE' : 'ENGINE OFFLINE'}
              &lt;/<span class="token-tag">span</span>&gt;
            &lt;/<span class="token-tag">div</span>&gt;
          &lt;/<span class="token-tag">div</span>&gt;
        &lt;/<span class="token-tag">div</span>&gt;

        <span class="token-cmt">{/* Header Actions */}</span>
        &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"flex items-center gap-3 sm:gap-4"</span>&gt;
          <span class="token-cmt">{/* Live File Picker / Upload Modal Trigger */}</span>
          &lt;<span class="token-tag">button</span>
            <span class="token-attr">type</span>=<span class="token-str">"button"</span>
            <span class="token-attr">onClick</span>={onOpenUpload}
            <span class="token-attr">className</span>=<span class="token-str">"flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 active:scale-95 border border-[#00f2fe]/30 text-[#00f2fe] text-xs sm:text-sm font-semibold transition-all shadow-[0_0_12px_rgba(0,242,254,0.12)] cursor-pointer"</span>
          &gt;
            &lt;<span class="token-tag">svg</span> <span class="token-attr">className</span>=<span class="token-str">"w-4 h-4"</span> <span class="token-attr">fill</span>=<span class="token-str">"none"</span> <span class="token-attr">stroke</span>=<span class="token-str">"currentColor"</span> <span class="token-attr">viewBox</span>=<span class="token-str">"0 0 24 24"</span>&gt;
              &lt;<span class="token-tag">path</span> <span class="token-attr">strokeLinecap</span>=<span class="token-str">"round"</span> <span class="token-attr">strokeLinejoin</span>=<span class="token-str">"round"</span> <span class="token-attr">strokeWidth</span>={2.2} <span class="token-attr">d</span>=<span class="token-str">"M12 4v16m8-8H4"</span> /&gt;
            &lt;/<span class="token-tag">svg</span>&gt;
            &lt;<span class="token-tag">span</span>&gt;Upload&lt;/<span class="token-tag">span</span>&gt;
          &lt;/<span class="token-tag">button</span>&gt;

          <span class="token-cmt">{/* User Avatar Profile */}</span>
          &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"relative group cursor-pointer"</span>&gt;
            &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#00f2fe] via-[#8b5cf6] to-[#d946ef] transition-transform group-hover:scale-105"</span>&gt;
              &lt;<span class="token-tag">img</span>
                <span class="token-attr">src</span>={userProfile.avatarUrl}
                <span class="token-attr">alt</span>={userProfile.name}
                <span class="token-attr">className</span>=<span class="token-str">"w-full h-full rounded-full object-cover bg-[#0b0d11]"</span>
                <span class="token-attr">onError</span>={(e) =&gt; {
                  <span class="token-cmt">// Fallback avatar initials</span>
                  (e.target as HTMLElement).style.display = 'none';
                }}
              /&gt;
            &lt;/<span class="token-tag">div</span>&gt;
            &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>=<span class="token-str">"absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#111318]"</span> /&gt;
          &lt;/<span class="token-tag">div</span>&gt;
        &lt;/<span class="token-tag">div</span>&gt;

      &lt;/<span class="token-tag">div</span>&gt;
    &lt;/<span class="token-tag">header</span>&gt;
  );
};

<span class="token-kw">export default</span> Header;</code></pre>
        </div>
      </div>
    </div>
  </main>

  <!-- Next / Prev File Navigation Bar -->
  <footer class="border-t border-white/5 bg-[#0e1015] px-6 py-3 text-xs text-slate-500 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <span>Previous:</span>
      <span class="text-slate-400 code-font">src/assets/styles/theme-dark.css</span>
    </div>
    <div class="flex items-center gap-2">
      <span>Next in tree:</span>
      <span class="text-[#00f2fe] code-font font-medium">src/components/common/NavigationTabs.tsx</span>
    </div>
  </footer>

  <!-- Raw code payload for copy & download functions -->
  <textarea id="raw-code" class="hidden">/**
 * Zavoka Studio - Global Persistent Application Header
 * Path: src/components/common/Header.tsx
 * Features: Brand Logomark, 8K Neural Status, Quick Upload Action, User Avatar
 */

import React from 'react';

export interface HeaderProps {
  onOpenUpload?: () => void;
  activeTab?: string;
  isNeuralEngineActive?: boolean;
  userProfile?: {
    name: string;
    avatarUrl: string;
    tier: 'PRO' | 'STUDIO' | 'FREE';
  };
}

export const Header: React.FC<HeaderProps> = ({
  onOpenUpload,
  activeTab = 'studio',
  isNeuralEngineActive = true,
  userProfile = {
    name: 'Studio Artist',
    avatarUrl: '/avatars/photographer.jpg',
    tier: 'PRO',
  },
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#111318]/90 backdrop-blur-xl border-b border-white/10 px-4 lg:px-6 py-3 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Identity & Neural Status Badge */}
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0b0d11] border border-[#00f2fe]/40 shadow-[0_0_16px_rgba(0,242,254,0.2)] overflow-hidden group cursor-pointer">
            <img 
              src="/favicon.svg" 
              alt="Zavoka Studio Logo" 
              className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2fe]/10 to-transparent pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold tracking-tight text-white">
                Zavoka
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#00f2fe] to-[#8b5cf6] text-[#0b0d11]">
                {userProfile.tier}
              </span>
            </div>

            {/* 8K Neural Status Indicator */}
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`w-2 h-2 rounded-full ${isNeuralEngineActive ? 'bg-[#00f2fe] animate-pulse shadow-[0_0_8px_#00f2fe]' : 'bg-slate-600'}`} />
              <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                {isNeuralEngineActive ? '8K NEURAL ACTIVE' : 'ENGINE OFFLINE'}
              </span>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live File Picker / Upload Modal Trigger */}
          <button
            type="button"
            onClick={onOpenUpload}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 active:scale-95 border border-[#00f2fe]/30 text-[#00f2fe] text-xs sm:text-sm font-semibold transition-all shadow-[0_0_12px_rgba(0,242,254,0.12)] cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Upload</span>
          </button>

          {/* User Avatar Profile */}
          <div className="relative group cursor-pointer">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#00f2fe] via-[#8b5cf6] to-[#d946ef] transition-transform group-hover:scale-105">
              <img
                src={userProfile.avatarUrl}
                alt={userProfile.name}
                className="w-full h-full rounded-full object-cover bg-[#0b0d11]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#111318]" />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
</textarea>

  <script>
    function copySourceCode() {
      const code = document.getElementById('raw-code').value;
      navigator.clipboard.writeText(code).then(() => {
        const toast = document.getElementById('copy-toast');
        const copyBtn = document.getElementById('copy-btn');
        toast.classList.remove('hidden');
        toast.classList.add('flex');
        copyBtn.classList.add('border-emerald-500/50', 'text-emerald-400');
        
        setTimeout(() => {
          toast.classList.add('hidden');
          toast.classList.remove('flex');
          copyBtn.classList.remove('border-emerald-500/50', 'text-emerald-400');
        }, 2500);
      });
    }

    function downloadFile() {
      const code = document.getElementById('raw-code').value;
      const blob = new Blob([code], { type: 'text/typescript;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Header.tsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>
