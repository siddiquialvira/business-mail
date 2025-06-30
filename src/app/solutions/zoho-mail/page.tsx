'use client';

import React from 'react';
import {
    Filter,
    Moon,
    Search,
    Trash2,
    Keyboard,
    Bell,
    Mail,
    FileText,
    Send
} from 'lucide-react';

export default function ZohoMailPage() {
    return (
        <main className="bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <section className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-blue-700 mb-4">Zoho Mail in India</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Why is Zoho Mail a good alternative to Gmail? It's Affordable, Privacy-focused, and Packed with Business-Friendly Features.
                    </p>
                </section>

                {/* Introduction */}
                <section className="mb-12 space-y-4">
                    <p>
                        Zoho Mail for business is a secure, ad-free, enterprise-ready and reliable email hosting solution for your organization's communication needs. It includes multiple collaboration tools and advanced security measures.
                    </p>
                    <p>
                        Business Mail has partnered with Zoho as part of their ecosystem in India, offering implementation and sales services alongside Zoho CRM, Project Management, Invoicing, and more.
                    </p>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Zoho Mail Key Features:</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Custom domain email</li>
                        <li>5GB–50GB storage per user (depending on plan)</li>
                        <li>Strong spam protection and data encryption</li>
                        <li>IMAP/POP access and mobile app support</li>
                    </ul>
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
                    <h2 className="text-2xl font-semibold mb-6 text-blue-600">Zoho Mail Pricing and Plans</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                name: 'Mail Lite',
                                price: '₹59 /mo',
                                features: [
                                    'Multiple domain hosting',
                                    'Domain aliases',
                                    'Email routing',
                                    'Email & folder sharing',
                                    'IMAP/POP access',
                                ],
                            },
                            {
                                name: 'Mail Premium',
                                price: '₹199 /mo',
                                features: [
                                    'Includes everything in Mail Lite',
                                    '1 GB attachments',
                                    'Archival & eDiscovery',
                                    'Backup & restore',
                                    'White labeling, S-MIME',
                                ],
                            },
                            {
                                name: 'Workplace Standard',
                                price: '₹99 /mo',
                                features: [
                                    'Includes everything in Mail Lite',
                                    'Zoho Office Suite',
                                    'Zoho Cliq, Zoho Meeting',
                                    'Google SSO & SAML',
                                    '100 GB storage',
                                ],
                            },
                            {
                                name: 'Workplace Professional',
                                price: '₹399 /mo',
                                features: [
                                    'Includes everything in Premium',
                                    'Zoho Meeting (100 participants)',
                                    'Multi-team/announcement channels',
                                    'Guest Chat & Reports',
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

                {/* Zoho Mail Benefits */}
                <section className="mb-20">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-8 text-center">Zoho Mail Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            {
                                icon: <Filter className="w-7 h-7 text-black" />,
                                title: 'Filters',
                                desc: 'Automate repetitive tasks, create rules, and highlight or categorize emails easily.'
                            },
                            {
                                icon: <Moon className="w-7 h-7 text-black" />,
                                title: 'Night Mode',
                                desc: 'Reduce eye strain with a dedicated dark mode interface during late hours.'
                            },
                            {
                                icon: <Search className="w-7 h-7 text-black" />,
                                title: 'Search',
                                desc: 'Advanced filters let you search across folders, attachments, dates, and more.'
                            },
                            {
                                icon: <Trash2 className="w-7 h-7 text-black" />,
                                title: 'Scrub',
                                desc: 'Use Sweep to bulk delete/archive emails from up to five senders instantly.'
                            },
                            {
                                icon: <Keyboard className="w-7 h-7 text-black" />,
                                title: 'Keyboard Shortcuts',
                                desc: 'Quick access with commands like GU (unread), CM (compose), Ctrl+P (print).'
                            },
                            {
                                icon: <Bell className="w-7 h-7 text-black" />,
                                title: 'Folder-specific Notifications',
                                desc: 'Only receive alerts for selected folders and silence the rest.'
                            },
                            {
                                icon: <Mail className="w-7 h-7 text-black" />,
                                title: 'List Emails from Sender',
                                desc: 'Right-click any email to view all others from that sender, grouped together.'
                            },
                            {
                                icon: <FileText className="w-7 h-7 text-black" />,
                                title: 'Templates',
                                desc: 'Create and reuse common email templates for routine messages.'
                            },
                            {
                                icon: <Send className="w-7 h-7 text-black" />,
                                title: 'Outbox',
                                desc: 'Edit or delete outgoing emails within a chosen timeframe before they send.'
                            }
                        ].map(({ icon, title, desc }) => (
                            <div key={title} className="flex items-start space-x-4">
                                <div className="mt-1">{icon}</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
                                    <p className="text-gray-600 text-sm">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
