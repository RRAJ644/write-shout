'use client'

import { cn } from '@/lib/utils'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[]
  className?: string
  cursorClassName?: string
}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        { opacity: 1, width: 'fit-content' },
        { duration: 0.3, delay: stagger(0.1), ease: 'easeInOut' }
      )
    }
  }, [isInView, animate])

  return (
    <div
      ref={scope}
      className={cn(
        'text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center',
        className
      )}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block">
          {word.text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn('text-white opacity-0', word.className)}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className={cn(
          'inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500',
          cursorClassName
        )}
      />
    </div>
  )
}

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[]
  className?: string
  cursorClassName?: string
}) => {
  return (
    <div className={cn('flex space-x-1', className)}>
      <motion.h1
        className="overflow-hidden pb-2"
        initial={{ width: '0%' }}
        whileInView={{ width: 'fit-content' }}
        transition={{ duration: 1.5, ease: 'linear', delay: 0.5 }}
      >
        <div className="text-xs sm:text-base md:text-2xl lg:text-4xl xl:text-5xl font-bold whitespace-nowrap">
          {words.map((word, idx) => (
            <span key={idx} className="inline-block">
              {word.text.split('').map((char, index) => (
                <span key={index} className={cn('text-white', word.className)}>
                  {char}
                </span>
              ))}
              &nbsp;
            </span>
          ))}
        </div>
      </motion.h1>
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className={cn(
          'block rounded-sm w-[4px] h-4 sm:h-6 xl:h-14 bg-blue-500',
          cursorClassName
        )}
      />
    </div>
  )
}
