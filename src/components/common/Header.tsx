/**
 * Zavoka Studio - Global Persistent Application Header
 * Path: src/components/common/Header.tsx
 * Features: Brand Logomark, 8K Neural Status, Quick Upload Action, User Avatar
 */
import React from 'react';
import { UserProfile, ActiveTabId } from '../../types';
import { Zap, UploadCloud } from 'lucide-react';

interface HeaderProps {
  userProfile: UserProfile;
  onOpenUploadModal: () => void;
  activeTab?: ActiveTabId;
}

export const Header: React.FC<HeaderProps> = ({
  userProfile,
  onOpenUploadModal,
}) => {
  return (
    <header className="h-16 border-b border-white/[0.08] bg-[#090a0d]/90 backdrop-blur-xl px-4 sm:px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f2fe] to-[#8b5cf6] p-[1.5px] shadow-[0_0_15px_rgba(0,242,254,0.35)]">
          <div className="w-full h-full bg-[#0b0d11] rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#8b5cf6] text-base tracking-tighter">
            Z
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-white text-base">Zavoka</span>
            <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-gradient-to-r from-[#00f2fe] to-[#8b5cf6] text-black">
              {userProfile.tier}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]"></span>
            8K NEURAL ACTIVE
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onOpenUploadModal}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/30 font-medium text-xs sm:text-sm transition-all shadow-[0_0_12px_rgba(0,242,254,0.15)] cursor-pointer"
        >
          <UploadCloud className="w-4 h-4" />
          <span>Upload</span>
        </button>

        <div className="flex items-center gap-2.5 pl-2 border-l border-white/[0.08]">
          <img
            src={userProfile.avatarUrl}
            alt={userProfile.name}
            className="w-8 h-8 rounded-full border border-white/20 object-cover"
          />
          <span className="hidden sm:inline text-xs font-medium text-slate-300">
            {userProfile.name}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
