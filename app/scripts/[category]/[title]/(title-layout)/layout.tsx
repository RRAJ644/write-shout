
export const metadata = {
  title: 'Script Details',
  description: 'Detailed information about the selected script',
}

export default function TitleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className='text-white border-2'>
    <h2>
      Hello
    </h2>
    {children}</section>
}
