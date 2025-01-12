import DataScript from '@/components/shared/DataScript'
import InfoBar from '@/components/shared/InfoBar'
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
  const tabs = extractTabs(SCRIPT_DATA)
  const script = SCRIPT_DATA[0].script

  return (
    <section className='flex gap-6 p-6 min-h-screen border-2 w-full'>
      <InfoBar tabs={tabs} />
      <div className='border-l h-full border-neutral-300 border rounded-lg'></div>
      <DataScript script={script} />
    </section>
  )
}
