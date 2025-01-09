import FilterBar from '@/components/shared/FilterBar'

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
    <section className=''>
      <FilterBar />
      {children}
    </section>
  )
}
