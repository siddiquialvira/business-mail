'use client';

import React from 'react';

export default function HostedExchangePage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Hosted Exchange in India</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What makes <strong>Hosted Exchange</strong> the Best Business Email Solution?
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <p>
            Hosted Exchange is a telecommunications service where a service provider offers Microsoft email boxes and storage space on a server for clients to host their data. The service provider takes care of managing the hosted data for its clients on the server.
          </p>
          <p>
            Hosted Exchange from Skynetiks Technologies offers the most reliable business email hosting with 24/7 support, a 99.99% uptime guarantee, and free migration.
          </p>
          <p>
            Our team of experts will migrate your data from any email platform with no downtime. We will work with you to develop a custom strategy that fits your business needs. It combines the power of Microsoft Exchange with the flexibility of cloud hosting, offering enterprise-grade features without the high cost of in-house servers.
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
