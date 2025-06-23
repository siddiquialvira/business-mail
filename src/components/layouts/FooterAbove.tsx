'use client';

import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterAbove = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ready to Power Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            Ready to power your business with Google Workspace today!
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Sign Up
          </button>

          <h2 className="text-2xl font-bold mt-8">
            Experience it yourself - Get a free demo account now!
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Sign Up
          </button>
        </div>

        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">SKYNETIKS™</h3>
          <p className="text-gray-600">
            Stynetiks: A renowned Google Workspace reseller with over two decades of experience, 
            serving more than 5000 clients. Our expertise lies in proficiently setting up, deploying, 
            and seamlessly migrating Google Workspace tailored to your requirements.
          </p>

          <h4 className="font-medium mt-4">Find Us Now</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-pink-600"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-red-600"><MdEmail size={20} /></a>
          </div>
        </div>

        {/* Quick Links and Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/tech-support" className="hover:text-blue-600">Tech Support</Link></li>
              <li><Link href="/mail-migration" className="hover:text-blue-600">Mail Migration</Link></li>
              <li><Link href="/product-signup" className="hover:text-blue-600">Product Sign Up</Link></li>
              <li><Link href="/free-trial" className="hover:text-blue-600">For Free Trial</Link></li>
              <li><Link href="/callback" className="hover:text-blue-600">Get a Call Back</Link></li>
              <li><Link href="/support" className="hover:text-blue-600">Ask for Support</Link></li>
              <li><Link href="/legacy-account" className="hover:text-blue-600">Google legacy Account Info</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <h4 className="font-medium">Get In Touch</h4>
            <address className="not-italic text-gray-600 mt-2 space-y-2">
              <p>Tower B - 609 & 610, Lower Ground, Sec-152, Noida, (UP) 201305, India</p>
              <p>+91-92 23 7878</p>
              <p>support@businessmail.co.in</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAbove;
