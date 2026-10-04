/**
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
