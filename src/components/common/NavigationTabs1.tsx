th tactile spring active pill
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
