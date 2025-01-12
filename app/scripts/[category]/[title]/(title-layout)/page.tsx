import { Tabs } from '@/components/shared/Tabs'
import { tabs } from '@/constants/constants'
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

  const tabContent = {
    script: <div>Details about the script.</div>,
    characters: <div>Information about characters.</div>,
    plot: <div>Plot description goes here.</div>,
    summary: <div>Summary of the script.</div>,
    writers: <div>Details about the writers.</div>,
  }

  return (
    <section className='flex flex-col gap-6 p-6 min-h-screen w-full'>
      <Tabs
        tabs={tabs}
        initialTab='script'
      >
        {tabContent}
      </Tabs>
    </section>
  )
}
