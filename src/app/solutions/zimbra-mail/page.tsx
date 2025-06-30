'use client';

import React from 'react';
import { ShieldCheck, CalendarCheck2, ArchiveRestore, FileStack } from 'lucide-react';

export default function ZimbraPage() {
    return (
        <main className="bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <section className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-blue-700 mb-4">Zimbra Mail in India</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Is Zimbra Mail ideal for data privacy? <strong>Absolutely</strong>, thanks to its <strong>self-hosted, open source, no data mining, and end-to-end security</strong> features.
                    </p>
                </section>

                {/* Introduction */}
                <section className="mb-12 space-y-4">
                    <p>
                        Zimbra Collaboration Suite (ZCS) is an enterprise-grade mailing and collaboration solution. It includes email, address book, web documents, file sharing, and more. Zimbra features a user-friendly AJAX-based interface with advanced sharing capabilities and seamless migration and deployment options.
                    </p>
                    <p>
                        Zimbra supports a wide range of email clients (Microsoft Outlook, Apple, Linux) and mobile devices such as Blackberry and iPhone. It offers full control over data storage and compliance with GDPR, HIPAA, or local regulations — making it ideal for sectors like government, education, healthcare, and finance.
                    </p>
                    <p>
                        With support for third-party platform integrations, customization through Zimlets, and simplified administration, Zimbra email hosting is a cost-effective and feature-rich solution for robust email communication.
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
                        <h3 className="font-semibold text-gray-800 mb-2">How do I enhance the security of my Zimbra mail server?</h3>
                        <p className="text-gray-700">
                            Skynetiks Technologies, an official Google Workspace partner in India, provides advanced email security services including firewall configurations, spam filters, and secure backups to strengthen your Zimbra mail server.
                        </p>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="mb-20">
                    <h2 className="text-2xl font-semibold mb-8 text-blue-600 text-center">Zimbra Mail Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            {
                                icon: <ShieldCheck className="w-7 h-7 text-black" />,
                                title: 'Helps you Avoid Spam Mails',
                                desc: 'Zimbra\'s intelligent spam filters identify and block unwanted emails, reducing the need for manual filtering and enhancing productivity.'
                            },
                            {
                                icon: <CalendarCheck2 className="w-7 h-7 text-black" />,
                                title: 'Helps Create Calendars',
                                desc: 'Manage appointments and deadlines efficiently. Shared calendars keep teams aligned and improve collaboration.'
                            },
                            {
                                icon: <ArchiveRestore className="w-7 h-7 text-black" />,
                                title: 'Backup of Important Emails',
                                desc: 'Prevent data loss with Zimbra\'s reliable backup system. Discuss frequency and extent with your provider to ensure recovery options.'
                            },
                            {
                                icon: <FileStack className="w-7 h-7 text-black" />,
                                title: 'Hassle-Free Document Storage',
                                desc: 'Store and manage documents in Zimbra with global access, powerful search, and customizable organization.'
                            },
                        ].map(({ icon, title, desc }) => (
                            <div key={title} className="flex items-start space-x-4">
                                <div className="text-3xl">{icon}</div>
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