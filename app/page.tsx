import About from '@/components/shared/About'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'
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
