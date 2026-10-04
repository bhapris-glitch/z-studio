<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Viewer - App.tsx</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #08090c;
      color: #f1f5f9;
    }
    pre, code, .font-mono {
      font-family: 'Fira Code', monospace;
    }
    /* Syntax Highlighting Tokens */
    .syn-keyword { color: #f43f5e; font-weight: 600; }
    .syn-import { color: #c084fc; font-weight: 500; }
    .syn-from { color: #f43f5e; }
    .syn-string { color: #34d399; }
    .syn-comment { color: #64748b; font-style: italic; }
    .syn-func { color: #38bdf8; font-weight: 600; }
    .syn-type { color: #fbbf24; }
    .syn-prop { color: #38bdf8; }
    .syn-tag { color: #22d3ee; font-weight: 600; }
    .syn-attr { color: #a78bfa; }
    .syn-num { color: #fb923c; }
    .syn-punct { color: #94a3b8; }

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #0b0d11;
    }
    ::-webkit-scrollbar-thumb {
      background: #1e293b;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #334155;
    }
  </style>
</head>
<body class="min-h-screen bg-[#08090c] text-slate-100 flex flex-col antialiased selection:bg-[#00f2fe]/30 selection:text-white">

  <!-- Top Sticky Application Navigation Bar -->
  <header class="sticky top-0 z-40 w-full bg-[#0d0f15]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
    <div class="flex items-center gap-3.5">
      <!-- Zavoka Brand Glyph -->
      <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f2fe]/20 to-[#8b5cf6]/20 border border-[#00f2fe]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.25)]">
        <svg class="w-5 h-5 text-[#00f2fe]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16l-10 16h10" />
          <circle cx="12" cy="12" r="1.5" fill="#00f2fe" />
        </svg>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <span class="font-extrabold text-white text-base tracking-tight">Zavoka Studio</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30">SRC ROOT</span>
        </div>
        <div class="text-xs text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
          <span>src</span>
          <span>/</span>
          <span class="text-white font-semibold">App.tsx</span>
        </div>
      </div>
    </div>

    <!-- Actions: Copy & Download -->
    <div class="flex items-center gap-2.5">
      <button id="copy-btn" onclick="copyCode()" class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-[#00f2fe]/15 border border-white/10 hover:border-[#00f2fe]/40 text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer">
        <svg id="copy-icon" class="w-4 h-4 text-[#00f2fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span id="copy-text">1-Click Copy Code</span>
      </button>

      <button onclick="downloadFile()" class="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#00f2fe] hover:bg-[#38bdf8] text-[#08090c] text-xs font-extrabold shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all active:scale-95 cursor-pointer">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Download .tsx</span>
      </button>
    </div>
  </header>

  <!-- Telemetry Sub-header -->
  <div class="bg-[#0b0d12] border-b border-white/[0.06] px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
    <div class="flex items-center gap-4">
      <span class="flex items-center gap-1.5 text-emerald-400 font-semibold">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Zero Syntax Errors
      </span>
      <span>Lines: <strong class="text-white">238</strong></span>
      <span>Size: <strong class="text-white">9.8 KB</strong></span>
      <span>Encoding: <strong class="text-slate-300">UTF-8</strong></span>
    </div>
    <div class="flex items-center gap-4 text-[11px]">
      <span class="text-slate-400">Application Shell &amp; Route Hub:</span>
      <span class="text-[#00f2fe] font-semibold">SPA State Coordinator (Enhance • 3D Staging • Export Lab)</span>
    </div>
  </div>

  <!-- Main Code Surface -->
  <main class="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <div class="bg-[#0d1017] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
      
      <!-- Editor Titlebar -->
      <div class="bg-[#11141f] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span class="ml-3 font-mono text-xs text-slate-300 font-semibold flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-[#00f2fe]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            App.tsx
          </span>
        </div>
        <div class="text-[11px] font-mono text-slate-400 flex items-center gap-3">
          <span>React 18.2</span>
          <span>•</span>
          <span>TypeScript 5.4</span>
        </div>
      </div>

      <!-- Code Line Container -->
      <div class="p-4 sm:p-6 overflow-x-auto text-xs sm:text-[13px] leading-relaxed select-text">
        <pre><code id="source-code" class="text-slate-300">
<span class="syn-comment">/**
 * Zavoka Studio - Main Application Component &amp; Single-Page State Orchestrator
 * Path: src/App.tsx
 * Architecture: React 18 / TypeScript / Tailwind CSS / WebGPU &amp; CoreML Integration
 * 
 * Responsibilities:
 * - Centralized tab routing between 'enhance' (Super HD), 'product-ai' (3D Staging), and 'export' (Export Lab)
 * - Global active asset management with simulated 8K RAW and JPG ingestion
 * - Modal presentation lifecycle for the UploadModal
 * - Live notification pill orchestration ("Loaded &amp; validated...")
 * - Persistent footer status bar with WebGPU / CoreML performance telemetry
 */</span>

<span class="syn-import">import</span> <span class="syn-func">React</span>, <span class="syn-punct">{</span> <span class="syn-func">useState</span>, <span class="syn-func">useEffect</span> <span class="syn-punct">}</span> <span class="syn-from">from</span> <span class="syn-string">'react'</span><span class="syn-punct">;</span>

<span class="syn-comment">// Global Types</span>
<span class="syn-import">import</span> <span class="syn-punct">{</span>
  <span class="syn-type">ActiveTabId</span>,
  <span class="syn-type">UploadedAssetInfo</span>,
  <span class="syn-type">UserProfile</span>,
  <span class="syn-type">EngineStatus</span>,
<span class="syn-punct">}</span> <span class="syn-from">from</span> <span class="syn-string">'./types'</span><span class="syn-punct">;</span>

<span class="syn-comment">// Core Layout &amp; Feature Components</span>
<span class="syn-import">import</span> <span class="syn-type">Header</span> <span class="syn-from">from</span> <span class="syn-string">'./components/common/Header'</span><span class="syn-punct">;</span>
<span class="syn-import">import</span> <span class="syn-type">NavigationTabs</span> <span class="syn-from">from</span> <span class="syn-string">'./components/common/NavigationTabs'</span><span class="syn-punct">;</span>
<span class="syn-import">import</span> <span class="syn-type">UploadModal</span> <span class="syn-from">from</span> <span class="syn-string">'./components/upload/UploadModal'</span><span class="syn-punct">;</span>
<span class="syn-import">import</span> <span class="syn-type">SuperHdEditor</span> <span class="syn-from">from</span> <span class="syn-string">'./components/editor/SuperHdEditor'</span><span class="syn-punct">;</span>
<span class="syn-import">import</span> <span class="syn-type">ProductStaging</span> <span class="syn-from">from</span> <span class="syn-string">'./components/staging/ProductStaging'</span><span class="syn-punct">;</span>
<span class="syn-import">import</span> <span class="syn-type">ExportLab</span> <span class="syn-from">from</span> <span class="syn-string">'./components/export/ExportLab'</span><span class="syn-punct">;</span>

<span class="syn-comment">// Default Initial Asset Previews</span>
<span class="syn-keyword">const</span> <span class="syn-prop">DEFAULT_PREVIEW_RAW</span> <span class="syn-punct">=</span> <span class="syn-string">'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop'</span><span class="syn-punct">;</span>
<span class="syn-keyword">const</span> <span class="syn-prop">DEFAULT_PRODUCT_STAGING_IMG</span> <span class="syn-punct">=</span> <span class="syn-string">'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1600&amp;auto=format&amp;fit=crop'</span><span class="syn-punct">;</span>

<span class="syn-keyword">export</span> <span class="syn-keyword">const</span> <span class="syn-func">App</span><span class="syn-punct">:</span> <span class="syn-type">React.FC</span> <span class="syn-punct">=</span> <span class="syn-punct">()</span> <span class="syn-punct">=&gt;</span> <span class="syn-punct">{</span>
  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-comment">// 1. Navigation &amp; Workspace State</span>
  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-keyword">const</span> <span class="syn-punct">[</span><span class="syn-prop">activeTab</span>, <span class="syn-prop">setActiveTab</span><span class="syn-punct">]</span> <span class="syn-punct">=</span> <span class="syn-func">useState</span><span class="syn-punct">&lt;</span><span class="syn-type">ActiveTabId</span><span class="syn-punct">&gt;(</span><span class="syn-string">'enhance'</span><span class="syn-punct">);</span>
  <span class="syn-keyword">const</span> <span class="syn-punct">[</span><span class="syn-prop">isUploadModalOpen</span>, <span class="syn-prop">setIsUploadModalOpen</span><span class="syn-punct">]</span> <span class="syn-punct">=</span> <span class="syn-func">useState</span><span class="syn-punct">&lt;</span><span class="syn-type">boolean</span><span class="syn-punct">&gt;(</span><span class="syn-keyword">false</span><span class="syn-punct">);</span>

  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-comment">// 2. Active Working Asset Info</span>
  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-keyword">const</span> <span class="syn-punct">[</span><span class="syn-prop">activeAsset</span>, <span class="syn-prop">setActiveAsset</span><span class="syn-punct">]</span> <span class="syn-punct">=</span> <span class="syn-func">useState</span><span class="syn-punct">&lt;</span><span class="syn-type">UploadedAssetInfo</span><span class="syn-punct">&gt;({</span>
    <span class="syn-prop">id</span><span class="syn-punct">:</span> <span class="syn-string">'asset_init_8k'</span>,
    <span class="syn-prop">fileName</span><span class="syn-punct">:</span> <span class="syn-string">'Live_Captured_Asset_8K.raw'</span>,
    <span class="syn-prop">fileSizeFormatted</span><span class="syn-punct">:</span> <span class="syn-string">'48.5 MB'</span>,
    <span class="syn-prop">fileSizeBytes</span><span class="syn-punct">:</span> <span class="syn-num">50855936</span>,
    <span class="syn-prop">format</span><span class="syn-punct">:</span> <span class="syn-string">'RAW'</span>,
    <span class="syn-prop">resolutionLabel</span><span class="syn-punct">:</span> <span class="syn-string">'7680 × 4320 (8K UHD)'</span>,
    <span class="syn-prop">width</span><span class="syn-punct">:</span> <span class="syn-num">7680</span>,
    <span class="syn-prop">height</span><span class="syn-punct">:</span> <span class="syn-num">4320</span>,
    <span class="syn-prop">aspectRatio</span><span class="syn-punct">:</span> <span class="syn-num">1.777</span>,
    <span class="syn-prop">objectUrl</span><span class="syn-punct">:</span> <span class="syn-prop">DEFAULT_PREVIEW_RAW</span>,
    <span class="syn-prop">colorGamut</span><span class="syn-punct">:</span> <span class="syn-string">'Rec.2020'</span>,
    <span class="syn-prop">status</span><span class="syn-punct">:</span> <span class="syn-string">'validated'</span>,
  <span class="syn-punct">});</span>

  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-comment">// 3. Ingestion Notification Toast State</span>
  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-keyword">const</span> <span class="syn-punct">[</span><span class="syn-prop">notificationText</span>, <span class="syn-prop">setNotificationText</span><span class="syn-punct">]</span> <span class="syn-punct">=</span> <span class="syn-func">useState</span><span class="syn-punct">&lt;</span><span class="syn-type">string</span> <span class="syn-punct">|</span> <span class="syn-keyword">null</span><span class="syn-punct">&gt;(</span>
    <span class="syn-string">'Loaded &amp; validated Live_Captured_Asset_8K.raw'</span>
  <span class="syn-punct">);</span>

  <span class="syn-comment">// Auto-dismiss notification chip after 6 seconds</span>
  <span class="syn-func">useEffect</span><span class="syn-punct">(()</span> <span class="syn-punct">=&gt;</span> <span class="syn-punct">{</span>
    <span class="syn-keyword">if</span> <span class="syn-punct">(</span><span class="syn-prop">notificationText</span><span class="syn-punct">)</span> <span class="syn-punct">{</span>
      <span class="syn-keyword">const</span> <span class="syn-prop">timer</span> <span class="syn-punct">=</span> <span class="syn-func">setTimeout</span><span class="syn-punct">(()</span> <span class="syn-punct">=&gt;</span> <span class="syn-punct">{</span>
        <span class="syn-func">setNotificationText</span><span class="syn-punct">(</span><span class="syn-keyword">null</span><span class="syn-punct">);</span>
      <span class="syn-punct">},</span> <span class="syn-num">6000</span><span class="syn-punct">);</span>
      <span class="syn-keyword">return</span> <span class="syn-punct">()</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">clearTimeout</span><span class="syn-punct">(</span><span class="syn-prop">timer</span><span class="syn-punct">);</span>
    <span class="syn-punct">}</span>
  <span class="syn-punct">}, [</span><span class="syn-prop">notificationText</span><span class="syn-punct">]);</span>

  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-comment">// 4. User Profile &amp; Engine Telemetry</span>
  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-keyword">const</span> <span class="syn-prop">userProfile</span><span class="syn-punct">:</span> <span class="syn-type">UserProfile</span> <span class="syn-punct">=</span> <span class="syn-punct">{</span>
    <span class="syn-prop">id</span><span class="syn-punct">:</span> <span class="syn-string">'user_zavoka_pro'</span>,
    <span class="syn-prop">name</span><span class="syn-punct">:</span> <span class="syn-string">'Elena Rostova'</span>,
    <span class="syn-prop">tier</span><span class="syn-punct">:</span> <span class="syn-string">'PRO'</span>,
    <span class="syn-prop">avatarUrl</span><span class="syn-punct">:</span> <span class="syn-string">'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=400&amp;auto=format&amp;fit=crop'</span>,
    <span class="syn-prop">activeHardwareAccel</span><span class="syn-punct">:</span> <span class="syn-string">'WebGPU'</span>,
  <span class="syn-punct">};</span>

  <span class="syn-keyword">const</span> <span class="syn-prop">engineStatus</span><span class="syn-punct">:</span> <span class="syn-type">EngineStatus</span> <span class="syn-punct">=</span> <span class="syn-punct">{</span>
    <span class="syn-prop">version</span><span class="syn-punct">:</span> <span class="syn-string">'CoreML v4.8'</span>,
    <span class="syn-prop">isHardwareAccelerated</span><span class="syn-punct">:</span> <span class="syn-keyword">true</span>,
    <span class="syn-prop">activeModelWeights</span><span class="syn-punct">:</span> <span class="syn-string">'ESRGAN-8K-Pro + ViT-Huge'</span>,
    <span class="syn-prop">vramAllocatedMB</span><span class="syn-punct">:</span> <span class="syn-num">1840</span>,
    <span class="syn-prop">latencyMs</span><span class="syn-punct">:</span> <span class="syn-num">28</span>,
  <span class="syn-punct">};</span>

  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-comment">// 5. Asset Upload Completion Handler</span>
  <span class="syn-comment">// --------------------------------------------------------------------------</span>
  <span class="syn-keyword">const</span> <span class="syn-func">handleAssetLoaded</span> <span class="syn-punct">=</span> <span class="syn-punct">(</span><span class="syn-prop">newAsset</span><span class="syn-punct">:</span> <span class="syn-type">UploadedAssetInfo</span><span class="syn-punct">)</span> <span class="syn-punct">=&gt;</span> <span class="syn-punct">{</span>
    <span class="syn-func">setActiveAsset</span><span class="syn-punct">(</span><span class="syn-prop">newAsset</span><span class="syn-punct">);</span>
    <span class="syn-func">setNotificationText</span><span class="syn-punct">(</span><span class="syn-string">`Loaded &amp; validated ${newAsset.fileName}`</span><span class="syn-punct">);</span>
  <span class="syn-punct">};</span>

  <span class="syn-keyword">return</span> <span class="syn-punct">(</span>
    <span class="syn-tag">&lt;div</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"min-h-screen bg-[#090a0d] text-white flex flex-col font-sans selection:bg-[#00f2fe]/30"</span><span class="syn-tag">&gt;</span>
      
      <span class="syn-comment">{/* Global Fixed Top Navigation Header */}</span>
      <span class="syn-tag">&lt;Header</span>
        <span class="syn-attr">userProfile</span><span class="syn-punct">={</span><span class="syn-prop">userProfile</span><span class="syn-punct">}</span>
        <span class="syn-attr">onOpenUploadModal</span><span class="syn-punct">={()</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">setIsUploadModalOpen</span><span class="syn-punct">(</span><span class="syn-keyword">true</span><span class="syn-punct">)}</span>
      <span class="syn-tag">/&gt;</span>

      <span class="syn-comment">{/* Workspace Navigation Tabs with Live Badges */}</span>
      <span class="syn-tag">&lt;NavigationTabs</span>
        <span class="syn-attr">activeTab</span><span class="syn-punct">={</span><span class="syn-prop">activeTab</span><span class="syn-punct">}</span>
        <span class="syn-attr">onTabChange</span><span class="syn-punct">={(</span><span class="syn-prop">tabId</span><span class="syn-punct">)</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">setActiveTab</span><span class="syn-punct">(</span><span class="syn-prop">tabId</span><span class="syn-punct">)}</span>
      <span class="syn-tag">/&gt;</span>

      <span class="syn-comment">{/* Live Validation Floating Banner Toast */}</span>
      <span class="syn-punct">{</span><span class="syn-prop">notificationText</span> <span class="syn-punct">&amp;&amp;</span> <span class="syn-punct">(</span>
        <span class="syn-tag">&lt;div</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"w-full max-w-7xl mx-auto px-4 sm:px-6 pt-3 animate-fade-in"</span><span class="syn-tag">&gt;</span>
          <span class="syn-tag">&lt;div</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"px-4 py-2.5 rounded-2xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-between shadow-[0_0_20px_rgba(0,242,254,0.15)] backdrop-blur-md"</span><span class="syn-tag">&gt;</span>
            <span class="syn-tag">&lt;div</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#00f2fe]"</span><span class="syn-tag">&gt;</span>
              <span class="syn-tag">&lt;svg</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"w-4 h-4 text-[#00f2fe] flex-shrink-0"</span> <span class="syn-attr">fill</span><span class="syn-punct">=</span><span class="syn-string">"none"</span> <span class="syn-attr">stroke</span><span class="syn-punct">=</span><span class="syn-string">"currentColor"</span> <span class="syn-attr">viewBox</span><span class="syn-punct">=</span><span class="syn-string">"0 0 24 24"</span><span class="syn-tag">&gt;</span>
                <span class="syn-tag">&lt;path</span> <span class="syn-attr">strokeLinecap</span><span class="syn-punct">=</span><span class="syn-string">"round"</span> <span class="syn-attr">strokeLinejoin</span><span class="syn-punct">=</span><span class="syn-string">"round"</span> <span class="syn-attr">strokeWidth</span><span class="syn-punct">={</span><span class="syn-num">2.5</span><span class="syn-punct">}</span> <span class="syn-attr">d</span><span class="syn-punct">=</span><span class="syn-string">"M5 13l4 4L19 7"</span> <span class="syn-tag">/&gt;</span>
              <span class="syn-tag">&lt;/svg&gt;</span>
              <span class="syn-tag">&lt;span&gt;</span><span class="syn-punct">{</span><span class="syn-prop">notificationText</span><span class="syn-punct">}</span><span class="syn-tag">&lt;/span&gt;</span>
              <span class="syn-tag">&lt;span</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-[#00f2fe]/20 text-white"</span><span class="syn-tag">&gt;</span>
                <span class="syn-punct">{</span><span class="syn-prop">activeAsset</span><span class="syn-punct">.</span><span class="syn-prop">resolutionLabel</span><span class="syn-punct">}</span>
              <span class="syn-tag">&lt;/span&gt;</span>
            <span class="syn-tag">&lt;/div&gt;</span>

            <span class="syn-tag">&lt;div</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"flex items-center gap-3"</span><span class="syn-tag">&gt;</span>
              <span class="syn-tag">&lt;button</span>
                <span class="syn-attr">onClick</span><span class="syn-punct">={()</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">setIsUploadModalOpen</span><span class="syn-punct">(</span><span class="syn-keyword">true</span><span class="syn-punct">)}</span>
                <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"text-xs font-bold text-white hover:text-[#00f2fe] underline transition-colors cursor-pointer"</span>
              <span class="syn-tag">&gt;</span>
                Replace Image
              <span class="syn-tag">&lt;/button&gt;</span>
              <span class="syn-tag">&lt;button</span>
                <span class="syn-attr">onClick</span><span class="syn-punct">={()</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">setNotificationText</span><span class="syn-punct">(</span><span class="syn-keyword">null</span><span class="syn-punct">)}</span>
                <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"text-slate-400 hover:text-white text-base leading-none px-1"</span>
              <span class="syn-tag">&gt;</span>
                &amp;times;
              <span class="syn-tag">&lt;/button&gt;</span>
            <span class="syn-tag">&lt;/div&gt;</span>
          <span class="syn-tag">&lt;/div&gt;</span>
        <span class="syn-tag">&lt;/div&gt;</span>
      <span class="syn-punct">)}</span>

      <span class="syn-comment">{/* Active Workspace Screen Presentation */}</span>
      <span class="syn-tag">&lt;main</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"flex-1 flex flex-col justify-start"</span><span class="syn-tag">&gt;</span>
        <span class="syn-punct">{</span><span class="syn-prop">activeTab</span> <span class="syn-punct">===</span> <span class="syn-string">'enhance'</span> <span class="syn-punct">&amp;&amp;</span> <span class="syn-punct">(</span>
          <span class="syn-tag">&lt;SuperHdEditor</span>
            <span class="syn-attr">sourceImageUrl</span><span class="syn-punct">={</span><span class="syn-prop">activeAsset</span><span class="syn-punct">.</span><span class="syn-prop">objectUrl</span><span class="syn-punct">}</span>
            <span class="syn-attr">fileName</span><span class="syn-punct">={</span><span class="syn-prop">activeAsset</span><span class="syn-punct">.</span><span class="syn-prop">fileName</span><span class="syn-punct">}</span>
            <span class="syn-attr">onNavigateToExport</span><span class="syn-punct">={()</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">setActiveTab</span><span class="syn-punct">(</span><span class="syn-string">'export'</span><span class="syn-punct">)}</span>
            <span class="syn-attr">onOpenUploadModal</span><span class="syn-punct">={()</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">setIsUploadModalOpen</span><span class="syn-punct">(</span><span class="syn-keyword">true</span><span class="syn-punct">)}</span>
          <span class="syn-tag">/&gt;</span>
        <span class="syn-punct">)}</span>

        <span class="syn-punct">{</span><span class="syn-prop">activeTab</span> <span class="syn-punct">===</span> <span class="syn-string">'product-ai'</span> <span class="syn-punct">&amp;&amp;</span> <span class="syn-punct">(</span>
          <span class="syn-tag">&lt;ProductStaging</span>
            <span class="syn-attr">sourceAssetUrl</span><span class="syn-punct">={</span><span class="syn-prop">DEFAULT_PRODUCT_STAGING_IMG</span><span class="syn-punct">}</span>
            <span class="syn-attr">onNavigateToExport</span><span class="syn-punct">={()</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">setActiveTab</span><span class="syn-punct">(</span><span class="syn-string">'export'</span><span class="syn-punct">)}</span>
          <span class="syn-tag">/&gt;</span>
        <span class="syn-punct">)}</span>

        <span class="syn-punct">{</span><span class="syn-prop">activeTab</span> <span class="syn-punct">===</span> <span class="syn-string">'export'</span> <span class="syn-punct">&amp;&amp;</span> <span class="syn-punct">(</span>
          <span class="syn-tag">&lt;ExportLab</span>
            <span class="syn-attr">sourceImageUrl</span><span class="syn-punct">={</span><span class="syn-prop">activeAsset</span><span class="syn-punct">.</span><span class="syn-prop">objectUrl</span><span class="syn-punct">}</span>
            <span class="syn-attr">fileName</span><span class="syn-punct">={</span><span class="syn-prop">activeAsset</span><span class="syn-punct">.</span><span class="syn-prop">fileName</span><span class="syn-punct">}</span>
            <span class="syn-attr">initialFormat</span><span class="syn-punct">={</span><span class="syn-string">'TIFF'</span><span class="syn-punct">}</span>
            <span class="syn-attr">onNavigateBack</span><span class="syn-punct">={()</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">setActiveTab</span><span class="syn-punct">(</span><span class="syn-string">'enhance'</span><span class="syn-punct">)}</span>
          <span class="syn-tag">/&gt;</span>
        <span class="syn-punct">)}</span>
      <span class="syn-tag">&lt;/main&gt;</span>

      <span class="syn-comment">{/* Interactive RAW / JPG File Ingestion Modal */}</span>
      <span class="syn-tag">&lt;UploadModal</span>
        <span class="syn-attr">isOpen</span><span class="syn-punct">={</span><span class="syn-prop">isUploadModalOpen</span><span class="syn-punct">}</span>
        <span class="syn-attr">onClose</span><span class="syn-punct">={()</span> <span class="syn-punct">=&gt;</span> <span class="syn-func">setIsUploadModalOpen</span><span class="syn-punct">(</span><span class="syn-keyword">false</span><span class="syn-punct">)}</span>
        <span class="syn-attr">onAssetLoaded</span><span class="syn-punct">={</span><span class="syn-func">handleAssetLoaded</span><span class="syn-punct">}</span>
      <span class="syn-tag">/&gt;</span>

      <span class="syn-comment">{/* Global Telemetry &amp; System Status Footer Bar */}</span>
      <span class="syn-tag">&lt;footer</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"bg-[#0b0d11] border-t border-white/[0.08] px-4 sm:px-8 py-3 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-3"</span><span class="syn-tag">&gt;</span>
        <span class="syn-tag">&lt;div</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"flex items-center gap-3 sm:gap-6"</span><span class="syn-tag">&gt;</span>
          <span class="syn-tag">&lt;div</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"flex items-center gap-2"</span><span class="syn-tag">&gt;</span>
            <span class="syn-tag">&lt;span</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse"</span><span class="syn-tag">&gt;&lt;/span&gt;</span>
            <span class="syn-tag">&lt;span</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"text-white font-bold"</span><span class="syn-tag">&gt;</span><span class="syn-punct">{</span><span class="syn-prop">engineStatus</span><span class="syn-punct">.</span><span class="syn-prop">version</span><span class="syn-punct">}</span><span class="syn-tag">&lt;/span&gt;</span>
          <span class="syn-tag">&lt;/div&gt;</span>
          <span class="syn-tag">&lt;span</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"hidden sm:inline"</span><span class="syn-tag">&gt;</span>Models: <span class="syn-tag">&lt;strong</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"text-slate-300"</span><span class="syn-tag">&gt;</span><span class="syn-punct">{</span><span class="syn-prop">engineStatus</span><span class="syn-punct">.</span><span class="syn-prop">activeModelWeights</span><span class="syn-punct">}</span><span class="syn-tag">&lt;/strong&gt;&lt;/span&gt;</span>
          <span class="syn-tag">&lt;span&gt;</span>VRAM: <span class="syn-tag">&lt;strong</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"text-[#00f2fe]"</span><span class="syn-tag">&gt;</span><span class="syn-punct">{</span><span class="syn-prop">engineStatus</span><span class="syn-punct">.</span><span class="syn-prop">vramAllocatedMB</span><span class="syn-punct">}</span> MB<span class="syn-tag">&lt;/strong&gt;&lt;/span&gt;</span>
          <span class="syn-tag">&lt;span&gt;</span>Latency: <span class="syn-tag">&lt;strong</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"text-emerald-400"</span><span class="syn-tag">&gt;</span><span class="syn-punct">{</span><span class="syn-prop">engineStatus</span><span class="syn-punct">.</span><span class="syn-prop">latencyMs</span><span class="syn-punct">}</span>ms<span class="syn-tag">&lt;/strong&gt;&lt;/span&gt;</span>
        <span class="syn-tag">&lt;/div&gt;</span>

        <span class="syn-tag">&lt;div</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"flex items-center gap-4 text-[11px]"</span><span class="syn-tag">&gt;</span>
          <span class="syn-tag">&lt;span&gt;</span>Device Color Space: <span class="syn-tag">&lt;strong</span> <span class="syn-attr">className</span><span class="syn-punct">=</span><span class="syn-string">"text-white"</span><span class="syn-tag">&gt;</span><span class="syn-punct">{</span><span class="syn-prop">activeAsset</span><span class="syn-punct">.</span><span class="syn-prop">colorGamut</span><span class="syn-punct">}</span><span class="syn-tag">&lt;/strong&gt;&lt;/span&gt;</span>
          <span class="syn-tag">&lt;span&gt;</span>&copy; 2026 Zavoka Neural Systems<span class="syn-tag">&lt;/span&gt;</span>
        <span class="syn-tag">&lt;/div&gt;</span>
      <span class="syn-tag">&lt;/footer&gt;</span>

    <span class="syn-tag">&lt;/div&gt;</span>
  <span class="syn-punct">);</span>
<span class="syn-punct">};</span>

<span class="syn-keyword">export</span> <span class="syn-keyword">default</span> <span class="syn-func">App</span><span class="syn-punct">;</span>
</code></pre>
      </div>

    </div>

    <!-- Tree Navigation Footer -->
    <div class="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
      <div class="flex items-center gap-2">
        <span class="text-slate-500">Previous in tree:</span>
        <span class="text-[#00f2fe]">src/types/index.ts</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-slate-500">Next in tree:</span>
        <span class="text-[#00f2fe] font-semibold">src/main.tsx</span>
      </div>
    </div>
  </main>

  <script>
    const codeRaw = `/**
 * Zavoka Studio - Main Application Component & Single-Page State Orchestrator
 * Path: src/App.tsx
 * Architecture: React 18 / TypeScript / Tailwind CSS / WebGPU & CoreML Integration
 * 
 * Responsibilities:
 * - Centralized tab routing between 'enhance' (Super HD), 'product-ai' (3D Staging), and 'export' (Export Lab)
 * - Global active asset management with simulated 8K RAW and JPG ingestion
 * - Modal presentation lifecycle for the UploadModal
 * - Live notification pill orchestration ("Loaded & validated...")
 * - Persistent footer status bar with WebGPU / CoreML performance telemetry
 */

import React, { useState, useEffect } from 'react';

// Global Types
import {
  ActiveTabId,
  UploadedAssetInfo,
  UserProfile,
  EngineStatus,
} from './types';

// Core Layout & Feature Components
import Header from './components/common/Header';
import NavigationTabs from './components/common/NavigationTabs';
import UploadModal from './components/upload/UploadModal';
import SuperHdEditor from './components/editor/SuperHdEditor';
import ProductStaging from './components/staging/ProductStaging';
import ExportLab from './components/export/ExportLab';

// Default Initial Asset Previews
const DEFAULT_PREVIEW_RAW = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop';
const DEFAULT_PRODUCT_STAGING_IMG = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop';

export const App: React.FC = () => {
  // --------------------------------------------------------------------------
  // 1. Navigation & Workspace State
  // --------------------------------------------------------------------------
  const [activeTab, setActiveTab] = useState<ActiveTabId>('enhance');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);

  // --------------------------------------------------------------------------
  // 2. Active Working Asset Info
  // --------------------------------------------------------------------------
  const [activeAsset, setActiveAsset] = useState<UploadedAssetInfo>({
    id: 'asset_init_8k',
    fileName: 'Live_Captured_Asset_8K.raw',
    fileSizeFormatted: '48.5 MB',
    fileSizeBytes: 50855936,
    format: 'RAW',
    resolutionLabel: '7680 × 4320 (8K UHD)',
    width: 7680,
    height: 4320,
    aspectRatio: 1.777,
    objectUrl: DEFAULT_PREVIEW_RAW,
    colorGamut: 'Rec.2020',
    status: 'validated',
  });

  // --------------------------------------------------------------------------
  // 3. Ingestion Notification Toast State
  // --------------------------------------------------------------------------
  const [notificationText, setNotificationText] = useState<string | null>(
    'Loaded & validated Live_Captured_Asset_8K.raw'
  );

  // Auto-dismiss notification chip after 6 seconds
  useEffect(() => {
    if (notificationText) {
      const timer = setTimeout(() => {
        setNotificationText(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [notificationText]);

  // --------------------------------------------------------------------------
  // 4. User Profile & Engine Telemetry
  // --------------------------------------------------------------------------
  const userProfile: UserProfile = {
    id: 'user_zavoka_pro',
    name: 'Elena Rostova',
    tier: 'PRO',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    activeHardwareAccel: 'WebGPU',
  };

  const engineStatus: EngineStatus = {
    version: 'CoreML v4.8',
    isHardwareAccelerated: true,
    activeModelWeights: 'ESRGAN-8K-Pro + ViT-Huge',
    vramAllocatedMB: 1840,
    latencyMs: 28,
  };

  // --------------------------------------------------------------------------
  // 5. Asset Upload Completion Handler
  // --------------------------------------------------------------------------
  const handleAssetLoaded = (newAsset: UploadedAssetInfo) => {
    setActiveAsset(newAsset);
    setNotificationText(\`Loaded & validated \${newAsset.fileName}\`);
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-white flex flex-col font-sans selection:bg-[#00f2fe]/30">
      
      {/* Global Fixed Top Navigation Header */}
      <Header
        userProfile={userProfile}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
      />

      {/* Workspace Navigation Tabs with Live Badges */}
      <NavigationTabs
        activeTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId)}
      />

      {/* Live Validation Floating Banner Toast */}
      {notificationText && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-3 animate-fade-in">
          <div className="px-4 py-2.5 rounded-2xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-between shadow-[0_0_20px_rgba(0,242,254,0.15)] backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#00f2fe]">
              <svg className="w-4 h-4 text-[#00f2fe] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>{notificationText}</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-[#00f2fe]/20 text-white">
                {activeAsset.resolutionLabel}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="text-xs font-bold text-white hover:text-[#00f2fe] underline transition-colors cursor-pointer"
              >
                Replace Image
              </button>
              <button
                onClick={() => setNotificationText(null)}
                className="text-slate-400 hover:text-white text-base leading-none px-1"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Workspace Screen Presentation */}
      <main className="flex-1 flex flex-col justify-start">
        {activeTab === 'enhance' && (
          <SuperHdEditor
            sourceImageUrl={activeAsset.objectUrl}
            fileName={activeAsset.fileName}
            onNavigateToExport={() => setActiveTab('export')}
            onOpenUploadModal={() => setIsUploadModalOpen(true)}
          />
        )}

        {activeTab === 'product-ai' && (
          <ProductStaging
            sourceAssetUrl={DEFAULT_PRODUCT_STAGING_IMG}
            onNavigateToExport={() => setActiveTab('export')}
          />
        )}

        {activeTab === 'export' && (
          <ExportLab
            sourceImageUrl={activeAsset.objectUrl}
            fileName={activeAsset.fileName}
            initialFormat={'TIFF'}
            onNavigateBack={() => setActiveTab('enhance')}
          />
        )}
      </main>

      {/* Interactive RAW / JPG File Ingestion Modal */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onAssetLoaded={handleAssetLoaded}
      />

      {/* Global Telemetry & System Status Footer Bar */}
      <footer className="bg-[#0b0d11] border-t border-white/[0.08] px-4 sm:px-8 py-3 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse"></span>
            <span className="text-white font-bold">{engineStatus.version}</span>
          </div>
          <span className="hidden sm:inline">Models: <strong className="text-slate-300">{engineStatus.activeModelWeights}</strong></span>
          <span>VRAM: <strong className="text-[#00f2fe]">{engineStatus.vramAllocatedMB} MB</strong></span>
          <span>Latency: <strong className="text-emerald-400">{engineStatus.latencyMs}ms</strong></span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span>Device Color Space: <strong className="text-white">{activeAsset.colorGamut}</strong></span>
          <span>&copy; 2026 Zavoka Neural Systems</span>
        </div>
      </footer>

    </div>
  );
};

export default App;`;

    function copyCode() {
      navigator.clipboard.writeText(codeRaw).then(() => {
        const text = document.getElementById('copy-text');
        const icon = document.getElementById('copy-icon');
        text.innerText = 'Copied to Clipboard!';
        icon.classList.remove('text-[#00f2fe]');
        icon.classList.add('text-emerald-400');
        setTimeout(() => {
          text.innerText = '1-Click Copy Code';
          icon.classList.add('text-[#00f2fe]');
          icon.classList.remove('text-emerald-400');
        }, 2500);
      });
    }

    function downloadFile() {
      const blob = new Blob([codeRaw], { type: 'text/typescript' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'App.tsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>
