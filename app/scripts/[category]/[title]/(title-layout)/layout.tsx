// import '../../../../globals.css'
export default function TitleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='text-white border-2 border-yellow-500 flex justify-between min-h-screen mt-36 '>
      {children}
    </main>
  )
}
