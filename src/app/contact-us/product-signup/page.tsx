'use client';

import React from 'react';

export default function ProductSignupPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Product <span className="text-blue-600">Sign Up</span></h1>
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Google Workspace Support</h2>
          <p className="mb-4">
            <strong>Skynetiks Technologies Pvt. Ltd</strong> is a <span className="text-green-600 font-semibold">Google Workspace</span> partner (Formerly known as G Suite).
            We provide Google Workspace, Domain registration, Web Hosting, Website Designing, SSL, and Google Cloud Platform services—helping businesses in India build a secure, scalable, and efficient digital presence.
          </p>
          <p className="mb-4">
            At Skynetiks Technologies, our team of experts provides end-to-end support, consultation, and seamless integration to ensure your business gets the most out of cloud technology.
            We don't just sell products—we consult, guide, and ensure everything runs smoothly so you can focus on growing your business.
          </p>
        </section>

        {/* Customer Benefits */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-green-600 mb-3">Our Customers benefits:</h3>
          <ul className="list-inside space-y-2">
            <li><strong>1.</strong> Rapid response time</li>
            <li><strong>2.</strong> Experienced and top consultants</li>
            <li><strong>3.</strong> 24/7 Support</li>
          </ul>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h3 className="text-xl font-bold mb-4">Product Sign Up</h3>
          <form className="space-y-6 max-w-xl">
            <div>
              <label className="block text-sm font-medium">Domain Name:</label>
              <input type="text" placeholder="e.g. www.tatamotors.com" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email:</label>
              <input type="email" placeholder="Your direct email" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone No:</label>
              <input type="tel" placeholder="Your direct phone number" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input type="text" placeholder="What should we call you?" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message:</label>
              <textarea placeholder="Your message" className="w-full border px-3 py-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
          </form>
        </section>
      </div>
    </main>
  );
}
