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
  // const { category, title } = params
  const paramsVal = await params
  console.log(paramsVal, '====params')

  return <></>
}
