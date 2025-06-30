import React from 'react';
import Link from 'next/link';

const TechnologySolutions = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Technology Options / Solutions
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Google Workspace */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Google Workspace</h2>
            <p className="text-gray-600 mb-4">
              Looking for a secure, scalable, and professional business email solution? Google Workspace offers everything your team needs — from Gmail with your domain to Google Drive, Docs, Calendar, and 35+ productivity apps.
            </p>
            <Link
              href="/solutions/google-workspace"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Get Free Demo →
            </Link>
          </div>

          {/* ZOHO Mail */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">ZOHO Mail</h2>
            <p className="text-gray-600 mb-4">
              If you&#39;re searching for a reliable, ad-free business email hosting solution, Zoho Mail stands out with enterprise-grade security, end-to-end encryption, spam filtering, and phishing detection.
            </p>
            <Link
              href="/solutions/zoho-mail"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Get Free Demo →
            </Link>
          </div>

          {/* RC Mail */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">RC Mail</h2>
            <p className="text-gray-600 mb-4">
              Empower your business with RC Mail — a premium email hosting solution crafted for entrepreneurs. With enterprise-grade reliability, 99.99% uptime, and advanced spam protection.
            </p>
            <Link
              href="/solutions/rc-mail"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Get Free Demo →
            </Link>
          </div>

          {/* Zimbra Mail */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Zimbra Mail</h2>
            <p className="text-gray-600 mb-4">
              Discover why businesses trust Zimbra for their collaboration workflows. It offers secure, professional email hosting plus tools like calendars, file sharing, and team messaging.
            </p>
            <Link
              href="/solutions/zimbra-mail"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Get Free Demo →
            </Link>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Microsoft O365 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Microsoft 365</h2>
            <p className="text-gray-600 mb-4">
              Unlock the full potential of your workforce with Microsoft 365 — the industry-leading cloud solution that integrates office apps, intelligent cloud services, and world class security.
            </p>
            <Link
              href="/solutions/microsoft-365"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Get Free Demo →
            </Link>
          </div>

          {/* Hosted Exchange */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Hosted Exchange</h2>
            <p className="text-gray-600 mb-4">
              Enhance your business communication with Hosted Exchange — a secure, scalable email hosting solution powered by Microsoft Exchange technology.
            </p>
            <Link
              href="/solutions/hosted-exchange"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Get Free Demo →
            </Link>
          </div>

          {/* Rediff Mail Pro */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Rediff Mail Pro</h2>
            <p className="text-gray-600 mb-4">
              Rediffmail Pro is a reliable and scalable business email hosting solution trusted by thousands of Indian businesses. Designed for growing companies.
            </p>
            <Link
              href="/solutions/rediffmail-pro"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Get Free Demo →
            </Link>
          </div>

          {/* Custom Mail Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Custom Mail Solutions</h2>
            <p className="text-gray-600 mb-4">
              Give your business a competitive edge with Custom Mail — personalized, domain-based email addresses that reflect your brand&#39;s identity and boost customer trust.
            </p>
            <Link
              href="/solutions/custom-mail"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Get Free Demo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySolutions;