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
    Script: <div>Details about the script.</div>,
    Characters: <div>Information about characters.</div>,
    Plot: <div>Plot description goes here.</div>,
    Summary: <div>Summary of the script.</div>,
    Writers: <div>Details about the writers.</div>,
  }

  return (
    <section className='flex flex-col gap-6 p-6 min-h-screen w-full'>
      <Tabs tabs={tabs} initialTab='Script'>
        {tabContent}
      </Tabs>
    </section>
  )
}

// const scripts = [

//   {
//     metaData: {
//       title: ''
//       description: ''
//       defaultBackground: ''
//       hoverBackground: ''
//     },
//     mainData:{
//       script: ''
//       characters : ''
//       plot: ''
//       summary:''
//       writers: ''
//     }
//   },

// ]
