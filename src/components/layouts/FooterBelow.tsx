'use client';

import Link from "next/link";

const FooterBelow = () => {
  return (
    <div className="bg-gray-100 text-gray-800 border-t border-gray-300 py-6 px-4">
      <div className="max-w-7xl mx-auto text-sm text-center">
        <p>Copyright © 2003-2025 Skynetiks Technologies Pvt. Ltd. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-600">Terms and Conditions</Link>
          <Link href="/refund-policy" className="hover:text-blue-600">Refund Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBelow;
