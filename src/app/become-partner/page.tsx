'use client';
import { useState } from 'react';

export default function Partner() {
  const benefits = [
    "Rapid response time",
    "Experienced and top consultants",
    "24/7 Support",
    "Telephonic, Video Call and Screen Sharing Support",
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here, integrate your backend or service like EmailJS, Formspree, etc.
    alert("Application submitted successfully!");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Become Our Partner</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing network of successful partners and grow your business with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">Partner Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-blue-700">Partner Application Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business..."
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
              >
                Submit Application
              </button>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                Questions? Call us at <span className="font-semibold">+91-9212378780</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}