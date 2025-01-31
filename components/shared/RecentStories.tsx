'use client'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
import CardGrid from './CardGrid'
import { TITLES } from '@/constants/constants'

const RecentStories = () => {
  const words = TITLES?.RECENT_STORIES.split(' ').map((word, index) => ({
    text: word,
    className:
      index === TITLES?.RECENT_STORIES.split(' ').length - 1
        ? 'text-blue-500 dark:text-blue-500'
        : '',
  }))
  return (
    <div className='flex w-full mx-auto container flex-col items-center justify-center'>
      <h2 className='max-w-7xl text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-6 md:mb-10 text-black dark:text-white'>
        {TITLES?.RECENT_STORIES}
      </h2>
      <CardGrid />
    </div>
  )
}

export default RecentStories
