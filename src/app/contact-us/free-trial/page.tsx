'use client';

import React from 'react';

export default function FreeTrialPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Get A <span className="text-blue-600">Free Trial</span></h1>
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Sign Up for Google for Workspace Free Trial</h2>
          <p className="mb-4">
            Welcome to the Web Page of <strong>Skynetiks Technologies</strong> – Google for Workspace Partner in India.
            We thank you for your interest shown in signing up for a free trial for <span className="text-green-600 font-semibold">Google for Workspace</span> (formerly known as Google Apps for Business & GSuite).
          </p>
          <p className="mb-4">
            <strong>IT IS GOOD TO TRY BEFORE YOU BUY!</strong><br />
            Please fill in your details below and our Google Support Agent will ensure to activate your services.
          </p>
          <p className="mb-4">
            <strong>Support Contacts:</strong> <br />
            <span className="text-blue-600">googletrials@ssi.bz</span> &nbsp; | &nbsp; <span className="text-blue-600">Ph: +91 8882460460</span>
          </p>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h3 className="text-xl font-bold mb-4">Free Trial Sign-Up Form</h3>
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

        {/* Other Topics */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold text-green-600 mb-3">Other Topics:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Renewal of Google Workspace, GSuite, Google Apps</li>
            <li>Paid to TimesGmoney through NEFT to Google but not reflecting</li>
            <li>Online Payment Failed for Google for Workspace</li>
            <li>5 Reasons to Buy Google for Workspace through a reseller</li>
            <li>Google Workspace account errors</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
