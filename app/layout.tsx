import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import FilterBar from '@/components/shared/FilterBar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Write-Shout',
  description: 'Writing Things To Be Seen',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:text-white text-black`}
      >
        <main className='w-full min-h-screen h-full flex flex-col justify-between'>
          {children}
          <Navbar />
          <Footer />
        </main>
      </body>
    </html>
  )
}
