import Hero from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'
import RecentStories from '@/components/shared/RecentStories'
import AuthorCard from '@/components/ui/AuthorCard'

export default function Home() {
  return (
    <section className=''>
      <Navbar />
      <Hero />
      <RecentStories />
    </section>
  )
}
