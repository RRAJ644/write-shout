export default function TitleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className='border-2 mt-36 min-h-screen flex gap-x-16'>{children}</main>
}
