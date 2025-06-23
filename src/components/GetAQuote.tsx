// components/GetAQuote.tsx
'use client';

import { useState } from 'react';

export default function GetAQuote() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-none transition-colors duration-300"
      >
        GET A QUOTE
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-500">Consultation</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name:</label>
                <p className="text-xs text-gray-500 mb-1">How would you want us to call you?</p>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded" 
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Your Phone No:</label>
                <p className="text-xs text-gray-500 mb-1">Thanks for sharing your direct number or mobile number.</p>
                <input 
                  type="tel" 
                  className="w-full p-2 border border-gray-300 rounded" 
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Your Email Address:</label>
                <p className="text-xs text-gray-500 mb-1">Please fill in your direct email you always access</p>
                <input 
                  type="email" 
                  className="w-full p-2 border border-gray-300 rounded" 
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Company:</label>
                <p className="text-xs text-gray-500 mb-1">Your Company Name</p>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Website:</label>
                <p className="text-xs text-gray-500 mb-1">Domain name is an internet identity of your organization i.e www.domain.com</p>
                <input 
                  type="url" 
                  className="w-full p-2 border border-gray-300 rounded" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message:</label>
                <p className="text-xs text-gray-500 mb-1">Please enter your message.</p>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded" 
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
