'use client';
import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <div className="flex gap-x-[10px] items-center justify-center">
        {tabs.map((tab, index) => {
          const baseStyle =
            'py-[8px] px-4 text-sm max-md:text-[10px] font-medium text-[14px] font-semibold rounded-[4px] transition-all duration-300 ease-in-out';

          const hoverStyle =
            index === 0
              ? 'hover:bg-[#ff4d4d] hover:text-white'
              : index === 1
              ? 'hover:bg-[#434ba1] hover:text-white'
              : 'hover:bg-[#1ac958] hover:text-white';

          const activeStyle =
            index === 0
              ? 'bg-[#ff4d4d] text-white'
              : index === 1
              ? 'bg-[#434ba1] text-white'
              : 'bg-[#1ac958] text-white';

          const inactiveStyle =
            index === 0
              ? 'bg-[#feeeee] text-[#ff4d4d]'
              : index === 1
              ? 'bg-[#ebedfb] text-[#434ba1]'
              : 'bg-[#e3f8eb] text-[#1ac958]';

          return (
            <button
              key={tab.id}
              className={`${baseStyle} ${
                activeTab === tab.id ? activeStyle : inactiveStyle
              } ${hoverStyle}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
