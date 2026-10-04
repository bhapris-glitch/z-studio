/**
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
    setNotificationText(`Loaded & validated ${newAsset.fileName}`);
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
          <span>© 2026 Zavoka Neural Systems</span>
        </div>
      </footer>

    </div>
  );
};

export default App;
