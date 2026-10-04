/**
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
