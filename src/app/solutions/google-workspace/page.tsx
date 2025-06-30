'use client';

import React from 'react';
import {
    Lock,
    Calendar,
    AppWindow,
    Send,
    Upload,
    Folder
} from 'lucide-react';

export default function GoogleWorkspacePage() {
    return (
        <main className="bg-white text-gray-800">
            
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <section className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-blue-700 mb-4">Google Workspace in India</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Google Workspace (formerly known as GSuite) is designed to provide an all-in-one suite of web applications that improve team collaboration and business productivity.
                    </p>
                </section>

                {/* Introduction */}
                <section className="mb-12 space-y-4">
                    <p>
                        Some of the key functionalities offered by Google Workspace include Gmail, Docs, App Maker, Google Meet, Cloud Search, and more.
                    </p>
                    <p>
                        As a Google partner, <strong>Skynetiks Technologies</strong> is a Google Workspace reseller and service provider for businesses across India. We offer deployment management, data migration, mobile device integration, and more.
                    </p>
                </section>

                {/* Customer Benefits */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Customers Benefit From:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>✅ Rapid response time</li>
                        <li>✅ Experienced and top consultants</li>
                        <li>✅ 24/7 Support</li>
                        <li>✅ Telephonic, Video Call and Screen Sharing Support</li>
                    </ul>
                </section>

                {/* Pricing Plans */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-blue-600">Google Workspace Pricing and Plans</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                name: 'Business Starter',
                                price: '₹3240 /Yr',
                                features: [
                                    'Custom and secure business email',
                                    '100 participant video meetings',
                                    '30GB Monthly Bandwidth',
                                    'Security and management controls',
                                    'Standard Support',
                                ],
                                link: '#',
                            },
                            {
                                name: 'Business Standard',
                                price: '₹12960 /Yr',
                                features: [
                                    '150 participant video meetings + recording',
                                    '2 TB cloud storage per user',
                                    'Security and management controls',
                                    'Standard Support (upgrade available)',
                                ],
                                link: '#',
                            },
                            {
                                name: 'Business Plus',
                                price: '₹20400 /Yr',
                                features: [
                                    'eDiscovery & retention',
                                    '250 participant meetings + tracking',
                                    '5 TB cloud storage',
                                    'Advanced security & endpoint management',
                                ],
                                link: '#',
                            },
                            {
                                name: 'Enterprise',
                                price: 'Contact Us',
                                features: [
                                    'S/MIME encryption',
                                    'Noise cancellation, live streaming',
                                    'Unlimited storage',
                                    'Enterprise-grade compliance tools',
                                ],
                                link: '#',
                            },
                        ].map((plan) => (
                            <div key={plan.name} className="border rounded-lg shadow p-6 flex flex-col justify-between bg-white">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{plan.name}</h3>
                                    <p className="text-lg font-bold text-gray-800">{plan.price}</p>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                        {plan.features.map((f, i) => (
                                            <li key={i}>• {f}</li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href={plan.link}
                                    className="mt-6 inline-block text-center bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
                                >
                                    Sign Up
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                        * Prices are per user, based on a one-year commitment. The Flex plan offers no long-term commitment. Introductory pricing is available only for new Google Workspace customers and applies to the first 20 users for the first 12 months. Standard pricing will apply thereafter. Customers can cancel anytime.
                    </p>
                </section>

                {/* Benefits */}
                <section className="mb-20">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-8 text-center">Google Workspace Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            {
                                icon: <Lock className="w-7 h-7 text-black" />,
                                title: 'Logging in made easy',
                                desc: (
                                    <>
                                        <strong>Having to remember multiple login details can be tricky, but with single sign-on</strong>, you can allow your employees to log in using their Google Workspace (formerly G Suite) credentials (email and password). This eliminates the need for employees to remember an additional password.
                                    </>
                                ),
                            },
                            {
                                icon: <Calendar className="w-7 h-7 text-black" />,
                                title: 'Never miss a meeting',
                                desc: (
                                    <>
                                        The Appogee HR integration with Google Workspace synchronizes leave and sickness requests with Google Calendar instantly. <strong>The Google Workspace integration extends to Google Team Calendars</strong>, helping you sync leave across your entire team.
                                    </>
                                ),
                            },
                            {
                                icon: <AppWindow className="w-7 h-7 text-black" />,
                                title: 'Access from any Google Workspace application',
                                desc: (
                                    <>
                                        <strong>You can open Appogee HR from any Google Workspace app</strong> using the top-right menu — no extra bookmarks needed. Apps like Calendar, Drive, and Docs are just one click away.
                                    </>
                                ),
                            },
                            {
                                icon: <Send className="w-7 h-7 text-black" />,
                                title: 'Set your out of office',
                                desc: (
                                    <>
                                        One of the most loved integrations: <strong>set Out of Office messages when making a Leave request</strong>. No need to remember on your last working day — it's all automated inside Appogee HR.
                                    </>
                                ),
                            },
                            {
                                icon: <Upload className="w-7 h-7 text-black" />,
                                title: 'Fast user upload',
                                desc: (
                                    <>
                                        Easily import new employees via Google Workspace. <strong>No more manual entries — Appogee HR identifies and sets up users</strong> that aren't onboarded yet with just a few clicks.
                                    </>
                                ),
                            },
                            {
                                icon: <Folder className="w-7 h-7 text-black" />,
                                title: 'Save time uploading records',
                                desc: (
                                    <>
                                        Store records in Google Drive and <strong>link them using the Drive picker</strong>. No need to duplicate documents — just select and attach with ease.
                                    </>
                                ),
                            },
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
