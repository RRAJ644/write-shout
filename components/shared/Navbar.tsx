'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, MenuItem } from '../ui/navbar-menu'
import { cn } from '@/lib/utils'
import { MENU_ITEMS } from '@/constants/constants'

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn('fixed top-6 inset-x-0 max-w-7xl mx-auto', className)}>
      <Menu setActive={setActive}>
        <div className='flex items-center space-x-3'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={40}
            height={40}
            className='rounded-full shadow-md'
          />
          <span className='text-xl font-bold text-black dark:text-white'>
            Write-Screen
          </span>
        </div>

        <div className='flex space-x-6 justify-center items-center'>
          {MENU_ITEMS?.map((item) => (
            <MenuItem
              key={item}
              setActive={setActive}
              active={active}
              item={item}
            >
              {item}
            </MenuItem>
          ))}

          <button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
            Shimmer
          </button>
        </div>
      </Menu>
    </div>
  )
}

export default Navbar
