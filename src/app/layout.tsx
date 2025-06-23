// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layouts/Navbar'
import FooterAbove from '@/components/layouts/FooterAbove'
import FooterBelow from '@/components/layouts/FooterBelow'

export const metadata: Metadata = {
  title: 'Business Mail Solutions | Secure & Scalable',
  description: 'Get smart email, hosting, and cloud services with expert support tailored to your business needs.',
  keywords: ['Business Email', 'Hosting', 'Cloud Services', 'Secure Mail', 'Tech Solutions'],
  authors: [{ name: 'Your Company Name', url: 'https://yourwebsite.com' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Business Mail Solutions',
    description: 'Reliable and intelligent communication solutions for your company.',
    url: 'https://yourwebsite.com',
    siteName: 'Business Mail Solutions',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <FooterAbove />
        <FooterBelow />
      </body>
    </html>
  )
}
