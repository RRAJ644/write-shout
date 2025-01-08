'use client'
import React from 'react'
import { Spotlight } from '../ui/Spotlight'
import { TITLES } from '@/constants/constants'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
import Button from '../independent/Button'

const Hero = () => {
  const words = React.useMemo(() => {
    const headlineWords = TITLES?.HEADLINE?.split(' ') || []
    return headlineWords.map((word, index) => ({
      text: word,
      className:
        index === headlineWords.length - 1
          ? 'text-neutral-100 dark:text-neutral-100'
          : '',
    }))
  }, [TITLES?.HEADLINE])

  return (
    <div className='min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>

      <div className='flex flex-col items-center justify-center w-full antialiased bg-black/[0.8] bg-grid-white/[0.02] relative overflow-hidden h-screen'>
        <Spotlight
          className='-top-40 max-sm:top-20 left-0 md:left-60 md:-top-20'
          fill='white'
        />
        <TypewriterEffectSmooth words={words} />

        <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
          {TITLES?.SUB_HEADLINE}
        </p>

        <div className='space-x-10 my-8'>
          <Button title='Connect With Me!' />
          <Button title='Read Me More!' />
        </div>
      </div>
    </div>
  )
}

export default Hero
