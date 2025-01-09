import FilterBar from '@/components/shared/FilterBar'
import '../globals.css'
export const metadata = {
  title: 'Web Series',
  description: '',
}

export default function ScriptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='h-full flex justify-between gap-20 mt-36 py-10'>
      <FilterBar />
      {children}
    </section>
  )
}
