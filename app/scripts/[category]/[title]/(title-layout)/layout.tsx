export default function TitleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='text-white border-2 border-yellow-500 mt-36'>
      {children}
    </main>
  )
}
