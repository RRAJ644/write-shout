import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center space-x-3'>
      <Image
        src='/logo.png'
        alt='Logo'
        width={40}
        height={40}
        className='rounded-full shadow-md hover:shadow-lg transition-shadow'
      />
      <span className='text-lg sm:text-xl font-bold text-black dark:text-white'></span>
    </div>
  )
}

export default Logo
