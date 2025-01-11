export default function TitleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='text-white border-2 border-yellow-500 mt-36'>
      {children}
    </main>
  )
}
