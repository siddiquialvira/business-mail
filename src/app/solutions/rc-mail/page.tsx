'use client';

import React from 'react';

export default function RCPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">ResellerClub Mail in India</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What makes ResellerClub Mail a hassle-free business email solution? It's <strong>affordability & reliability</strong> — a go-to choice for businesses and startups seeking professional email without technical headaches.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <p>
            Give your business a more professional look with ResellerClub Mail by branding your regular mail ID with your company domain.
          </p>
          <p>
            ResellerClub's business email services in India can transform your email system and help you build a distinct brand identity. Their private-labeled email hosting empowers your team with reliability and a personalized, professional email presence.
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

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">RC Mail Pricing and Plans</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                name: 'Business Mail',
                price: '₹1000 /yr',
                features: [
                  '5GB Disk Space',
                  '5 Email Accounts',
                  'Standard Support',
                  'Security & Management',
                  'IMAP/POP access in email',
                ],
              },
              {
                name: 'Enterprise Mail',
                price: '₹1500 /yr',
                features: [
                  '30GB Disk Space',
                  '10 Email Accounts',
                  'Standard Support',
                  'Security & Management',
                  'IMAP/POP access in email',
                ],
              },
            ].map((plan) => (
              <div key={plan.name} className="border rounded-lg shadow p-6 bg-white">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{plan.name}</h3>
                <p className="text-lg font-bold text-gray-800">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-6 inline-block text-center bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
                >
                  Sign Up
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ or Common Query */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">FAQ</h2>
          <div className="bg-blue-50 p-6 rounded shadow">
            <h3 className="font-semibold text-gray-800 mb-2">Can I migrate only specific folders or emails within a date range?</h3>
            <p className="text-gray-700">
              Yes. Skynetiks Technologies, an official Google Workspace Partner, offers flexible email migration services tailored to your needs—including selective folder and date-based migrations.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
