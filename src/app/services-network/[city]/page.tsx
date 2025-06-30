import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities } from '@/data/cities';
import Link from 'next/link';
import TechSolutions from '@/components/home/TechSolutions';

type Params = {
  city: string;
};

const formatCityName = (slug: string): string => {
  if (!slug || typeof slug !== 'string') return '';
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};

// FIXED: Await params before accessing properties with proper error handling
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const citySlug = resolvedParams.city;

    if (!citySlug) {
      return {
        title: 'City Not Found | Skynetiks Technologies',
        description: 'Requested city not available for business email hosting services.',
      };
    }

    const city = formatCityName(citySlug);

    if (!cities.includes(city)) {
      return {
        title: 'City Not Found | Skynetiks Technologies',
        description: 'Requested city not available for business email hosting services.',
      };
    }

    return {
      title: `Business Email Hosting in ${city} | Skynetiks Technologies`,
      description: `Reliable business email solutions in ${city} including Google Workspace, Microsoft 365, and more.`,
      keywords: `business email hosting ${city}, email solutions ${city}, Google Workspace ${city}`,
      openGraph: {
        title: `Business Email Hosting in ${city} | Skynetiks Technologies`,
        description: `Reliable business email solutions in ${city} including Google Workspace, Microsoft 365, and more.`,
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return {
      title: 'Business Email Hosting | Skynetiks Technologies',
      description: 'Reliable business email solutions including Google Workspace, Microsoft 365, and more.',
    };
  }
}

// FIXED: Await params before accessing properties with proper error handling
const ServiceCityPage = async ({ params }: { params: Promise<Params> }) => {
  try {
    const resolvedParams = await params;
    const citySlug = resolvedParams.city;

    if (!citySlug) {
      return notFound();
    }

    const city = formatCityName(citySlug);

    if (!city || !cities.includes(city)) {
      return notFound();
    }

    return (
      <div className="bg-white text-gray-800">
        {/* Banner */}
        <div
          className="relative h-[400px] w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/your-city-banner.jpg')` }}
        >
          <div className="absolute inset-0 bg-blue-500 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-blue-500 text-white text-center px-4">
              Google Workspace – The Most Reliable Domain-Based Email Hosting in {city}
            </h1>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link href="/contact-us/call-back">
            <button className="px-6 py-2 border border-white bg-transparent text-gray-700 hover:bg-white hover:text-black transition">
              Get A Call Back
            </button>
          </Link>
        </div>

        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Professional Business Email Solutions in {city}
            <br />
            <span className="text-blue-600">| Skynetiks Technologies</span>
          </h2>

          <p className="mb-6">
            Welcome to <span className="text-green-600">Skynetiks Technologies</span>, your trusted partner for <strong>business email solutions in {city}</strong>. We offer secure, reliable, and scalable business mailing services that empower organizations to communicate seamlessly and professionally.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliable Business Email Hosting Services</h3>
          <p className="mb-6 text-gray-700">
            At Skynetiks Technologies, we understand that <strong>email communication</strong> is the backbone of modern businesses. Our enterprise-grade <strong>business mail services</strong> ensure high uptime, fast delivery, and complete security for your messages.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Domain Email Solutions for Professional Branding</h3>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Boost brand recognition with personalized business emails</li>
            <li>Create unlimited user accounts with scalable storage options</li>
            <li>Improve deliverability and reduce spam with advanced filtering</li>
          </ul>

          <p className="mb-6">
            Our email hosting for businesses in {city} ensures that your emails are always fast, secure, and accessible from anywhere.
          </p>

          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>One-time configuration support</li>
            <li>Easy-to-use admin dashboard</li>
            <li>Ongoing monitoring and maintenance</li>
            <li>Expert guidance for DNS, SPF, DKIM, and MX record settings</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Skynetiks Technologies?</h3>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Secure communication with anti-virus & anti-spam protection</li>
            <li>99.9% uptime guarantee</li>
            <li>Web and mobile access</li>
            <li>Expert email migration and server setup</li>
          </ul>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold mb-4">Start Your Professional Email Journey Today!</h3>
            <p className="mb-4">
              Let Skynetiks Technologies help you enhance business communication with premium mail & hosting in {city}.
            </p>
            <Link
              href="/"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              📩 Contact us today to get started!
            </Link>

          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Best Business Email Hosting Services in {city}</h3>
            <p className="mb-4 font-semibold">We offer the following:</p>
            <div className="mt-10">
              <TechSolutions />
            </div>
          </div>

        </section>
      </div>
    );
  } catch (error) {
    console.error('Error in ServiceCityPage:', error);
    return notFound();
  }
};

export default ServiceCityPage;

// Ensure static paths are prebuilt with proper error handling
export async function generateStaticParams(): Promise<{ city: string }[]> {
  try {
    if (!cities || !Array.isArray(cities)) {
      console.warn('Cities data is not available or not an array');
      return [];
    }

    return cities.map((city) => ({
      city: city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, ''),
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}
