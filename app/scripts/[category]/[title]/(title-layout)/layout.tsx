export default function TitleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='mt-36 min-h-screen h-full w-full border border-yellow-500'>
      {children}
    </main>
  )
}
