'use client'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import { Menu, MenuItem } from '../ui/navbar-menu'
import { cn } from '@/lib/utils'
import { MENU_ITEMS } from '@/constants/constants'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TiTimes } from 'react-icons/ti'
import Logo from '../independent/Logo'

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const renderMenuItems = () =>
    MENU_ITEMS?.map((item) => (
      <MenuItem key={item} setActive={setActive} active={active} item={item}>
        {item}
      </MenuItem>
    ))

  return (
    <div
      className={cn(
        'absolute top-10 inset-x-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50',
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className='flex items-center justify-between w-full'>
          <Logo />

          <div className='flex md:hidden'>
            <button
              className='text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300'
              aria-label='Toggle menu'
              onClick={() => setOpenMenu(!openMenu)}
            >
              {!openMenu ? (
                <GiHamburgerMenu size={25} />
              ) : (
                <TiTimes size={25} />
              )}
            </button>
          </div>
        </div>

        <div className='hidden md:flex space-x-6'>{renderMenuItems()}</div>
      </Menu>

      {openMenu && (
        <div className='md:hidden flex space-x-3 h-full items-center justify-center rounded-[1rem] absolute top-20 inset-x-4 border border-transparent dark:bg-black dark:border-white/[0.2] bg-white'>
          {renderMenuItems()}
        </div>
      )}
    </div>
  )
}

export default Navbar
