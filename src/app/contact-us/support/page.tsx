'use client';

import React from 'react';

export default function AskForSupportPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Ask For <span className="text-blue-600">Support</span></h1>
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Google Workspace Support</h2>
          <p className="mb-4">
            <strong>Skynetiks Technologies Pvt. Ltd</strong> is a <span className="text-green-600 font-semibold">Google Workspace</span> partner (Formerly known as G Suite).
            We provide Google Workspace, Domain Registration, Web Hosting, Website Designing, SSL, and Google Cloud Platform services for businesses in India.
          </p>
          <p className="mb-4">
            At Skynetiks Technologies, we offer complete managed IT solutions for startups, entrepreneurs, freelancers, and small to medium-size businesses across India—helping them go digital with a full suite of professional support.
            You get a personalized experience for Google Workspace and other services including setup, migration, plan selection, troubleshooting, and more—so you can focus on your business while we handle the tech.
          </p>
        </section>

        {/* Customer Benefits */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-green-600 mb-3">Our Customers benefits:</h3>
          <ul className="list-inside space-y-2">
            <li><strong>1.</strong> Rapid response time</li>
            <li><strong>2.</strong> Experienced and top consultants</li>
            <li><strong>3.</strong> 24/7 Support</li>
            <li><strong>4.</strong> Telephonic, Video Call and Screen Sharing Support</li>
          </ul>
        </section>

        {/* Support Form */}
        <section className="mb-16">
          <h3 className="text-xl font-bold mb-4">Ask For Support</h3>
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
              <textarea placeholder="Message" className="w-full border px-3 py-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
          </form>
        </section>
      </div>
    </main>
  );
}
