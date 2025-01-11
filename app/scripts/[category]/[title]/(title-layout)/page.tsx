import DataScript from '@/components/shared/DataScript'
import InfoBar from '@/components/shared/InfoBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Script Details',
  description: 'Detailed information about the selected script',
}

interface PageProps {
  params:
    | {
        category: string
        title: string
      }
    | Promise<{
        category: string
        title: string
      }>
}

export default async function TitlePage({ params }: PageProps) {
  const resolvedParams = await params // Resolve params if it's a Promise

  return (
    <section className='flex justify-between gap-x-20 border-2 border-green-500 w-full'>
      <InfoBar />
      <DataScript />
    </section>
  )
}
