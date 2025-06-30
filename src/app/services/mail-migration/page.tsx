'use client';

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function MailMigrationPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Banner */}
        <div className="mb-12 text-center">
          <Image 
            src="/Mail-migration.jpg" 
            alt="Mail Migration Banner" 
            width={1200} 
            height={400} 
            className="w-full rounded"
          />
          <h1 className="text-4xl font-bold mt-6">Mail <span className="text-blue-600">Migration</span></h1>
        </div>

        {/* Support Description */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Google Workspace Support</h2>
          <p className="mb-4">
            <strong>Skynetiks Technologies Pvt. Ltd</strong> is a <span className="text-green-600 font-semibold">Google Workspace</span> partner (Formerly known as G Suite). 
            We provide comprehensive Google Workspace mail migration support for businesses in India.
          </p>
          <p className="mb-4">
            Migrate your data to Google Workspace. Skynetiks Technologies, as a certified Google Workspace partner, delivers reliable, end-to-end mail migration services for businesses of all sizes. 
            Our experts migrate your entire email ecosystem – including inboxes, calendars, contacts, attachments, folders, and user permissions – from platforms like Microsoft 365, Exchange, or other legacy systems to Google Workspace. 
            We ensure zero data loss, minimal downtime, and full post-migration support to keep your team productive every step of the way.
          </p>
        </section>

        {/* Customer Benefits */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-green-600 mb-3">Our Customers benefits:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>1.</strong> Rapid response time</li>
            <li><strong>2.</strong> Google Workspace migration (Data and Email Migration)</li>
            <li><strong>3.</strong> Experienced and top consultants for Google Workspace</li>
          </ul>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h3 className="text-xl font-bold mb-4">Contact Form</h3>
          <form className="space-y-6 max-w-xl">
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input type="text" placeholder="How would you want us to call you?" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email:</label>
              <input type="email" placeholder="Please fill in your direct email you always access" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone No:</label>
              <input type="tel" placeholder="Thanks for sharing your direct number." className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message:</label>
              <textarea placeholder="Message" className="w-full border px-3 py-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
          </form>
        </section>
      </div>
    </main>
  );
}
