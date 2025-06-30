'use client';

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function TechSupportPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Banner */}
        <div className="mb-12 text-center">
          <Image 
            src="/Tech-support.jpg" 
            alt="Tech Support Banner" 
            width={1200} 
            height={400} 
            className="w-full rounded"
          />
          <h1 className="text-4xl font-bold mt-6">Tech <span className="text-blue-600">Support</span>
          </h1>
        </div>

        {/* Support Description */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Google Workspace Support</h2>
          <p className="mb-4">
            <strong>Skynetiks Technologies Pvt. Ltd</strong> is a <span className="text-green-600 font-semibold">Google Workspace</span> partner (Formerly known as G Suite).
            We provide comprehensive support for businesses in India that go <strong>beyond just selling licenses</strong>.
          </p>
          <p className="mb-4">
            We offer account setup & onboarding, email & data migration services, SLA-based support, admin console management,
            ticket-based or phone/email/chat support, security & compliance management, and Google escalation services.
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
