'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is space provided per email account ?',
    answer: 'Each email account is allocated with 5 GB of space dedicated to emails.',
  },
  {
    question: 'What ports do I need to use for email hosting ?',
    answer:
      ' Typically, the port used for the Outgoing Mail Server/SMTP Service is 25. However, there could be a situation where your ISP blocks the use of port 25 for SMTP service. To work around this issue, you can utilize an alternative port, such as 587, for sending emails',
  },
  {
    question: 'Can I create a mailing list ?',
    answer:
      'Yes, you can create mailing lists and manage users, including adding or deleting users, selecting a moderator, restricting new member invitations, and even banning users from a list.',
  },
  {
    question: 'What is your spam policy ?',
    answer:
      'We maintain a zero-tolerance stance against the sending of unsolicited email, bulk emailing, and spam. The use of "Safe lists," purchased lists, and the act of selling lists will be considered as spamming. Any user found sending out spam will have their account terminated, with or without prior notice',
  },
  {
    question: 'How will purchasing business email benefit me ?',
    answer:
      "Unlike free email solutions, you can enhance your business's professional image through Business Email. This entails having email accounts associated with your company's domain name (e.g., sales@mybrand.com). Furthermore, you'll gain access to our cutting-edge email technology, which offers minimal latency, industry-leading uptime, scalability, and reliability. With our cloud-based email service, you're exempt from expenses related to IT, hardware, software, bandwidth, and people costs. The added advantage is the flexibility to incorporate additional email accounts as your team expands.",
  },
  {
    question: 'Which email clients and protocols are supported ?',
    answer:
      'You can send and receive emails using various desktop-based email clients, including Microsoft Outlook, Outlook Express, Mozilla Thunderbird, Eudora, Entourage 2004, and Windows Mail, among others. We also provide a comprehensive guide on configuring different email clients for sending and receiving emails. Our enterprise email product is compatible with the POP, IMAP, and MAPI protocols.',
  },
  {
    question: 'How do I use my Webmail Interface ?',
    answer:
      ' To access your Webmail Interface, please use the white-labeled URL: http://webmail.yourdomainname.com. Once you reach the login page, enter your email address and its corresponding password to log in.',
  },
  {
    question: 'From which mobile phone can I access my email ?',
    answer:
      'Your email can be accessed using any smartphone or tablet. Our fluidic webmail, built with HTML5 and Javascript, is compatible with all major operating systems, including iOS, Android, Windows Mobile, Symbian, and Blackberry.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-10">
      <main className="text-gray-800 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base">
            Skynetiks Technologies Pvt. Ltd is a Google Workspace Partner in India. We assist businesses with Google
            Workspace, Domains, Hosting, Web Design, SSL, and Cloud services.
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Transitioning to Google Workspace can be challenging. Below are answers to the most common questions we get.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded bg-white p-3 shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="text-sm font-medium text-gray-800 flex justify-between items-center">
                <span>Q: {faq.question}</span>
                <span className="text-gray-500 text-lg">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="mt-2 text-gray-600 text-sm">
                  <strong>Answer:</strong> {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
