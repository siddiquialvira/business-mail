'use client';

import React from 'react';

export default function CustomMailPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Custom Mail in India</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Put your name on every inbox - <strong>Power your brand with Custom Domain.</strong>
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <p>
            For many of us, email is a part of our daily communications. So, it's a responsibility to make sure that your new email address is unique and easy to remember.
          </p>
          <p>
            At Skynetiks Technologies, we offer a wide range of more than 100 domain names. Contact us today with your desired combination of user and domain name. Our team of experts will check and tell you if it's available and guide you through the process.
          </p>
          <p>
            A custom email domain can be used to create email addresses in the format <code>user@yourdomain.com</code>.
          </p>
        </section>

        {/* Customer Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Customers Benefit From:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Rapid response time</li>
            <li>✅ Experienced and top consultants</li>
            <li>✅ 24/7 Support</li>
            <li>✅ Telephonic, Video Call and Screen Sharing Support</li>
          </ul>
        </section>

        {/* Call To Action */}
        <section className="text-center mt-16">
          <p className="text-lg text-blue-700 font-semibold mb-4">Get a Call Back</p>
          <button className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">Request Now</button>
        </section>
      </div>
    </main>
  );
}