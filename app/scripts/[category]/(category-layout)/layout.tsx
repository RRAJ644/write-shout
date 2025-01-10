import FilterBar from '@/components/shared/FilterBar'

export const metadata = {
  title: 'Scripts Category',
  description: '',
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='min-h-screen flex justify-between gap-20 mt-36 py-10'>
      <FilterBar />
      {children}
    </section>
  )
}
