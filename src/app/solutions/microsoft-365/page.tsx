'use client';

import React from 'react';

export default function Microsoft365Page() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Microsoft 365 in India</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Know why enterprises trust Microsoft 365 — <strong>proven track record, enterprise-grade security & compliance, AI-powered productivity, global reliability & uptime</strong>.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <p>
            Microsoft Office 365 email services provide a complete email solution that empowers your business through enhanced functionalities of Microsoft Exchange and cutting-edge Microsoft technologies for seamless collaboration.
          </p>
          <p>
            Office 365 offers hosted versions of Exchange Server, Skype for Business, Office Online, SharePoint, and Yammer — all packed into one robust suite to elevate your communication and teamwork.
          </p>
          <p>
            Skynetiks Technologies, a trusted Microsoft Office 365 partner, offers competitive pricing and expert support for implementing Office 365 solutions tailored to your business needs.
          </p>
        </section>

        {/* Customer Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Customers Benefit From:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Rapid response time</li>
            <li>✅ Experienced and top consultants</li>
            <li>✅ 24/7 Support</li>
            <li>✅ Telephonic, Video Call and Screen Sharing Support</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">FAQ</h2>
          <div className="bg-blue-50 p-6 rounded shadow">
            <h3 className="font-semibold text-gray-800 mb-2">How do I renew my Microsoft 365 subscription manually?</h3>
            <p className="text-gray-700">
              As an official Google Workspace and Microsoft partner, Skynetiks Technologies helps guide you through the manual renewal process, ensuring service continuity and data security without interruption.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-blue-600 text-center">Microsoft 365 Pricing and Plans</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border p-6 rounded shadow">
              <h3 className="text-lg font-bold mb-2">Business Basic - ₹1740 /Yr</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Remote access tools</li>
                <li>Web & mobile Office apps</li>
                <li>Teams, Exchange, OneDrive, SharePoint</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
            <div className="border p-6 rounded shadow">
              <h3 className="text-lg font-bold mb-2">Apps - ₹8220 /Yr</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Office apps across devices</li>
                <li>Outlook, Word, Excel, PowerPoint</li>
                <li>OneDrive storage</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
            <div className="border p-6 rounded shadow">
              <h3 className="text-lg font-bold mb-2">Business Standard - ₹9240 /Yr</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Full collaboration suite</li>
                <li>Email, Teams, SharePoint, Office apps</li>
                <li>Works across all devices</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
            <div className="border p-6 rounded shadow">
              <h3 className="text-lg font-bold mb-2">Business Premium - ₹21960 /Yr</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Everything in Standard +</li>
                <li>Advanced threat protection</li>
                <li>Device & identity management</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}