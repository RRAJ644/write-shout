export default function TitleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='mt-36 min-h-screen h-full w-full dark:text-white text-black flex justify-between'>
      {children}
    </main>
  )
}
