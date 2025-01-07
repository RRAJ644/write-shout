'use client'
import CardGrid from './CardGrid'
import { TITLES } from '@/constants/constants'

const RecentStories = () => {
  return (
    <div className='flex w-full mx-auto container flex-col items-center justify-center'>
      <h2 className='text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-10'>
        {TITLES?.RECENT_STORIES}
      </h2>
      <CardGrid />
    </div>
  )
}

export default RecentStories
