'use client';

import Link from 'next/link';
import { cities } from '@/data/cities';

const OurServicesNetwork = () => {
  return (
    <section className="bg-white text-gray-700 px-6 py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">
          Our Services <span className="text-blue-600">Networks</span>
        </h2>

        <div className="max-w-6xl mx-auto text-sm md:text-base leading-relaxed">
          {cities.map((city, index) => (
            <span key={city}>
              <Link
                href={`/services-network/${city.toLowerCase().replace(/ /g, '-')}`}
                className="hover:underline hover:text-blue-600 transition"
              >
                {city}
              </Link>
              {index !== cities.length - 1 && ' | '}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesNetwork;
export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.toLowerCase().replace(/ /g, '-'),
  }));
}
export async function generateMetadata() {
  return {
    title: 'Our Services Networks | Skynetiks Technologies',
    description: 'Explore our extensive network of services across various cities.',
  };
}