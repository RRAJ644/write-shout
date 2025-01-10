import DataScript from '@/components/shared/DataScript'
import InfoBar from '@/components/shared/InfoBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Script Details', // Optionally, dynamically set this using the title prop
  description: 'Detailed information about the selected script',
}

interface PageProps {
  params: {
    category: string
    title: string
  }
}

export default async function TitlePage({ params }: PageProps) {
  return (
    <section className='flex justify-between gap-x-20 border-2 border-green-500 w-full'>
      <InfoBar />
      <DataScript />
    </section>
  )
}
