'use client'
import { useState, useCallback, useMemo } from 'react'
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu'
import { cn } from '@/lib/utils'
import { HOVERED_LINKS, MENU_ITEMS } from '@/constants/constants'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TiTimes } from 'react-icons/ti'
import Logo from '../independent/Logo'

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const renderSubmenuItems = useCallback(
    (type: string[]) =>
      type.map((link) => (
        <HoveredLink
          href={`/${MENU_ITEMS.PATH}/${link
            .toLocaleLowerCase()
            .split(' ')
            .join('-')}`}
          key={link}
        >
          {link}
        </HoveredLink>
      )),
    []
  )

  const renderMenuItems = useMemo(
    () =>
      MENU_ITEMS?.LINKS?.map((item) => (
        <MenuItem key={item} setActive={setActive} active={active} item={item}>
          <div className='flex flex-col space-y-4 text-lg'>
            {item === HOVERED_LINKS.SCRIPTS.ITEM &&
              renderSubmenuItems(HOVERED_LINKS.SCRIPTS.TYPES)}
            {item === HOVERED_LINKS.SERVICES.ITEM &&
              renderSubmenuItems(HOVERED_LINKS.SERVICES.TYPES)}
          </div>
        </MenuItem>
      )),
    [active, renderSubmenuItems]
  )

  const HireMeButton = (
    <button className='px-4 py-2 rounded-md border border-black bg-white text-black text-lg hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 w-max'>
      Hire Me!
    </button>
  )

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
              {openMenu ? <TiTimes size={25} /> : <GiHamburgerMenu size={25} />}
            </button>
          </div>
        </div>

        <div className='hidden md:flex space-x-6 items-center'>
          {renderMenuItems}
          {HireMeButton}
        </div>
      </Menu>

      {openMenu && (
        <div className='md:hidden flex space-x-3 h-full items-center justify-center rounded-[1rem] absolute top-20 inset-x-4 border border-transparent dark:bg-black dark:border-white/[0.2] bg-white'>
          {renderMenuItems}
          {HireMeButton}
        </div>
      )}
    </div>
  )
}

export default Navbar
