import { SCRIPT_DATA } from '@/constants/constants'
import { extractTabs } from '@/lib/utils'
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
    <section className='flex gap-6 p-6 min-h-screen border-2 w-full'></section>
  )
}
