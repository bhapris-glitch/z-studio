/**
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
import { ActiveTabId } from '../../types';
import { Sparkles, Box, DownloadCloud } from 'lucide-react';

interface NavigationTabsProps {
  activeTab: ActiveTabId;
  onTabChange: (tabId: ActiveTabId) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: 'enhance' as ActiveTabId, label: 'Super HD & Filters', icon: Sparkles },
    { id: 'product-ai' as ActiveTabId, label: 'Product AI Studio', icon: Box },
    { id: 'export' as ActiveTabId, label: 'Export & Resolution Lab', icon: DownloadCloud },
  ];

  return (
    <div className="border-b border-white/[0.08] bg-[#0c0e13]/95 px-4 sm:px-8 py-2.5 flex items-center justify-center sm:justify-start gap-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-[#00f2fe]/20 to-[#8b5cf6]/20 text-white border border-[#00f2fe]/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-[#00f2fe]' : 'text-slate-400'}`} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default NavigationTabs;
