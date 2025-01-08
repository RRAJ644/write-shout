import About from '@/components/shared/About'
import Hero from '@/components/shared/Hero'
import RecentStories from '@/components/shared/RecentStories'
import StoryBoard from '@/components/shared/StoryBoard'

export default function Home() {
  return (
    <>
      <Hero />
      <RecentStories />
      <About />
      <StoryBoard />
    </>
  )
}
