'use client'
import React from 'react'
import { BackgroundLines } from '../ui/background-lines'

import { Spotlight } from '../ui/Spotlight'
import { TITLES } from '@/constants/constants'

const Hero = () => {
  return (
    <>
      <div className='h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>

        <div className='h-full w-full flex md:items-center md:justify-center bg-black/[0.8] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
          <Spotlight
            className='-top-40 left-0 md:left-60 md:-top-20'
            fill='white'
          />
          <div className=' p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0'>
            <h1 className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
              {TITLES?.HEADLINE}
            </h1>
            <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
              {TITLES?.SUB_HEADLINE}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
