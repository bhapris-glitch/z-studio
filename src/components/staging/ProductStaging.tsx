/**
 * Zavoka Studio - Intelligent 3D Product Staging & Dynamic Relighting Node
 * Path: src/components/staging/ProductStaging.tsx
 * Architecture: WebGPU / Neural Segmentation Shader Rig v3.4
 */
import React, { useState } from 'react';
import { ProductStagingProps } from '../../types';
import { Sliders, Sun, Download, Wand2, Eye } from 'lucide-react';

export const ProductStaging: React.FC<ProductStagingProps> = ({
  sourceAssetUrl,
  onNavigateToExport,
}) => {
  const [activePreset, setActivePreset] = useState<string>('minimal');
  const [isProcessingAi, setIsProcessingAi] = useState<boolean>(false);
  const [lightingAngle, setLightingAngle] = useState<number>(45);
  const [shadowSpread, setShadowSpread] = useState<number>(30);
  const [bgRemoved, setBgRemoved] = useState<boolean>(true);

  const presets = [
    { id: 'minimal', name: 'Studio Minimal', bg: 'bg-[#12141a]' },
    { id: 'neon', name: 'Cyber Neon', bg: 'bg-gradient-to-br from-[#090b14] via-[#101426] to-[#1c0f2b]' },
    { id: 'warm', name: 'Luxury Warm', bg: 'bg-gradient-to-br from-[#1b1512] via-[#221a15] to-[#141210]' },
  ];

  const handleToggleBg = () => {
    setIsProcessingAi(true);
    setTimeout(() => {
      setBgRemoved(!bgRemoved);
      setIsProcessingAi(false);
    }, 600);
  };

  const handleDegreeChange = (deg: number) => {
    setLightingAngle(deg);
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row min-h-[calc(100vh-120px)] bg-[#090a0d]">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
        <div className={`w-full max-w-2xl aspect-square rounded-3xl border border-white/[0.08] shadow-2xl relative flex items-center justify-center overflow-hidden transition-all duration-500 ${
          presets.find((p) => p.id === activePreset)?.bg
        }`}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40 transition-transform duration-300"
            style={{
              background: `radial-gradient(circle at ${50 + Math.cos(lightingAngle * (Math.PI / 180)) * 30}% ${50 + Math.sin(lightingAngle * (Math.PI / 180)) * 30}%, rgba(0,242,254,0.3) 0%, transparent 60%)`,
            }}
          />
          <img
            src={sourceAssetUrl}
            alt="Product Preview"
            className="max-w-[75%] max-h-[75%] object-contain relative z-10 transition-all duration-300"
            style={{
              filter: `drop-shadow(${Math.cos(lightingAngle * (Math.PI / 180)) * 15}px ${Math.sin(lightingAngle * (Math.PI / 180)) * 15}px ${shadowSpread}px rgba(0,0,0,0.8))`,
            }}
          />
          {isProcessingAi && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-20">
              <div className="w-10 h-10 border-2 border-[#00f2fe] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs font-mono text-[#00f2fe] mt-3">Synthesizing Neural Lighting...</span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-[#0c0e14] p-6 flex flex-col gap-6">
        <div>
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Wand2 className="w-4 h-4 text-[#00f2fe]" />
            AI 3D Staging Engine
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Automated neural cutout and photorealistic studio lighting rigs.
          </p>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Environment Preset
          </label>
          <div className="grid grid-cols-1 gap-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset.id)}
                className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  activePreset === preset.id
                    ? 'border-[#00f2fe] bg-[#00f2fe]/10 text-white shadow-[0_0_10px_rgba(0,242,254,0.15)]'
                    : 'border-white/[0.06] bg-white/[0.02] text-slate-400 hover:text-white'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-[#00f2fe]" />
              Lighting Azimuth ({lightingAngle}°)
            </label>
          </div>
          <input
            type="range"
            min="0"
            max="360"
            value={lightingAngle}
            onChange={(e) => handleDegreeChange(Number(e.target.value))}
            className="w-full accent-[#00f2fe] bg-white/10 rounded-lg h-1.5"
          />

          <div className="flex items-center justify-between pt-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#00f2fe]" />
              Shadow Softness ({shadowSpread}px)
            </label>
          </div>
          <input
            type="range"
            min="5"
            max="60"
            value={shadowSpread}
            onChange={(e) => setShadowSpread(Number(e.target.value))}
            className="w-full accent-[#00f2fe] bg-white/10 rounded-lg h-1.5"
          />
        </div>

        <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-3">
          <button
            onClick={handleToggleBg}
            className="w-full py-2.5 rounded-xl border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[#00f2fe]" />
            {bgRemoved ? 'Restore Background' : 'Remove Background (AI)'}
          </button>

          {onNavigateToExport && (
            <button
              onClick={onNavigateToExport}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#8b5cf6] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:opacity-95 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Send to Export Lab
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductStaging;
