'use client'

import React, { useState } from 'react'
import TabButton from '../independent/TabButton'

interface TabsProps {
  tabs: string[]
  initialTab?: string
  onTabChange?: (activeTab: string) => void
  children: { [key: string]: React.ReactNode }
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  initialTab,
  onTabChange,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab || tabs[0])

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    if (onTabChange) onTabChange(tab)
  }

  return (
    <div>
      <div className='flex gap-4 pb-2 items-center justify-center'>
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            label={tab}
            onClick={() => handleTabClick(tab)}
            activeTab={activeTab}
          />
        ))}
      </div>

      <div className='p-6 w-full h-full'>
        {children[activeTab]}
      </div>
    </div>
  )
}
