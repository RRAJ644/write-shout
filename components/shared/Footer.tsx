'use client'

import { MAIL } from '@/constants/constants'
import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: 'https://twitter.com',
      label: 'Twitter',
      icon: <FaTwitter size={25} />,
    },
    {
      href: 'https://instagram.com',
      label: 'Instagram',
      icon: <FaInstagram size={25} />,
    },
    {
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      icon: <FaLinkedin size={25} />,
    },
  ]

  return (
    <footer className='bg-black text-white mt-14 h-full container mx-auto py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='flex flex-col max-lg:items-center'>
            <h2 className='text-xl font-semibold mb-4'>About Me</h2>
            <p className='text-sm md:text-base text-gray-400 leading-relaxed max-lg:max-w-sm max-lg:text-center'>
              I'm a passionate screenwriter who crafts stories that resonate
              across screens—whether for film, TV, or digital media. Let’s
              collaborate to create captivating narratives.
            </p>
            <p className='mt-4'>
              Have a project?{' '}
              <a
                className='underline hover:text-gray-200'
                href={`mailto:${MAIL}`}
              >
                Mail me!
              </a>
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <h2 className='text-lg xl:text-xl font-semibold mb-4'>Quick Links</h2>
            <ul className='space-y-3 '>
              {['Portfolio', 'Contact', 'Services'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLocaleLowerCase()}`}
                    className='text-sm md:text-base text-gray-400 hover:text-gray-200'
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col max-lg:items-center'>
            <h2 className='text-lg xl:text-xl font-semibold mb-4'>Connect with Me</h2>
            <div className='flex space-x-4 items-center'>
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit my ${label}`}
                  className='text-gray-400 hover:text-gray-200 text-xl md:text-3xl'
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-700 mt-8 pt-4 text-center'>
          <p className='text-sm text-gray-500'>
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
