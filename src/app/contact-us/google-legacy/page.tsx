'use client';

import React from 'react';
import Link from 'next/link';
import { Info, Lightbulb, Phone, Mail, Newspaper } from 'lucide-react';

export default function GoogleLegacyPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Resolve <span className="text-blue-600">Legacy G Suite</span> Account Errors
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            Stop using unsupported legacy G Suite accounts — get expert help to migrate and restore access.
          </p>
        </div>

        {/* What You Need to Know */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Info className="text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-600">What You Need to Know</h2>
          </div>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>Legacy G Suite is discontinued:</strong> These accounts are no longer supported and require migration to Google Workspace.</li>
            <li><strong>Common issues:</strong> Account lockouts, billing problems, email errors, and admin panel inaccessibility.</li>
            <li><strong>Recommended action:</strong> Start your data migration or fix access errors with guided help.</li>
            <li>
              👉 <Link href="/services/mail-migration" className="text-blue-600 underline">Click here for Mail Migration Support</Link>
            </li>
          </ul>
        </section>

        {/* How We Help */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="text-green-600" />
            <h2 className="text-2xl font-semibold text-green-600">How Skynetiks Can Help You</h2>
          </div>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>One-on-one assistance to fix Legacy account errors</li>
            <li>Full migration of emails, calendars, and data to Google Workspace</li>
            <li>Help with admin access, billing recovery, and setup guidance</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Phone className="text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-600">Need Immediate Support?</h2>
          </div>
          <p className="mb-2 text-gray-700">
            <Mail className="inline w-4 h-4 mr-2 text-gray-600" />
            Email us at: <a href="mailto:enquiry@ssi.bz" className="text-blue-600 underline">enquiry@ssi.bz</a>
          </p>
          <p className="text-gray-700">
            <Phone className="inline w-4 h-4 mr-2 text-gray-600" />
            Call our support team: <span className="font-semibold">+91 92 123 78780</span>
          </p>
        </section>

        {/* Stay Informed */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Newspaper className="text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-600">Stay Informed</h2>
          </div>
          <p className="text-gray-700">
            Stay updated with the latest Google announcements, changes, and policies related to Legacy G Suite accounts and Workspace migration.
          </p>
        </section>

        {/* Contact Form */}
        <section>
          <h3 className="text-xl font-bold mb-4">Legacy Account Assistance Form</h3>
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
