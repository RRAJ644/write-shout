import React, { memo } from 'react'
import { WobbleCard } from '../ui/wobble-card'
import { Vortex } from '../ui/vortex'

import Image from 'next/image'
import { TITLES } from '@/constants/constants'

interface StoryCardProps {
  title: string
  description: string
  imageSrc: string
  containerClassName: string
}

const StoryCard = memo(
  ({ title, description, imageSrc, containerClassName }: StoryCardProps) => (
    <WobbleCard containerClassName={containerClassName}>
      <div className='max-w-xs'>
        <h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
          {title}
        </h2>
        <p className='mt-4 text-left text-base/6 text-neutral-200'>
          {description}
        </p>
      </div>
      {/* <Image
        src={imageSrc}
        width={500}
        height={500}
        alt='linear demo image'
        className='absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl'
        layout='intrinsic'
        priority
      /> */}
    </WobbleCard>
  )
)

const StoryBoard = () => {
  const cardData = [
    {
      title: 'Gippity AI powers the entire universe',
      description:
        'With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.',
      imageSrc: '',
      containerClassName:
        'col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]',
    },
    {
      title: 'No shirt, no shoes, no weapons.',
      description:
        'If someone yells “stop!”, goes limp, or taps out, the fight is over.',
      imageSrc: '',
      containerClassName: 'col-span-1 min-h-[300px]',
    },
    // {
    //   title:
    //     'Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!',
    //   description:
    //     'With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.',
    //   imageSrc: '',
    //   containerClassName:
    //     'col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]',
    // },
    {
      title:
        'Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!',
      description:
        'With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.',
      imageSrc: '',
      containerClassName: 'col-span-1 min-h-[300px]',
    },
    {
      title: 'Gippity AI powers the entire universe',
      description:
        'With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.',
      imageSrc: '',
      containerClassName:
        'col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]',
    },
  ]

  return (
    <>
      <Vortex
        backgroundColor='black'
        className='flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full'
      >
        <div className='w-full container mx-auto flex flex-col items-center py-10 px-4 md:px-8'>
          <h2 className='max-w-7xl text-lg md:text-4xl mb-4 text-black dark:text-white'>
            {TITLES?.STORY_TITLE}
          </h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full'>
          {cardData.map((card, index) => (
            <StoryCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              containerClassName={card.containerClassName}
            />
          ))}
        </div>
      </Vortex>
    </>
  )
}

export default StoryBoard
