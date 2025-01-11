import DataScript from '@/components/shared/DataScript'
import InfoBar from '@/components/shared/InfoBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Script Details',
  description: 'Detailed information about the selected script',
}

interface PageProps {
  params: Promise<{
    category: string
    title: string
  }>
}

export default async function TitlePage({ params }: PageProps) {
  const resolvedParams = await params

  return (
    <>
      <InfoBar />
      <DataScript />
    </>
  )
}
