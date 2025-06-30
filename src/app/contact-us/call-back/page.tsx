'use client';

import React from 'react';

export default function CallBackPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Get a <span className="text-blue-600">Call Back</span></h1>
        </div>

        {/* Description */}
        <section className="mb-10">
          <p className="mb-4">
            <strong>Skynetiks Technologies Pvt. Ltd</strong> is a <span className="text-green-600 font-semibold">Google Workspace</span> partner (Formerly known as G Suite). 
            We provide Google Workspace, Domain and Hosting, Website Designing, SSL, and Google Cloud Platform services for businesses in India.
          </p>
          <p className="mb-4">
            Moving business to Google Workspace? Need to understand the difference between business and enterprise plans to choose the right Google Workspace for your needs? 
            Get details and free consultancy about Google Workspace (formerly known as G Suite) pricing for both personal and business use.
          </p>
          <p className="mb-4">
            Get a call back by the experts — they will help you compare features, understand pricing, and guide you clearly with no pressure, just expert advice on Google Workspace and other services.
          </p>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h3 className="text-xl font-bold mb-4">Get a Call Back</h3>
          <form className="space-y-6 max-w-xl">
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input type="text" placeholder="How would you want us to call you?" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email:</label>
              <input type="email" placeholder="Please fill in your direct email you always access" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone No:</label>
              <input type="tel" placeholder="Thanks for sharing your direct number." className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message:</label>
              <textarea placeholder="Message" className="w-full border px-3 py-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
          </form>
        </section>
      </div>
    </main>
  );
}
