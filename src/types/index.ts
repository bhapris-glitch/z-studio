<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Viewer - index.ts</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"Fira Code"', 'monospace'],
          },
          colors: {
            brand: {
              cyan: '#00f2fe',
              neon: '#38bdf8',
              violet: '#8b5cf6',
              dark: '#0b0d11',
              card: '#111318',
              border: 'rgba(255, 255, 255, 0.08)'
            }
          }
        }
      }
    }
  </script>
  <style>
    pre code {
      counter-reset: line;
    }
    .code-line {
      display: block;
      line-height: 1.625rem;
    }
    .code-line::before {
      counter-increment: line;
      content: counter(line);
      display: inline-block;
      width: 2.75rem;
      padding-right: 1.25rem;
      text-align: right;
      color: #475569;
      user-select: none;
    }
    /* Syntax Highlighting */
    .syn-kwd { color: #f43f5e; font-weight: 600; }
    .syn-type { color: #38bdf8; font-weight: 500; }
    .syn-str { color: #a7f3d0; }
    .syn-num { color: #fbbf24; }
    .syn-comm { color: #64748b; font-style: italic; }
    .syn-prop { color: #e2e8f0; }
    .syn-fn { color: #c084fc; }
    .syn-bool { color: #f59e0b; }
    .syn-punct { color: #94a3b8; }
  </style>
</head>
<body class="bg-[#080a0f] text-slate-200 font-sans antialiased min-h-screen flex flex-col selection:bg-[#00f2fe]/30 selection:text-[#00f2fe]">

  <!-- Top App Navigation Chrome -->
  <header class="sticky top-0 z-50 bg-[#0d1017]/90 backdrop-blur-xl border-b border-white/[0.08] px-4 lg:px-8 py-3.5 flex items-center justify-between">
    <div class="flex items-center gap-3.5">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f2fe] via-[#38bdf8] to-[#8b5cf6] p-[1.5px] shadow-[0_0_18px_rgba(0,242,254,0.35)]">
        <div class="w-full h-full bg-[#0b0d11] rounded-[10px] flex items-center justify-center">
          <svg class="w-5 h-5 text-[#00f2fe]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 4h14a1 1 0 0 1 1 1v2.5a1 1 0 0 1-.35.76L10.5 16H19a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 .35-.76L13.5 8H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/>
          </svg>
        </div>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <span class="font-extrabold text-white text-base tracking-tight">Zavoka Studio</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30 uppercase tracking-wider">CODE HUB</span>
        </div>
        <p class="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
          <span>src</span>
          <span class="text-slate-600">/</span>
          <span>types</span>
          <span class="text-slate-600">/</span>
          <span class="text-[#00f2fe] font-semibold">index.ts</span>
        </p>
      </div>
    </div>

    <!-- Quick Action Tool Buttons -->
    <div class="flex items-center gap-2.5">
      <button id="copyBtn" onclick="handleCopyCode()" class="group px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00f2fe]/40 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer">
        <svg id="copyIcon" class="w-4 h-4 text-[#00f2fe] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
        <span id="copyText">1-Click Copy Code</span>
      </button>

      <button id="downloadBtn" onclick="handleDownloadTs()" class="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#8b5cf6] text-[#08090c] text-xs font-extrabold flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_28px_rgba(0,242,254,0.5)] transition-all cursor-pointer">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        <span>Download .ts</span>
      </button>
    </div>
  </header>

  <!-- Sub-Header Metadata Strip -->
  <div class="bg-[#0b0d13] border-b border-white/[0.06] px-4 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
    <div class="flex items-center gap-2.5">
      <span class="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">TS 5.4</span>
      <span class="text-slate-400">Lines: <strong class="text-white font-medium">185</strong></span>
      <span class="text-slate-600">•</span>
      <span class="text-slate-400">Size: <strong class="text-white font-medium">7.4 KB</strong></span>
      <span class="text-slate-600">•</span>
      <span class="text-slate-400">Encoding: <strong class="text-white font-medium">UTF-8</strong></span>
    </div>

    <div class="flex items-center gap-4 text-slate-400">
      <span class="flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-emerald-400">Strict Type Safety 100%</span>
      </span>
      <span>Target: <strong class="text-slate-200">ESNext / WebGPU / React 18</strong></span>
    </div>
  </div>

  <!-- Main Code Canvas Viewport -->
  <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">

    <!-- Architecture Callout Card -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 bg-[#111318] border border-white/10 rounded-2xl p-4">
      <div class="flex flex-col">
        <span class="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">Schema Target</span>
        <span class="text-xs font-bold text-[#00f2fe] mt-0.5">Core Unified Data Types</span>
        <p class="text-[11px] text-slate-400 mt-1">Single source of truth for assets, filters, stages, and export payloads</p>
      </div>

      <div class="flex flex-col">
        <span class="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">Supported Codecs</span>
        <span class="text-xs font-bold text-white mt-0.5">RAW, TIFF, PNG, JPG, WebP</span>
        <p class="text-[11px] text-slate-400 mt-1">Lossless 16-bit float and 8K sensor matrix definitions</p>
      </div>

      <div class="flex flex-col">
        <span class="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">Color Spaces</span>
        <span class="text-xs font-bold text-white mt-0.5">Rec.2020 • DCI-P3 • sRGB</span>
        <p class="text-[11px] text-slate-400 mt-1">HDR gamut definitions with ICC profile metadata maps</p>
      </div>

      <div class="flex flex-col">
        <span class="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">Validation State</span>
        <span class="text-xs font-bold text-emerald-400 mt-0.5">Zero Diagnostics Errors</span>
        <p class="text-[11px] text-slate-400 mt-1">Exports ready for React 18 / Vite / Next.js / TypeScript 5</p>
      </div>
    </div>

    <!-- IDE Code Window -->
    <div class="relative bg-[#0d1017] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      
      <!-- Window Title Bar -->
      <div class="bg-[#131722] border-b border-white/[0.08] px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-[#ef4444]/80"></span>
            <span class="w-3 h-3 rounded-full bg-[#f59e0b]/80"></span>
            <span class="w-3 h-3 rounded-full bg-[#10b981]/80"></span>
          </div>
          <span class="ml-3 font-mono text-xs text-slate-300 font-semibold flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v18H3V3zm9.5 13.5v-1.8l-1.9.4v-1.4l1.9-.3V12h-1.9v-1.4H14v5.9h-1.5zm3.7-2.6h1.6c0 1.6-1.1 2.6-2.7 2.6-1.7 0-2.8-1.2-2.8-3.1 0-1.9 1.1-3.1 2.8-3.1 1.6 0 2.6 1 2.7 2.6h-1.6c-.1-.7-.5-1.1-1.1-1.1-.7 0-1.2.6-1.2 1.6 0 1 .5 1.6 1.2 1.6.6 0 1-.4 1.1-1.1z"/>
            </svg>
            index.ts
          </span>
        </div>
        <div class="text-[11px] font-mono text-slate-500">TypeScript Module</div>
      </div>

      <!-- Code Stream -->
      <div class="p-4 sm:p-6 overflow-x-auto text-[13px] font-mono text-slate-300">
        <pre><code id="sourceCodeContainer"><!-- Injected by JavaScript on load --></code></pre>
      </div>

    </div>

    <!-- Bottom Navigation Footer -->
    <div class="flex items-center justify-between pt-2 border-t border-white/[0.08] text-xs font-mono text-slate-400">
      <div class="flex items-center gap-2">
        <span>Previous:</span>
        <span class="text-slate-300">src/components/export/ExportLab.tsx</span>
      </div>
      <div class="flex items-center gap-2">
        <span>Next in tree:</span>
        <span class="text-[#00f2fe] font-semibold">src/App.tsx</span>
      </div>
    </div>

  </main>

  <script>
    const RAW_SOURCE_CODE = `/**
 * Zavoka Studio - Comprehensive TypeScript Definitions
 * Path: src/types/index.ts
 * 
 * Provides centralized types, interfaces, and enums across:
 * - Ingestion & File Parsing Engine
 * - Super HD Neural Upscaling & Cinematic LUT Filters
 * - 3D Product Staging & Neural Relighting Engine
 * - Calibrated Multi-Format Export Pipeline
 * - Global Application State & Tab Navigation
 */

// ============================================================================
// 1. Core Navigation & Workspace Tab Types
// ============================================================================

export type ActiveTabId = 'enhance' | 'product-ai' | 'export';

export interface NavigationTabItem {
  id: ActiveTabId;
  label: string;
  tagline: string;
  badge?: string;
  iconName: 'Sparkles' | 'Box' | 'Download';
}

// ============================================================================
// 2. Asset Ingestion & Multi-Format RAW Types
// ============================================================================

export type SupportedFileExtension = 
  | 'RAW' | 'CR3' | 'ARW' | 'DNG' | 'NEF'
  | 'JPG' | 'JPEG' | 'PNG' | 'WEBP' | 'TIFF';

export type NormalizedAssetFormat = 'RAW' | 'JPG' | 'PNG' | 'WEBP' | 'TIFF';

export type ColorGamut = 'DCI-P3' | 'Rec.2020' | 'sRGB' | 'ProPhoto RGB';

export interface UploadedAssetInfo {
  id: string;
  fileName: string;
  fileSizeFormatted: string;
  fileSizeBytes: number;
  format: NormalizedAssetFormat;
  resolutionLabel: string;
  width: number;
  height: number;
  aspectRatio: number;
  objectUrl: string;
  colorGamut: ColorGamut;
  status: 'validated' | 'processing' | 'failed';
  exifMetadata?: ExifHeaderData;
}

export interface ExifHeaderData {
  make?: string;
  model?: string;
  lensModel?: string;
  iso?: number;
  shutterSpeed?: string;
  fNumber?: string;
  focalLength?: string;
  colorSpaceTag?: string;
  hasEmbeddedGps?: boolean;
}

// ============================================================================
// 3. Super HD 8K Neural & Filter Engine Types
// ============================================================================

export type FilterPresetId = 'cyber' | 'obsidian' | 'teal-orange' | 'tokyo';

export interface FilterPreset {
  id: FilterPresetId;
  name: string;
  subname: string;
  lutFilter: string;
  colorHex: string;
  highlightGamut: string;
}

export interface NeuralParameters {
  sharpness: number;      // 0 - 100 percentage
  denoise: number;        // 0 - 100 percentage
  hdrGamut: number;       // 0 - 100 percentage
  microTexture: number;   // 0 - 100 percentage
}

export interface ComparisonSplitState {
  splitPercentage: number; // 0 (full original) to 100 (full enhanced)
  zoomLevel: 1 | 2 | 4 | 8;
  isDragging: boolean;
}

// ============================================================================
// 4. 3D Product Staging & Relighting Types
// ============================================================================

export type StudioPresetId = 
  | 'cyber-neon-pedestal'
  | 'minimalist-stone-water'
  | 'warm-sunset-studio'
  | 'luxury-velvet-podium';

export type StagingDisplayMode = 'staged-3d' | 'cutout-only';

export interface LightVector {
  intensity: number;      // 0 - 150 percentage
  azimuth: number;        // 0 - 360 degrees
  elevation: number;      // 0 - 90 degrees
  color: string;          // Hex or RGBA string
  spread?: number;        // Pixel falloff radius
}

export interface ContactShadowParams {
  blur: number;           // Shadow penumbra blur radius in px
  elevation: number;      // Distance offset from pedestal in px
  opacity: number;        // 0 - 100 percentage
  angle: number;          // Projection angle in degrees
}

export interface LightingRigState {
  keyLight: LightVector;
  rimLight: {
    intensity: number;
    color: string;
    spread: number;
  };
  ambientFill: {
    color: string;
    intensity: number;
  };
  groundShadow: ContactShadowParams;
}

export interface StudioEnvironment {
  id: StudioPresetId;
  name: string;
  tagline: string;
  ambientTone: string;
  pedestalType: 'cylinder' | 'floating-slab' | 'monolith' | 'reflective-disc';
  defaultLighting: LightingRigState;
  previewGradient: string;
}

export interface ObjectTransform3D {
  rotationY: number;      // 0 - 360 degrees
  elevationY: number;     // vertical hover displacement (-25 to +25px)
  scale: number;          // 0.5 to 2.0
}

// ============================================================================
// 5. Calibrated Export Lab Types
// ============================================================================

export type ExportFormat = 'TIFF' | 'RAW' | 'PNG' | 'JPG';

export type ExportResolutionPreset = 'original' | '2k' | '4k' | '8k';

export type PrintDpiPreset = 72 | 300 | 600;

export type ColorProfile = 'Display P3' | 'Adobe RGB' | 'sRGB' | 'ProPhoto RGB';

export type WatermarkPosition = 'bottom-right' | 'bottom-left' | 'center' | 'top-right';

export interface ResolutionSpecs {
  width: number;
  height: number;
  label: string;
  estSizeMb: number;
}

export interface WatermarkConfig {
  enabled: boolean;
  text: string;
  opacity: number;        // 0 - 100 percentage
  position: WatermarkPosition;
}

export interface ExportJobOptions {
  format: ExportFormat;
  resolution: ExportResolutionPreset;
  dpi: PrintDpiPreset;
  colorSpace: ColorProfile;
  compressionQuality: number; // 1 - 100
  embedIcc: boolean;
  includeExif: boolean;
  stripGps: boolean;
  watermark: WatermarkConfig;
}

export interface RenderResultPayload {
  exportBlobUrl: string;
  fileName: string;
  format: ExportFormat;
  resolution: ResolutionSpecs;
  dpi: number;
  colorSpace: ColorProfile;
  watermarked: boolean;
  timestamp: number;
}

// ============================================================================
// 6. User Profile & System Status Types
// ============================================================================

export interface UserProfile {
  id: string;
  name: string;
  tier: 'PRO' | 'STUDIO_ENTERPRISE' | 'FREE';
  avatarUrl: string;
  activeHardwareAccel: 'WebGPU' | 'CoreML' | 'CPU_Fallback';
}

export interface EngineStatus {
  version: string;
  isHardwareAccelerated: boolean;
  activeModelWeights: string;
  vramAllocatedMB: number;
  latencyMs: number;
}
`;

    // Render formatted code with syntax highlighting
    function renderCode(code) {
      const lines = code.trim().split('\n');
      return lines.map(line => {
        let esc = line
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');

        // Comments
        if (esc.trim().startsWith('//') || esc.trim().startsWith('/*') || esc.trim().startsWith('*')) {
          return `<span class="code-line syn-comm">${esc}</span>`;
        }

        // Keywords
        esc = esc.replace(/\b(export|type|interface|enum|const|let|var|return|default)\b/g, '<span class="syn-kwd">$1</span>');

        // Types
        esc = esc.replace(/\b(string|number|boolean|Record|Blob|void|ActiveTabId|UploadedAssetInfo|ExifHeaderData|FilterPresetId|FilterPreset|NeuralParameters|ComparisonSplitState|StudioPresetId|StagingDisplayMode|LightVector|ContactShadowParams|LightingRigState|StudioEnvironment|ObjectTransform3D|ExportFormat|ExportResolutionPreset|PrintDpiPreset|ColorProfile|WatermarkPosition|ResolutionSpecs|WatermarkConfig|ExportJobOptions|RenderResultPayload|UserProfile|EngineStatus)\b/g, '<span class="syn-type">$1</span>');

        // Strings
        esc = esc.replace(/('(?:\\'|[^'])*')/g, '<span class="syn-str">$1</span>');

        // Numbers
        esc = esc.replace(/\b(\d+)\b/g, '<span class="syn-num">$1</span>');

        return `<span class="code-line">${esc}</span>`;
      }).join('');
    }

    document.getElementById('sourceCodeContainer').innerHTML = renderCode(RAW_SOURCE_CODE);

    // 1-Click Copy Code
    function handleCopyCode() {
      navigator.clipboard.writeText(RAW_SOURCE_CODE).then(() => {
        const textEl = document.getElementById('copyText');
        const iconEl = document.getElementById('copyIcon');
        const originalText = textEl.textContent;
        textEl.textContent = '✓ Copied to Clipboard!';
        textEl.classList.add('text-emerald-400');
        setTimeout(() => {
          textEl.textContent = originalText;
          textEl.classList.remove('text-emerald-400');
        }, 2200);
      }).catch(err => {
        console.error('Failed to copy code: ', err);
      });
    }

    // Direct Download .ts file
    function handleDownloadTs() {
      const blob = new Blob([RAW_SOURCE_CODE], { type: 'text/typescript;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'index.ts';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>
