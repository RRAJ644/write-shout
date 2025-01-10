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

export default function TitlePage({ params }: PageProps) {
  const { category, title } = params

  return <></>
}
