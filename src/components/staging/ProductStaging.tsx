<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Code Viewer - Header.tsx</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
<meta content="web_standard" name="shell-type"/></head>
<body class="min-h-screen bg-[#0b0d11] text-slate-100 flex flex-col justify-between selection:bg-[#00f2fe]/20 selection:text-[#00f2fe]">
<!-- Top App Navigation / Status Bar -->
<header class="border-b border-white/10 bg-[#111318]/90 backdrop-blur-xl sticky top-0 z-50 px-6 py-3.5 flex items-center justify-between">
<div class="flex items-center gap-3">
<!-- Zavoka Z Logo Mark -->
<div class="w-9 h-9 rounded-xl bg-[#0c0e12] border border-[#00f2fe]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.15)] overflow-hidden">
<svg fill="none" height="22" viewbox="0 0 256 256" width="22" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="topF" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#00f2fe"></stop>
<stop offset="100%" stop-color="#38bdf8"></stop>
</lineargradient>
<lineargradient id="diagF" x1="100%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#00f2fe"></stop>
<stop offset="50%" stop-color="#8b5cf6"></stop>
<stop offset="100%" stop-color="#d946ef"></stop>
</lineargradient>
<lineargradient id="botF" x1="0%" x2="100%" y1="100%" y2="100%">
<stop offset="0%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#6366f1"></stop>
</lineargradient>
</defs>
<path d="M 44 68 L 212 68 L 176 108 L 44 108 Z" fill="url(#topF)"></path>
<polygon fill="url(#diagF)" points="212,68 176,108 80,188 116,148"></polygon>
<path d="M 44 148 L 80 148 L 212 188 L 44 188 Z" fill="url(#botF)"></path>
<circle cx="212" cy="68" fill="#00f2fe" opacity="0.8" r="8"></circle>
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
<div class="hidden items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-pulse" id="copy-toast">
<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
<span>Copied to clipboard!</span>
</div>
<button class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-slate-200 text-xs font-semibold transition-all shadow-sm group" id="copy-btn" onclick="copySourceCode()">
<svg class="w-3.5 h-3.5 text-[#00f2fe] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
<span>1-Click Copy Code</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] hover:opacity-95 active:scale-95 text-[#0b0d11] text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)]" id="download-btn" onclick="downloadFile()">
<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
</svg>
<span>Download .tsx</span>
</button>
</div>
</header>
<!-- Main Viewer Content -->
<main class="max-w-6xl w-full mx-auto p-6 md:p-8 flex-1 flex flex-col"><div class="flex flex-col w-full">
<!-- Telemetry & Header Panel -->
<div class="flex flex-col gap-space-md mb-space-lg">
<!-- Top Meta Row -->
<div class="flex flex-wrap items-center justify-between gap-space-md bg-surface-container-low px-space-lg py-space-md rounded-xl shadow-md">
<div class="flex items-center gap-space-md min-w-0">
<div class="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant overflow-hidden">
<span>src</span>
<span class="text-outline-variant">/</span>
<span>components</span>
<span class="text-outline-variant">/</span>
<span>staging</span>
<span class="text-outline-variant">/</span>
<span class="text-primary-container font-semibold truncate">ProductStaging.tsx</span>
</div>
<span class="px-space-xs py-0.5 rounded bg-primary-container/15 text-primary-container font-label-sm text-label-sm uppercase tracking-wider">TSX</span>
<div class="hidden md:flex items-center gap-space-xs text-on-surface-variant/80 font-label-sm text-label-sm">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
<span>Production Ready • AI Segmentation &amp; 3D Staging Engine</span>
</div>
</div>
<!-- Quick Metrics -->
<div class="flex items-center gap-space-lg text-on-surface-variant font-data-metric text-data-metric">
<div class="flex items-center gap-space-xs">
<span class="text-outline">DIALECT</span>
<span class="text-on-surface font-medium">React 18 / TS 5.4</span>
</div>
<div class="hidden sm:flex items-center gap-space-xs">
<span class="text-outline">LOC</span>
<span class="text-on-surface font-medium">320 Lines</span>
</div>
<div class="flex items-center gap-space-xs">
<span class="text-outline">SIZE</span>
<span class="text-primary-fixed-dim font-medium">12.8 KB</span>
</div>
</div>
</div>
<!-- Live Architecture Overview & Visual Deck -->
<div class="grid grid-cols-1 lg:grid-cols-4 gap-space-md">
<!-- Mini Visual 1: Staging Engine Card -->
<div class="bg-surface-container p-space-md rounded-xl flex flex-col justify-between relative overflow-hidden shadow-sm">
<div class="flex items-center justify-between">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Engine Mode</span>
<span class="material-symbols-outlined text-primary-container text-body-lg">view_in_ar</span>
</div>
<div class="mt-space-md">
<div class="text-headline-sm font-headline-sm text-on-surface">Physically-Based</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-1">Raytraced ambient occlusion &amp; 4-point studio rig</p>
</div>
<div class="mt-space-md flex items-center gap-space-xs font-label-sm text-label-sm text-secondary">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>WebGPU / Neural Shading</span>
</div>
</div>
<!-- Mini Visual 2: Preset Canvas Card -->
<div class="bg-surface-container p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div class="flex items-center justify-between">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Active 3D Stage</span>
<span class="material-symbols-outlined text-secondary text-body-lg">wb_iridescent</span>
</div>
<div class="mt-space-md">
<div class="text-headline-sm font-headline-sm text-on-surface">Cyber Neon Pedestal</div>
<p class="text-body-sm font-body-sm text-on-surface-variant mt-1">Reflective obsidian floor with dynamic rim flare</p>
</div>
<div class="mt-space-md flex items-center gap-space-sm">
<div class="h-1.5 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary-container w-4/5 rounded-full"></div>
</div>
<span class="font-label-sm text-label-sm text-primary-container font-semibold">8K HDR</span>
</div>
</div>
<!-- Mini Visual 3: Visualizer Snapshot Card -->
<div class="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-end p-space-md">
<img class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" data-alt="Futuristic sleek matte black audio headphones on a luminescent cyan and violet podium with reflective water surface, ultra-detailed 8K commercial product studio photography, cinematic volumetric neon lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz4VxkrpUznT_QrtJZ3Qihi01DrUm9pP1bKp5upM4NdgEdaDWouidq3n_2FknF9P1rDaoXY3H1KUVvYJfSIfXEBP8VJexlAc4IArMmVss1SXkOaoR4MDGQZ2yj1I6HpPBbkk0eYEfsZnMMTCZXpR8Uj0-lFk5HAuc7ZqwuVu7P7e_Puo1SvAA4vheRWg9wDLyJDXPhyPMG5b-UV10hupGUzyrCv0RFmeywbS1dYrG6WH3ptsONLn8Z"/>
<div class="relative z-10">
<span class="px-space-xs py-0.5 rounded bg-surface-container-high/90 font-label-sm text-label-sm text-primary-container uppercase">Target Viewport</span>
<div class="font-headline-sm text-headline-sm text-on-surface mt-1">Alpha Composite</div>
</div>
</div>
<!-- Mini Visual 4: Contact Shadow Generator Stats -->
<div class="bg-surface-container p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div class="flex items-center justify-between">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Shadow Pipeline</span>
<span class="material-symbols-outlined text-primary-fixed-dim text-body-lg">layers</span>
</div>
<div class="space-y-space-xs mt-space-md font-label-sm text-label-sm">
<div class="flex justify-between text-on-surface-variant">
<span>Elevation:</span>
<span class="font-data-metric text-data-metric text-on-surface">14.2mm</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Ground Penumbra:</span>
<span class="font-data-metric text-data-metric text-on-surface">88.4%</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Vector Azimuth:</span>
<span class="font-data-metric text-data-metric text-primary-container">315° Key</span>
</div>
</div>
<div class="mt-space-xs flex items-center justify-between text-on-surface-variant text-label-sm font-label-sm">
<span>Buffer: Float32 Depth</span>
<span class="text-secondary font-medium">Active</span>
</div>
</div>
</div>
</div>
<!-- Primary IDE Code Terminal -->
<div class="flex flex-col bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">
<!-- Window Controls & Navigation Tab Strip -->
<div class="flex items-center justify-between px-space-md py-space-sm bg-surface-container-low">
<!-- Mac-style Dots & Tabs -->
<div class="flex items-center gap-space-lg">
<!-- Mac Traffic Lights -->
<div class="flex items-center gap-1.5 pl-space-xs">
<span class="w-3 h-3 rounded-full bg-[#ef4444]"></span>
<span class="w-3 h-3 rounded-full bg-[#eab308]"></span>
<span class="w-3 h-3 rounded-full bg-[#22c55e]"></span>
</div>
<!-- Editor Tabs -->
<div class="flex items-center gap-space-xs">
<!-- Active Tab -->
<div class="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container text-primary-container font-label-md text-label-md font-semibold shadow-sm">
<span class="material-symbols-outlined text-body-sm text-primary-container">code_blocks</span>
<span>ProductStaging.tsx</span>
<span class="ml-space-xs w-1.5 h-1.5 rounded-full bg-primary-container"></span>
</div>
<!-- Secondary Tab -->
<div class="hidden sm:flex items-center gap-space-xs px-space-md py-1.5 rounded-lg text-outline font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer">
<span class="material-symbols-outlined text-body-sm">tune</span>
<span>useShadowEngine.ts</span>
</div>
<div class="hidden md:flex items-center gap-space-xs px-space-md py-1.5 rounded-lg text-outline font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer">
<span class="material-symbols-outlined text-body-sm">landscape</span>
<span>StudioPresets.json</span>
</div>
</div>
</div>
<!-- Editor Quick Actions & View State -->
<div class="flex items-center gap-space-md">
<!-- Live Code Copy / Sync Trigger -->
<button class="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all" onclick="copySnippet()" title="Copy Component Source">
<span class="material-symbols-outlined text-body-sm text-primary-container" id="copy-icon">content_copy</span>
<span id="copy-label">Copy Snippet</span>
</button>
<div class="hidden sm:flex items-center gap-space-xs text-outline font-label-sm text-label-sm">
<span>LF</span>
<span>•</span>
<span>UTF-8</span>
</div>
</div>
</div>
<!-- Code Block with Line Numbers -->
<div class="relative overflow-x-auto code-scroll bg-surface-container-lowest max-h-[720px] p-space-md">
<div class="flex font-label-md text-label-md leading-6">
<!-- Line Numbers Column -->
<div class="select-none text-right pr-space-md text-outline-variant font-data-metric space-y-0 opacity-70">
<div>01</div><div>02</div><div>03</div><div>04</div><div>05</div>
<div>06</div><div>07</div><div>08</div><div>09</div><div>10</div>
<div>11</div><div>12</div><div>13</div><div>14</div><div>15</div>
<div>16</div><div>17</div><div>18</div><div>19</div><div>20</div>
<div>21</div><div>22</div><div>23</div><div>24</div><div>25</div>
<div>26</div><div>27</div><div>28</div><div>29</div><div>30</div>
<div>31</div><div>32</div><div>33</div><div>34</div><div>35</div>
<div>36</div><div>37</div><div>38</div><div>39</div><div>40</div>
<div>41</div><div>42</div><div>43</div><div>44</div><div>45</div>
<div>46</div><div>47</div><div>48</div><div>49</div><div>50</div>
<div>51</div><div>52</div><div>53</div><div>54</div><div>55</div>
<div>56</div><div>57</div><div>58</div><div>59</div><div>60</div>
<div>61</div><div>62</div><div>63</div><div>64</div><div>65</div>
<div>66</div><div>67</div><div>68</div><div>69</div><div>70</div>
<div>71</div><div>72</div><div>73</div><div>74</div><div>75</div>
<div>76</div><div>77</div><div>78</div><div>79</div><div>80</div>
<div>81</div><div>82</div><div>83</div><div>84</div><div>85</div>
<div>86</div><div>87</div><div>88</div><div>89</div><div>90</div>
</div>
<!-- Code Content Column -->
<pre class="flex-1 overflow-x-auto text-on-surface whitespace-pre font-label-md"><code><span class="token-cmt">/**
 * Zavoka Studio - Intelligent 3D Product Staging &amp; Dynamic Relighting Node
 * Path: src/components/staging/ProductStaging.tsx
 * Architecture: WebGPU / Neural Segmentation Shader Rig v3.4
 */</span>

<span class="token-kw">import</span> React, { useState, useRef, useEffect, useMemo, useCallback } <span class="token-kw">from</span> <span class="token-str">'react'</span>;
<span class="token-kw">import</span> { motion, AnimatePresence } <span class="token-kw">from</span> <span class="token-str">'framer-motion'</span>;
<span class="token-kw">import</span> { useNeuralSegmentation } <span class="token-kw">from</span> <span class="token-str">'@zavoka/ai-vision'</span>;
<span class="token-kw">import</span> { StageCanvas, StudioRig, GroundProjection } <span class="token-kw">from</span> <span class="token-str">'@zavoka/stage-engine'</span>;

<span class="token-kw">export interface</span> <span class="token-type">LightingRigState</span> {
  keyLight: { intensity: <span class="token-type">number</span>; azimuth: <span class="token-type">number</span>; elevation: <span class="token-type">number</span>; color: <span class="token-type">string</span> };
  rimLight: { intensity: <span class="token-type">number</span>; color: <span class="token-type">string</span>; spread: <span class="token-type">number</span> };
  ambientFill: { color: <span class="token-type">string</span>; intensity: <span class="token-type">number</span> };
  groundShadow: { blur: <span class="token-type">number</span>; elevation: <span class="token-type">number</span>; opacity: <span class="token-type">number</span>; angle: <span class="token-type">number</span> };
}

<span class="token-kw">export type</span> <span class="token-type">StudioPresetId</span> = 
  | <span class="token-str">'cyber-neon-pedestal'</span> 
  | <span class="token-str">'minimalist-stone-water'</span> 
  | <span class="token-str">'warm-sunset-studio'</span> 
  | <span class="token-str">'luxury-velvet-podium'</span>;

<span class="token-kw">export interface</span> <span class="token-type">ProductStagingProps</span> {
  sourceAssetUrl: <span class="token-type">string</span>;
  initialPreset?: <span class="token-type">StudioPresetId</span>;
  onExportRender?: (renderBlob: <span class="token-type">Blob</span>, meta: <span class="token-type">Record</span>&lt;<span class="token-type">string</span>, <span class="token-type">unknown</span>&gt;) =&gt; <span class="token-type">void</span>;
  allow360Drag?: <span class="token-type">boolean</span>;
}

<span class="token-kw">export const</span> <span class="token-fn">ProductStaging</span>: React.FC&lt;<span class="token-type">ProductStagingProps</span>&gt; = ({
  sourceAssetUrl,
  initialPreset = <span class="token-str">'cyber-neon-pedestal'</span>,
  onExportRender,
  allow360Drag = <span class="token-bool">true</span>,
}) =&gt; {
  <span class="token-cmt">// 1. AI Cutout Segmentation State</span>
  <span class="token-kw">const</span> [isCutoutMode, setIsCutoutMode] = useState&lt;<span class="token-type">boolean</span>&gt;(<span class="token-bool">false</span>);
  <span class="token-kw">const</span> [activePreset, setActivePreset] = useState&lt;<span class="token-type">StudioPresetId</span>&gt;(initialPreset);
  <span class="token-kw">const</span> [rotationAngle, setRotationAngle] = useState&lt;<span class="token-type">number</span>&gt;(<span class="token-num">0</span>);
  <span class="token-kw">const</span> [isProcessingAi, setIsProcessingAi] = useState&lt;<span class="token-type">boolean</span>&gt;(<span class="token-bool">false</span>);

  <span class="token-cmt">// 2. Dynamic Optical &amp; Contact Shadow Parameters</span>
  <span class="token-kw">const</span> [lighting, setLighting] = useState&lt;<span class="token-type">LightingRigState</span>&gt;({
    keyLight: { intensity: <span class="token-num">1.4</span>, azimuth: <span class="token-num">315</span>, elevation: <span class="token-num">45</span>, color: <span class="token-str">'#00f2fe'</span> },
    rimLight: { intensity: <span class="token-num">2.1</span>, color: <span class="token-str">'#c084fc'</span>, spread: <span class="token-num">35</span> },
    ambientFill: { color: <span class="token-str">'#111318'</span>, intensity: <span class="token-num">0.65</span> },
    groundShadow: { blur: <span class="token-num">22</span>, elevation: <span class="token-num">12</span>, opacity: <span class="token-num">0.85</span>, angle: <span class="token-num">90</span> },
  });

  <span class="token-cmt">// 3. Neural Background Elimination Hook</span>
  <span class="token-kw">const</span> { segmentObject, isReady: isNeuralVisionReady } = useNeuralSegmentation({
    model: <span class="token-str">'vit-huge-matting-v4'</span>,
    precision: <span class="token-str">'fp16'</span>,
    edgeRefinement: <span class="token-num">0.96</span>,
  });

  <span class="token-kw">const</span> handleToggleBackgroundRemoval = useCallback(<span class="token-kw">async</span> () =&gt; {
    setIsProcessingAi(<span class="token-bool">true</span>);
    <span class="token-kw">try</span> {
      <span class="token-kw">await</span> segmentObject(sourceAssetUrl);
      setIsCutoutMode((prev) =&gt; !prev);
    } <span class="token-kw">finally</span> {
      setIsProcessingAi(<span class="token-bool">false</span>);
    }
  }, [segmentObject, sourceAssetUrl]);

  <span class="token-cmt">// 4. Ray-traced Contact Shadow Synthesizer</span>
  <span class="token-kw">const</span> computedShadowStyle = useMemo(() =&gt; {
    <span class="token-kw">const</span> { blur, elevation, opacity, angle } = lighting.groundShadow;
    <span class="token-kw">const</span> rad = (angle * Math.PI) / <span class="token-num">180</span>;
    <span class="token-kw">const</span> offsetX = Math.cos(rad) * elevation;
    <span class="token-kw">const</span> offsetY = Math.sin(rad) * elevation;

    <span class="token-kw">return</span> {
      filter: <span class="token-str">`drop-shadow(${offsetX}px ${offsetY}px ${blur}px rgba(0, 0, 0, ${opacity}))`</span>,
      transform: <span class="token-str">`rotateY(${rotationAngle}deg)`</span>,
      transition: <span class="token-str">'transform 75ms ease-out, filter 150ms ease'</span>,
    };
  }, [lighting.groundShadow, rotationAngle]);

  <span class="token-kw">return</span> (
    &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"relative flex flex-col w-full h-full bg-[#0b0d11] text-slate-100 overflow-hidden"</span>&gt;
      {<span class="token-cmt">/* Visual Stage Workspace */</span>}
      &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-str">"relative flex-1 flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a202c]/40 via-[#0c0e12] to-[#07080a]"</span>&gt;
        &lt;<span class="token-tag">StageCanvas</span> 
          <span class="token-attr">preset</span>={activePreset} 
          <span class="token-attr">interactiveRotation</span>={allow360Drag}
          <span class="token-attr">onRotate</span>={(<span class="token-attr">deg</span>) =&gt; setRotationAngle(deg)}
        &gt;
          &lt;<span class="token-tag">motion.div</span> <span class="token-attr">style</span>={computedShadowStyle} <span class="token-attr">className</span>=<span class="token-str">"relative z-20 cursor-grab active:cursor-grabbing"</span>&gt;
            &lt;<span class="token-tag">img</span> 
              <span class="token-attr">src</span>={sourceAssetUrl} 
              <span class="token-attr">alt</span>=<span class="token-str">"Staged 3D Asset"</span> 
              <span class="token-attr">className</span>={<span class="token-str">`max-h-[500px] object-contain transition-all duration-300 ${isCutoutMode ? 'brightness-105' : ''}`</span>} 
            /&gt;
          &lt;/<span class="token-tag">motion.div</span>&gt;

          {<span class="token-cmt">/* Ground Reflective Contact Plane */</span>}
          &lt;<span class="token-tag">GroundProjection</span> 
            <span class="token-attr">blurIntensity</span>={lighting.groundShadow.blur} 
            <span class="token-attr">tint</span>={lighting.rimLight.color}
            <span class="token-attr">specularPower</span>={<span class="token-num">0.82</span>}
          /&gt;
        &lt;/<span class="token-tag">StageCanvas</span>&gt;
      &lt;/<span class="token-tag">div</span>&gt;
    &lt;/<span class="token-tag">div</span>&gt;
  );
};

<span class="token-kw">export default</span> <span class="token-fn">ProductStaging</span>;</code></pre>
</div>
</div>
<!-- IDE Diagnostic & Status Tray -->
<div class="flex flex-wrap items-center justify-between px-space-md py-space-xs bg-surface-container-low text-outline font-label-sm text-label-sm">
<div class="flex items-center gap-space-md">
<div class="flex items-center gap-space-xs text-primary-container">
<span class="material-symbols-outlined text-body-sm">check_circle</span>
<span>Zero Diagnostics Errors</span>
</div>
<span class="hidden sm:inline">|</span>
<div class="hidden sm:flex items-center gap-space-xs">
<span>Target: ESNext + React 18.2</span>
</div>
</div>
<div class="flex items-center gap-space-lg">
<div class="flex items-center gap-space-xs">
<span class="text-outline-variant">Spaces: 2</span>
<span>•</span>
<span class="text-on-surface">TypeScript React</span>
</div>
<div class="flex items-center gap-space-xs text-on-surface-variant">
<span class="w-2 h-2 rounded-full bg-primary-container"></span>
<span>Tree-shaken</span>
</div>
</div>
</div>
</div>
<!-- Component Parameter Inspector & Functional Matrix -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-lg">
<!-- Inspector Block 1 -->
<div class="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div class="flex items-center justify-between mb-space-xs">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Stage Environments</span>
<span class="material-symbols-outlined text-primary-container text-body-md">palette</span>
</div>
<div class="space-y-space-xs font-body-sm text-body-sm">
<div class="flex items-center justify-between p-space-xs rounded bg-surface-container">
<span class="text-on-surface">Cyber Neon Pedestal</span>
<span class="text-primary-container font-label-sm text-label-sm">ACTIVE</span>
</div>
<div class="flex items-center justify-between p-space-xs rounded bg-surface-container/40 text-on-surface-variant">
<span>Minimalist Stone &amp; Water</span>
<span class="text-outline font-label-sm text-label-sm">READY</span>
</div>
<div class="flex items-center justify-between p-space-xs rounded bg-surface-container/40 text-on-surface-variant">
<span>Warm Sunset Studio</span>
<span class="text-outline font-label-sm text-label-sm">READY</span>
</div>
</div>
<p class="mt-space-md text-on-surface-variant font-label-sm text-label-sm">HDR radiance spherical maps loaded via StageEngine asset pool.</p>
</div>
<!-- Inspector Block 2 -->
<div class="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div class="flex items-center justify-between mb-space-xs">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Realtime Shadow Telemetry</span>
<span class="material-symbols-outlined text-secondary text-body-md">wb_shade</span>
</div>
<div class="space-y-space-sm font-label-sm text-label-sm">
<div>
<div class="flex justify-between text-on-surface mb-1">
<span>Contact Occlusion (Soft)</span>
<span class="font-data-metric text-data-metric text-primary-container">22px</span>
</div>
<div class="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary-container w-[70%]"></div>
</div>
</div>
<div>
<div class="flex justify-between text-on-surface mb-1">
<span>Ground Angle Bias</span>
<span class="font-data-metric text-data-metric text-secondary">90.0°</span>
</div>
<div class="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[50%]"></div>
</div>
</div>
<div>
<div class="flex justify-between text-on-surface mb-1">
<span>Specular Reflectance</span>
<span class="font-data-metric text-data-metric text-on-surface">82%</span>
</div>
<div class="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary-fixed w-[82%]"></div>
</div>
</div>
</div>
<p class="mt-space-md text-on-surface-variant font-label-sm text-label-sm">Synchronized with key light direction and floor refractive index.</p>
</div>
<!-- Inspector Block 3 -->
<div class="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm">
<div class="flex items-center justify-between mb-space-xs">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-outline">Neural Segmentation Engine</span>
<span class="material-symbols-outlined text-primary-fixed text-body-md">auto_awesome</span>
</div>
<div class="flex flex-col gap-space-xs">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-primary-container text-headline-sm">memory</span>
<div>
<div class="font-headline-sm text-headline-sm text-on-surface">ViT-Huge v4</div>
<div class="text-body-sm font-body-sm text-on-surface-variant">Matting precision @ 16-bit float</div>
</div>
</div>
<div class="p-space-xs rounded bg-surface-container flex items-center justify-between font-label-sm text-label-sm mt-space-xs">
<span class="text-outline">Latency:</span>
<span class="text-primary-container font-data-metric text-data-metric">42ms inference</span>
</div>
</div>
<p class="mt-space-md text-on-surface-variant font-label-sm text-label-sm">High-fidelity hair, glass, and sub-pixel edge boundary matting.</p>
</div>
</div>
</div>
<script>
  function copySnippet() {
    const raw = document.getElementById('raw-code') ? document.getElementById('raw-code').value : 'export const ProductStaging = () => {};';
    navigator.clipboard.writeText(raw).then(() => {
      const label = document.getElementById('copy-label');
      const icon = document.getElementById('copy-icon');
      if (label && icon) {
        label.textContent = 'Copied!';
        icon.textContent = 'done';
        setTimeout(() => {
          label.textContent = 'Copy Snippet';
          icon.textContent = 'content_copy';
        }, 2200);
      }
    });
  }
</script></main>
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
<textarea class="hidden" id="raw-code">/**
 * Zavoka Studio - Global Persistent Application Header
 * Path: src/components/common/Header.tsx
 * Features: Brand Logomark, 8K Neural Status, Quick Upload Action, User Avatar
 */

import React from 'react';

export interface HeaderProps {
  onOpenUpload?: () =&gt; void;
  activeTab?: string;
  isNeuralEngineActive?: boolean;
  userProfile?: {
    name: string;
    avatarUrl: string;
    tier: 'PRO' | 'STUDIO' | 'FREE';
  };
}

export const Header: React.FC&lt;HeaderProps&gt; = ({
  onOpenUpload,
  activeTab = 'studio',
  isNeuralEngineActive = true,
  userProfile = {
    name: 'Studio Artist',
    avatarUrl: '/avatars/photographer.jpg',
    tier: 'PRO',
  },
}) =&gt; {
  return (
    &lt;header className="sticky top-0 z-40 w-full bg-[#111318]/90 backdrop-blur-xl border-b border-white/10 px-4 lg:px-6 py-3 transition-colors duration-200"&gt;
      &lt;div className="max-w-7xl mx-auto flex items-center justify-between gap-4"&gt;
        
        {/* Brand Identity &amp; Neural Status Badge */}
        &lt;div className="flex items-center gap-3.5"&gt;
          &lt;div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0b0d11] border border-[#00f2fe]/40 shadow-[0_0_16px_rgba(0,242,254,0.2)] overflow-hidden group cursor-pointer"&gt;
            &lt;img 
              src="/favicon.svg" 
              alt="Zavoka Studio Logo" 
              className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
            /&gt;
            &lt;div className="absolute inset-0 bg-gradient-to-tr from-[#00f2fe]/10 to-transparent pointer-events-none" /&gt;
          &lt;/div&gt;

          &lt;div className="flex flex-col"&gt;
            &lt;div className="flex items-center gap-2"&gt;
              &lt;span className="text-lg font-extrabold tracking-tight text-white"&gt;
                Zavoka
              &lt;/span&gt;
              &lt;span className="px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#00f2fe] to-[#8b5cf6] text-[#0b0d11]"&gt;
                {userProfile.tier}
              &lt;/span&gt;
            &lt;/div&gt;

            {/* 8K Neural Status Indicator */}
            &lt;div className="flex items-center gap-1.5 mt-0.5"&gt;
              &lt;span className={`w-2 h-2 rounded-full ${isNeuralEngineActive ? 'bg-[#00f2fe] animate-pulse shadow-[0_0_8px_#00f2fe]' : 'bg-slate-600'}`} /&gt;
              &lt;span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400"&gt;
                {isNeuralEngineActive ? '8K NEURAL ACTIVE' : 'ENGINE OFFLINE'}
              &lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        {/* Header Actions */}
        &lt;div className="flex items-center gap-3 sm:gap-4"&gt;
          {/* Live File Picker / Upload Modal Trigger */}
          &lt;button
            type="button"
            onClick={onOpenUpload}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 active:scale-95 border border-[#00f2fe]/30 text-[#00f2fe] text-xs sm:text-sm font-semibold transition-all shadow-[0_0_12px_rgba(0,242,254,0.12)] cursor-pointer"
          &gt;
            &lt;svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"&gt;
              &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 4v16m8-8H4" /&gt;
            &lt;/svg&gt;
            &lt;span&gt;Upload&lt;/span&gt;
          &lt;/button&gt;

          {/* User Avatar Profile */}
          &lt;div className="relative group cursor-pointer"&gt;
            &lt;div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#00f2fe] via-[#8b5cf6] to-[#d946ef] transition-transform group-hover:scale-105"&gt;
              &lt;img
                src={userProfile.avatarUrl}
                alt={userProfile.name}
                className="w-full h-full rounded-full object-cover bg-[#0b0d11]"
                onError={(e) =&gt; {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              /&gt;
            &lt;/div&gt;
            &lt;span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#111318]" /&gt;
          &lt;/div&gt;
        &lt;/div&gt;

      &lt;/div&gt;
    &lt;/header&gt;
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
</body></html>
