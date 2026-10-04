/**
 * Zavoka Studio - Intelligent 3D Product Staging & Dynamic Relighting Node
 * Path: src/components/staging/ProductStaging.tsx
 * Architecture: WebGPU / Neural Segmentation Shader Rig v3.4
 */

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNeuralSegmentation } from '@zavoka/ai-vision';
import { StageCanvas, StudioRig, GroundProjection } from '@zavoka/stage-engine';

export interface LightingRigState {
  keyLight: { intensity: number; azimuth: number; elevation: number; color: string };
  rimLight: { intensity: number; color: string; spread: number };
  ambientFill: { color: string; intensity: number };
  groundShadow: { blur: number; elevation: number; opacity: number; angle: number };
}

export type StudioPresetId = 
  | 'cyber-neon-pedestal' 
  | 'minimalist-stone-water' 
  | 'warm-sunset-studio' 
  | 'luxury-velvet-podium';

export interface ProductStagingProps {
  sourceAssetUrl: string;
  initialPreset?: StudioPresetId;
  onExportRender?: (renderBlob: Blob, meta: Record<string, unknown>) => void;
  allow360Drag?: boolean;
}

export const ProductStaging: React.FC<ProductStagingProps> = ({
  sourceAssetUrl,
  initialPreset = 'cyber-neon-pedestal',
  onExportRender,
  allow360Drag = true,
}) => {
  // 1. AI Cutout Segmentation State
  const [isCutoutMode, setIsCutoutMode] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<StudioPresetId>(initialPreset);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isProcessingAi, setIsProcessingAi] = useState<boolean>(false);

  // 2. Dynamic Optical & Contact Shadow Parameters
  const [lighting, setLighting] = useState<LightingRigState>({
    keyLight: { intensity: 1.4, azimuth: 315, elevation: 45, color: '#00f2fe' },
    rimLight: { intensity: 2.1, color: '#c084fc', spread: 35 },
    ambientFill: { color: '#111318', intensity: 0.65 },
    groundShadow: { blur: 22, elevation: 12, opacity: 0.85, angle: 90 },
  });

  // 3. Neural Background Elimination Hook
  const { segmentObject, isReady: isNeuralVisionReady } = useNeuralSegmentation({
    model: 'vit-huge-matting-v4',
    precision: 'fp16',
    edgeRefinement: 0.96,
  });

  const handleToggleBackgroundRemoval = useCallback(async () => {
    setIsProcessingAi(true);
    try {
      await segmentObject(sourceAssetUrl);
      setIsCutoutMode((prev) => !prev);
    } finally {
      setIsProcessingAi(false);
    }
  }, [segmentObject, sourceAssetUrl]);

  // 4. Ray-traced Contact Shadow Synthesizer
  const computedShadowStyle = useMemo(() => {
    const { blur, elevation, opacity, angle } = lighting.groundShadow;
    const rad = (angle * Math.PI) / 180;
    const offsetX = Math.cos(rad) * elevation;
    const offsetY = Math.sin(rad) * elevation;

    return {
      filter: `drop-shadow(${offsetX}px ${offsetY}px ${blur}px rgba(0, 0, 0, ${opacity}))`,
      transform: `rotateY(${rotationAngle}deg)`,
      transition: 'transform 75ms ease-out, filter 150ms ease',
    };
  }, [lighting.groundShadow, rotationAngle]);

  return (
    <div className="relative flex flex-col w-full h-full bg-[#0b0d11] text-slate-100 overflow-hidden">
      {/* Visual Stage Workspace */}
      <div className="relative flex-1 flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a202c]/40 via-[#0c0e12] to-[#07080a]">
        <StageCanvas 
          preset={activePreset} 
          interactiveRotation={allow360Drag}
          onRotate={(deg) => setRotationAngle(deg)}
        >
          <motion.div style={computedShadowStyle} className="relative z-20 cursor-grab active:cursor-grabbing">
            <img 
              src={sourceAssetUrl} 
              alt="Staged 3D Asset" 
              className={`max-h-[500px] object-contain transition-all duration-300 ${isCutoutMode ? 'brightness-105' : ''}`} 
            />
          </motion.div>

          {/* Ground Reflective Contact Plane */}
          <GroundProjection 
            blurIntensity={lighting.groundShadow.blur} 
            tint={lighting.rimLight.color}
            specularPower={0.82}
          />
        </StageCanvas>
      </div>
    </div>
  );
};

export default ProductStaging;
