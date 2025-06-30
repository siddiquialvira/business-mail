'use client';

import React from 'react';

export default function RediffMailProPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Rediffmail Pro in India</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rediffmail Pro - The most <strong>economical & affordable</strong> email solution.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <p>
            Rediffmail Pro is a business email solution which provides 1GB of storage with every email address. It is designed to cater all the needs of small to enterprise-scale businesses. Rediffmail Pro provides all the features for live collaboration, chats and email communications between multiple users.
          </p>
          <p>
            Rediffmail offers fast and secure webmail services for your business domain, along with a wide range of features to enhance collaboration and productivity.
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

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">FAQ</h2>
          <div className="bg-blue-50 p-6 rounded shadow">
            <h3 className="font-semibold text-gray-800 mb-2">How do I buy or renew a Rediffmail Pro subscription online?</h3>
            <p className="text-gray-700">
              As an official Google Workspace partner in Noida, Skynetiks Technologies provides complete support for Rediffmail Pro subscription purchases and renewals, helping businesses manage their email infrastructure seamlessly.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-blue-700 text-center">Rediffmail Pro Pricing and Plans</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border p-6 rounded shadow">
              <h3 className="text-lg font-bold mb-2">Basic - ₹270 /Yr</h3>
              <ul className="list-disc list-inside mb-4">
                <li>1 GB Storage Space</li>
                <li>Spam & Virus Protection</li>
                <li>Data Localization</li>
                <li>Common Login Page</li>
              </ul>
              <button className="bg-blue-700 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
            <div className="border p-6 rounded shadow">
              <h3 className="text-lg font-bold mb-2">Most Popular - ₹510 /Yr</h3>
              <ul className="list-disc list-inside mb-4">
                <li>10 GB Storage Space</li>
                <li>Spam & Virus Protection</li>
                <li>Data Localization</li>
                <li>Common Login Page</li>
              </ul>
              <button className="bg-blue-700 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
            <div className="border p-6 rounded shadow">
              <h3 className="text-lg font-bold mb-2">Advanced - ₹850 /Yr</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Everything in Most Popular +</li>
                <li>Custom Branding</li>
                <li>Rcloud</li>
                <li>DMARC</li>
              </ul>
              <button className="bg-blue-700 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}