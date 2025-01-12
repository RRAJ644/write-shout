import { SCRIPT_DATA, ScriptData } from '@/constants/constants'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const extractTabs = (data: ScriptData[]): string[] => {
  const tabs: string[] = []

  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      const section = item[key as keyof ScriptData]

      if ('tab' in section) {
        tabs.push(section.tab)
      }
    })
  })

  return tabs
}
