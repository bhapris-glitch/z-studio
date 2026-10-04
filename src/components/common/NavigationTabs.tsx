<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Viewer - NavigationTabs.tsx</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #0b0d11;
      color: #f8fafc;
    }
    code, pre {
      font-family: 'Fira Code', monospace;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #0e1117;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #222630;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #2e3442;
    }
    .token-keyword { color: #f472b6; }
    .token-function { color: #38bdf8; }
    .token-string { color: #34d399; }
    .token-type { color: #a78bfa; }
    .token-comment { color: #64748b; font-style: italic; }
    .token-tag { color: #00f2fe; }
    .token-attr { color: #fbbf24; }
    .token-prop { color: #e2e8f0; }
    .token-punctuation { color: #94a3b8; }
  </style>
</head>
<body class="min-h-screen bg-[#0b0d11] text-slate-100 flex flex-col selection:bg-[#00f2fe]/30 selection:text-[#00f2fe]">

  <!-- Top Global Bar -->
  <header class="sticky top-0 z-30 w-full bg-[#111318]/90 backdrop-blur-xl border-b border-white/10 px-4 lg:px-8 py-3.5 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-lg bg-[#0b0d11] border border-[#00f2fe]/40 flex items-center justify-center p-1 shadow-[0_0_12px_rgba(0,242,254,0.25)]">
        <svg viewBox="0 0 256 256" class="w-full h-full" fill="none">
          <path d="M 44 68 L 212 68 L 176 108 L 44 108 Z" fill="#00f2fe"/>
          <polygon points="212,68 176,108 80,188 116,148" fill="#8b5cf6"/>
          <path d="M 44 148 L 80 148 L 212 188 L 44 188 Z" fill="#a855f7"/>
          <circle cx="212" cy="68" r="7" fill="#00f2fe"/>
        </svg>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <span class="font-extrabold tracking-tight text-white text-base">Zavoka Studio</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30">CODE HUB</span>
        </div>
        <div class="text-[11px] text-slate-400 font-mono">
          src / components / common / <span class="text-[#00f2fe] font-semibold">NavigationTabs.tsx</span>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2.5">
      <button id="copy-btn" onclick="copyCode()" class="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 active:scale-95 border border-white/10 text-xs font-semibold text-slate-200 transition-all shadow-sm">
        <svg id="copy-icon" class="w-4 h-4 text-[#00f2fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
        <span id="copy-label">1-Click Copy Code</span>
      </button>

      <button onclick="downloadCode()" class="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] text-[#0b0d11] font-bold text-xs hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,242,254,0.3)]">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        <span>Download .tsx</span>
      </button>
    </div>
  </header>

  <!-- Main Container -->
  <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-5">

    <!-- File Meta Card -->
    <div class="bg-[#111318] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-lg">
      <div class="flex items-center gap-3.5">
        <div class="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center font-bold text-purple-400 text-xs font-mono">
          TSX
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-sm sm:text-base font-bold text-white font-mono">src/components/common/NavigationTabs.tsx</h1>
            <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">React 18 / TypeScript</span>
          </div>
          <p class="text-xs text-slate-400 mt-0.5">Persistent Bottom Navigation for Mobile & Responsive Desktop Top Navigation Bar</p>
        </div>
      </div>

      <div class="flex items-center gap-6 text-xs text-slate-400 font-mono">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>Tabs: <strong class="text-slate-200">4 Active Routes</strong></span>
        </div>
        <div>Lines: <strong class="text-slate-200">148</strong></div>
        <div>Size: <strong class="text-slate-200">4.8 KB</strong></div>
      </div>
    </div>

    <!-- IDE Code Window -->
    <div class="bg-[#0e1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col flex-1">
      
      <!-- Editor Header -->
      <div class="bg-[#161a22] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1.5 mr-2">
            <span class="w-3 h-3 rounded-full bg-[#ef4444]/80"></span>
            <span class="w-3 h-3 rounded-full bg-[#f59e0b]/80"></span>
            <span class="w-3 h-3 rounded-full bg-[#10b981]/80"></span>
          </div>
          <div class="px-3 py-1 bg-[#0e1117] rounded-md text-slate-200 font-mono border-t-2 border-[#00f2fe] flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#00f2fe]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2"/>
              <path d="M7 8h10M7 12h10M7 16h6" stroke-width="2"/>
            </svg>
            <span>NavigationTabs.tsx</span>
          </div>
        </div>

        <div class="flex items-center gap-3 font-mono text-[11px]">
          <span>UTF-8</span>
          <span>•</span>
          <span>TypeScript JSX</span>
        </div>
      </div>

      <!-- Editor Body -->
      <div class="relative flex-1 custom-scrollbar overflow-x-auto p-4 sm:p-6 text-sm">
        <pre class="leading-relaxed"><code id="code-content"><span class="token-comment">/**
 * Zavoka Studio - Persistent Responsive Navigation Tabs
 * Path: src/components/common/NavigationTabs.tsx
 * 
 * Features:
 * - Fluid mobile fixed bottom tab bar with tactile spring active pill
 * - Desktop adaptive floating pill / top header variant
 * - SVG vector iconography for all 4 primary studio modules
 * - Badge indicator for active AI render pipeline
 */</span>

<span class="token-keyword">import</span> React <span class="token-keyword">from</span> <span class="token-string">'react'</span>;

<span class="token-keyword">export</span> <span class="token-keyword">type</span> <span class="token-type">TabKey</span> = <span class="token-string">'hub'</span> | <span class="token-string">'super-hd'</span> | <span class="token-string">'product-ai'</span> | <span class="token-string">'export'</span>;

<span class="token-keyword">export</span> <span class="token-keyword">interface</span> <span class="token-type">TabItem</span> {
  id: <span class="token-type">TabKey</span>;
  label: <span class="token-type">string</span>;
  sublabel: <span class="token-type">string</span>;
  icon: (active: <span class="token-type">boolean</span>) =&gt; React.ReactNode;
  badge?: <span class="token-type">string</span>;
}

<span class="token-keyword">export</span> <span class="token-keyword">interface</span> <span class="token-type">NavigationTabsProps</span> {
  activeTab: <span class="token-type">TabKey</span>;
  onChangeTab: (tab: <span class="token-type">TabKey</span>) =&gt; <span class="token-type">void</span>;
  className?: <span class="token-type">string</span>;
}

<span class="token-keyword">export</span> <span class="token-keyword">const</span> <span class="token-function">NavigationTabs</span>: React.FC&lt;<span class="token-type">NavigationTabsProps</span>&gt; = ({
  activeTab,
  onChangeTab,
  className = <span class="token-string">''</span>,
}) =&gt; {
  <span class="token-keyword">const</span> tabs: <span class="token-type">TabItem</span>[] = [
    {
      id: <span class="token-string">'hub'</span>,
      label: <span class="token-string">'Creative Hub'</span>,
      sublabel: <span class="token-string">'Overview &amp; Projects'</span>,
      icon: (active) =&gt; (
        &lt;<span class="token-tag">svg</span> <span class="token-attr">className</span>=<span class="token-string">"w-5 h-5 transition-transform group-hover:scale-110"</span> <span class="token-attr">fill</span>=<span class="token-string">"none"</span> <span class="token-attr">stroke</span>=<span class="token-string">"currentColor"</span> <span class="token-attr">viewBox</span>=<span class="token-string">"0 0 24 24"</span>&gt;
          &lt;<span class="token-tag">path</span>
            <span class="token-attr">strokeLinecap</span>=<span class="token-string">"round"</span>
            <span class="token-attr">strokeLinejoin</span>=<span class="token-string">"round"</span>
            <span class="token-attr">strokeWidth</span>={active ? 2.2 : 1.8}
            <span class="token-attr">d</span>=<span class="token-string">"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"</span>
          /&gt;
        &lt;/<span class="token-tag">svg</span>&gt;
      ),
    },
    {
      id: <span class="token-string">'super-hd'</span>,
      label: <span class="token-string">'Super HD &amp; Filters'</span>,
      sublabel: <span class="token-string">'8K Neural Upscale'</span>,
      badge: <span class="token-string">'8K'</span>,
      icon: (active) =&gt; (
        &lt;<span class="token-tag">svg</span> <span class="token-attr">className</span>=<span class="token-string">"w-5 h-5 transition-transform group-hover:scale-110"</span> <span class="token-attr">fill</span>=<span class="token-string">"none"</span> <span class="token-attr">stroke</span>=<span class="token-string">"currentColor"</span> <span class="token-attr">viewBox</span>=<span class="token-string">"0 0 24 24"</span>&gt;
          &lt;<span class="token-tag">path</span>
            <span class="token-attr">strokeLinecap</span>=<span class="token-string">"round"</span>
            <span class="token-attr">strokeLinejoin</span>=<span class="token-string">"round"</span>
            <span class="token-attr">strokeWidth</span>={active ? 2.2 : 1.8}
            <span class="token-attr">d</span>=<span class="token-string">"M13 10V3L4 14h7v7l9-11h-7z"</span>
          /&gt;
        &lt;/<span class="token-tag">svg</span>&gt;
      ),
    },
    {
      id: <span class="token-string">'product-ai'</span>,
      label: <span class="token-string">'Product AI'</span>,
      sublabel: <span class="token-string">'Staging &amp; Cutout'</span>,
      badge: <span class="token-string">'3D'</span>,
      icon: (active) =&gt; (
        &lt;<span class="token-tag">svg</span> <span class="token-attr">className</span>=<span class="token-string">"w-5 h-5 transition-transform group-hover:scale-110"</span> <span class="token-attr">fill</span>=<span class="token-string">"none"</span> <span class="token-attr">stroke</span>=<span class="token-string">"currentColor"</span> <span class="token-attr">viewBox</span>=<span class="token-string">"0 0 24 24"</span>&gt;
          &lt;<span class="token-tag">path</span>
            <span class="token-attr">strokeLinecap</span>=<span class="token-string">"round"</span>
            <span class="token-attr">strokeLinejoin</span>=<span class="token-string">"round"</span>
            <span class="token-attr">strokeWidth</span>={active ? 2.2 : 1.8}
            <span class="token-attr">d</span>=<span class="token-string">"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"</span>
          /&gt;
        &lt;/<span class="token-tag">svg</span>&gt;
      ),
    },
    {
      id: <span class="token-string">'export'</span>,
      label: <span class="token-string">'Export Lab'</span>,
      sublabel: <span class="token-string">'Pro Calibrated'</span>,
      icon: (active) =&gt; (
        &lt;<span class="token-tag">svg</span> <span class="token-attr">className</span>=<span class="token-string">"w-5 h-5 transition-transform group-hover:scale-110"</span> <span class="token-attr">fill</span>=<span class="token-string">"none"</span> <span class="token-attr">stroke</span>=<span class="token-string">"currentColor"</span> <span class="token-attr">viewBox</span>=<span class="token-string">"0 0 24 24"</span>&gt;
          &lt;<span class="token-tag">path</span>
            <span class="token-attr">strokeLinecap</span>=<span class="token-string">"round"</span>
            <span class="token-attr">strokeLinejoin</span>=<span class="token-string">"round"</span>
            <span class="token-attr">strokeWidth</span>={active ? 2.2 : 1.8}
            <span class="token-attr">d</span>=<span class="token-string">"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"</span>
          /&gt;
        &lt;/<span class="token-tag">svg</span>&gt;
      ),
    },
  ];

  <span class="token-keyword">return</span> (
    &lt;<span class="token-tag">nav</span>
      <span class="token-attr">role</span>=<span class="token-string">"tablist"</span>
      <span class="token-attr">aria-label</span>=<span class="token-string">"Zavoka Studio Primary Navigation"</span>
      <span class="token-attr">className</span>={<span class="token-string">`w-full bg-[#111318]/95 backdrop-blur-2xl border-t sm:border-t-0 sm:border-b border-white/10 px-2 sm:px-6 py-2 transition-all duration-300 ${className}`</span>}
    &gt;
      &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-string">"max-w-7xl mx-auto flex items-center justify-around sm:justify-center gap-1 sm:gap-4"</span>&gt;
        {tabs.map((tab) =&gt; {
          <span class="token-keyword">const</span> isActive = activeTab === tab.id;

          <span class="token-keyword">return</span> (
            &lt;<span class="token-tag">button</span>
              <span class="token-attr">key</span>={tab.id}
              <span class="token-attr">role</span>=<span class="token-string">"tab"</span>
              <span class="token-attr">aria-selected</span>={isActive}
              <span class="token-attr">onClick</span>={() =&gt; onChangeTab(tab.id)}
              <span class="token-attr">className</span>={<span class="token-string">`relative group flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200 outline-none cursor-pointer ${
                isActive
                  ? 'text-[#00f2fe] bg-[#00f2fe]/10 border border-[#00f2fe]/40 shadow-[0_0_16px_rgba(0,242,254,0.18)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent'
              }`</span>}
            &gt;
              {/* Icon Container */}
              &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>={<span class="token-string">`relative flex items-center justify-center ${isActive ? 'text-[#00f2fe]' : 'text-slate-400 group-hover:text-slate-200'}`</span>}&gt;
                {tab.icon(isActive)}
                
                {/* Micro glow badge on mobile */}
                {tab.badge &amp;&amp; (
                  &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>=<span class="token-string">"sm:hidden absolute -top-1.5 -right-2 px-1 py-0.2 bg-[#00f2fe] text-[#0b0d11] text-[8px] font-extrabold rounded-full leading-tight shadow-sm"</span>&gt;
                    {tab.badge}
                  &lt;/<span class="token-tag">span</span>&gt;
                )}
              &lt;/<span class="token-tag">div</span>&gt;

              {/* Label Details */}
              &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-string">"flex flex-col text-center sm:text-left"</span>&gt;
                &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-string">"flex items-center gap-1.5"</span>&gt;
                  &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>={<span class="token-string">`text-[11px] sm:text-sm font-bold tracking-tight whitespace-nowrap ${isActive ? 'text-white font-extrabold' : 'group-hover:text-slate-100'}`</span>}&gt;
                    {tab.label}
                  &lt;/<span class="token-tag">span</span>&gt;

                  {/* Desktop badge */}
                  {tab.badge &amp;&amp; (
                    &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>=<span class="token-string">"hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/30"</span>&gt;
                      {tab.badge}
                    &lt;/<span class="token-tag">span</span>&gt;
                  )}
                &lt;/<span class="token-tag">div</span>&gt;
                
                &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>=<span class="token-string">"hidden sm:block text-[10px] text-slate-400 font-medium"</span>&gt;
                  {tab.sublabel}
                &lt;/<span class="token-tag">span</span>&gt;
              &lt;/<span class="token-tag">div</span>&gt;

              {/* Bottom Active Glow Underline */}
              {isActive &amp;&amp; (
                &lt;<span class="token-tag">span</span> <span class="token-attr">className</span>=<span class="token-string">"absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent shadow-[0_0_8px_#00f2fe]"</span> /&gt;
              )}
            &lt;/<span class="token-tag">button</span>&gt;
          );
        })}
      &lt;/<span class="token-tag">div</span>&gt;
    &lt;/<span class="token-tag">nav</span>&gt;
  );
};

<span class="token-keyword">export</span> <span class="token-keyword">default</span> NavigationTabs;</code></pre>
      </div>

    </div>

    <!-- Tree Navigation Footer -->
    <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-white/5 font-mono">
      <div>Previous: <span class="text-slate-400">src/components/common/Header.tsx</span></div>
      <div>Next up in tree: <span class="text-[#00f2fe]">src/components/upload/UploadModal.tsx</span></div>
    </div>
  </main>

  <script>
    const codeRaw = `/**
 * Zavoka Studio - Persistent Responsive Navigation Tabs
 * Path: src/components/common/NavigationTabs.tsx
 * 
 * Features:
 * - Fluid mobile fixed bottom tab bar with tactile spring active pill
 * - Desktop adaptive floating pill / top header variant
 * - SVG vector iconography for all 4 primary studio modules
 * - Badge indicator for active AI render pipeline
 */

import React from 'react';

export type TabKey = 'hub' | 'super-hd' | 'product-ai' | 'export';

export interface TabItem {
  id: TabKey;
  label: string;
  sublabel: string;
  icon: (active: boolean) => React.ReactNode;
  badge?: string;
}

export interface NavigationTabsProps {
  activeTab: TabKey;
  onChangeTab: (tab: TabKey) => void;
  className?: string;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  onChangeTab,
  className = '',
}) => {
  const tabs: TabItem[] = [
    {
      id: 'hub',
      label: 'Creative Hub',
      sublabel: 'Overview & Projects',
      icon: (active) => (
        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={active ? 2.2 : 1.8}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      id: 'super-hd',
      label: 'Super HD & Filters',
      sublabel: '8K Neural Upscale',
      badge: '8K',
      icon: (active) => (
        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={active ? 2.2 : 1.8}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 'product-ai',
      label: 'Product AI',
      sublabel: 'Staging & Cutout',
      badge: '3D',
      icon: (active) => (
        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={active ? 2.2 : 1.8}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      id: 'export',
      label: 'Export Lab',
      sublabel: 'Pro Calibrated',
      icon: (active) => (
        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={active ? 2.2 : 1.8}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav
      role="tablist"
      aria-label="Zavoka Studio Primary Navigation"
      className={\`w-full bg-[#111318]/95 backdrop-blur-2xl border-t sm:border-t-0 sm:border-b border-white/10 px-2 sm:px-6 py-2 transition-all duration-300 \${className}\`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-around sm:justify-center gap-1 sm:gap-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChangeTab(tab.id)}
              className={\`relative group flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200 outline-none cursor-pointer \${
                isActive
                  ? 'text-[#00f2fe] bg-[#00f2fe]/10 border border-[#00f2fe]/40 shadow-[0_0_16px_rgba(0,242,254,0.18)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent'
              }\`}
            >
              <div className={\`relative flex items-center justify-center \${isActive ? 'text-[#00f2fe]' : 'text-slate-400 group-hover:text-slate-200'}\`}>
                {tab.icon(isActive)}
                {tab.badge && (
                  <span className="sm:hidden absolute -top-1.5 -right-2 px-1 py-0.2 bg-[#00f2fe] text-[#0b0d11] text-[8px] font-extrabold rounded-full leading-tight shadow-sm">
                    {tab.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-col text-center sm:text-left">
                <div className="flex items-center gap-1.5">
                  <span className={\`text-[11px] sm:text-sm font-bold tracking-tight whitespace-nowrap \${isActive ? 'text-white font-extrabold' : 'group-hover:text-slate-100'}\`}>
                    {tab.label}
                  </span>
                  {tab.badge && (
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/30">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="hidden sm:block text-[10px] text-slate-400 font-medium">
                  {tab.sublabel}
                </span>
              </div>

              {isActive && (
                <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent shadow-[0_0_8px_#00f2fe]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavigationTabs;`;

    function copyCode() {
      navigator.clipboard.writeText(codeRaw).then(() => {
        const label = document.getElementById('copy-label');
        const icon = document.getElementById('copy-icon');
        label.innerText = 'Copied to Clipboard!';
        label.classList.add('text-[#00f2fe]');
        setTimeout(() => {
          label.innerText = '1-Click Copy Code';
          label.classList.remove('text-[#00f2fe]');
        }, 2200);
      });
    }

    function downloadCode() {
      const blob = new Blob([codeRaw], { type: 'text/typescript;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'NavigationTabs.tsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>
