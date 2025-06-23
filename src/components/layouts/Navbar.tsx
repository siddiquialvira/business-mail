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
            <Link href="/solutions" className={`${isActive('/solutions')} font-medium transition-colors`}>SOLUTIONS</Link>
            <Link href="/services" className={`${isActive('/services')} font-medium transition-colors`}>SERVICES</Link>
            <Link href="/contact-us" className={`${isActive('/contact-us')} font-medium transition-colors`}>CONTACT US</Link>
            <Link href="/become-partner" className={`${isActive('/become-partner')} font-medium transition-colors`}>BECOME PARTNER</Link>
          </div>
        </div>
      </nav>
    </>
  );
}