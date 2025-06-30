'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path)
      ? 'text-blue-700 font-semibold'
      : 'text-gray-700 hover:text-blue-700';
  };

  return (
    <>
      {/* First Navigation Bar - Top Header */}
      <nav className="bg-blue-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 text-sm">
            <a href="https://shrishtisoftech.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">shrishtisoftech.com</a>
            <a href="https://skyfunnel.ai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">skyfunnel.ai</a>
            <a href="https://skynetiks.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">skynetiks.com</a>
            <a href="https://businessoncloud.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">businessoncloud.in</a>
            <a href="https://hosttheweb.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">hosttheweb.in</a>
            <a href="https://webservicesindia.info" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">webservicesindia.info</a>
          </div>
        </div>
      </nav>

      {/* Second Navigation Bar - Main Header */}
      <nav className="bg-white shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo-business-mail-skynetiks.jpg"
                alt="Business Mail by Skynetiks"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <span>📞</span>
                <span>+91-9212378780</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>✉️</span>
                <span>enquiry@businessmail.co.in</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Third Navigation Bar - Menu */}
      <nav className="bg-gray-50 border-b py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <Link href="/" className={`${isActive('/')} font-medium transition-colors`}>HOME</Link>
            <Link href="/about" className={`${isActive('/about')} font-medium transition-colors`}>ABOUT</Link>

            {/* SOLUTIONS DROPDOWN */}
            <div className="relative group">
              <div className="flex flex-col items-center">
                <button className={`font-medium transition-colors ${isActive('/solutions')}`}>SOLUTIONS</button>
                {/* Invisible padding to maintain hover area */}
                <div className="absolute top-full h-2 w-full bg-transparent" />
              </div>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg z-50">
                <div className="flex flex-col min-w-[200px] text-sm text-gray-700">
                  {[
                    'google-workspace',
                    'zoho-mail',
                    'rc-mail',
                    'zimbra-mail',
                    'microsoft-365',
                    'rediffmail-pro',
                    'hosted-exchange',
                    'custom-mail',
                  ].map((slug) => (
                    <Link
                      key={slug}
                      href={`/solutions/${slug}`}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <div className="flex flex-col items-center">
                <button className={`font-medium transition-colors ${isActive('/services')}`}>SERVICES</button>
                {/* Invisible padding to maintain hover area */}
                <div className="absolute top-full h-2 w-full bg-transparent" />
              </div>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg z-50">
                <div className="flex flex-col min-w-[200px] text-sm text-gray-700">
                  <Link href="/services/tech-support" className="px-4 py-2 hover:bg-gray-100">Tech Support</Link>
                  <Link href="/services/mail-migration" className="px-4 py-2 hover:bg-gray-100">Mail Migration</Link>
                </div>
              </div>
            </div>

            {/* CONTACT US DROPDOWN */}
            <div className="relative group">
              <div className="flex flex-col items-center">
                <button className={`font-medium transition-colors ${isActive('/contact-us')}`}>CONTACT US</button>
                {/* Invisible padding to maintain hover area */}
                <div className="absolute top-full h-2 w-full bg-transparent" />
              </div>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-0 rounded-lg z-50">
                <div className="flex flex-col min-w-[220px] text-sm text-gray-700">
                  <Link href="/contact-us/product-signup" className="px-4 py-2 hover:bg-gray-100">Product Sign Up</Link>
                  <Link href="/contact-us/free-trial" className="px-4 py-2 hover:bg-gray-100">Free Trial</Link>
                  <Link href="/contact-us/call-back" className="px-4 py-2 hover:bg-gray-100">Get a Call Back</Link>
                  <Link href="/contact-us/support" className="px-4 py-2 hover:bg-gray-100">Ask for Support</Link>
                  <Link href="/contact-us/google-legacy" className="px-4 py-2 hover:bg-gray-100">Google Legacy Account Information</Link>
                  <Link href="/contact-us/faq" className="px-4 py-2 hover:bg-gray-100">FAQ</Link>
                </div>
              </div>
            </div>

            <Link href="/become-partner" className={`${isActive('/become-partner')} font-medium transition-colors`}>BECOME PARTNER</Link>
          </div>
        </div>
      </nav>
    </>
  );
}