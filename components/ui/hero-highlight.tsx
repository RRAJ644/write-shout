'use client'
import { cn } from '@/lib/utils'
import { useMotionValue, motion, useMotionTemplate } from 'framer-motion'
import React from 'react'
import { ShootingStars } from './shooting-stars'
import { StarsBackground } from './stars-background'

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return
    let { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <div
      className={cn(
        'relative h-full flex items-center bg-white dark:bg-black justify-center w-full group',
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Background dots */}
      {/* <div className='absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none' /> */}
      <ShootingStars />
      <StarsBackground />
      {/* <motion.div
        className='pointer-events-none bg-dot-thick-gray-400 dark:bg-dot-thick-gray-600 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      /> */}

      {/* Content */}
      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  )
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100% 100%',
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        `relative inline-block p-8 rounded-lg bg-gradient-to-r from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800`,
        className
      )}
    >
      {children}
    </motion.span>
  )
}
