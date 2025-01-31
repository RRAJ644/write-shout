import { RECENT_CARDS } from '@/constants/constants'
import AuthorCard from '../ui/AuthorCard'
import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'

const CardGrid = () => {
  return (
    <div className='h-full w-full flex gap-y-10 items-center flex-col justify-center bg-black/[0.8] antialiased bg-grid-white/[0.02] relative overflow-hidden px-4 sm:px-12 xl:px-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-10 gap-x-6 xl:gap-x-2 place-items-center'>
        <ShootingStars />
        <StarsBackground />
        {RECENT_CARDS?.map((info, index) => (
          <AuthorCard key={index} info={info} />
        ))}
      </div>
    </div>
  )
}

export default CardGrid
