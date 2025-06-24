import RotatingBanner from '@/components/home/RotatingBanner';
import Brand from '@/components/home/Brand';
import AboutUs from '@/components/home/AboutUs';
import GlobalPartner from '@/components/home/GlobalPartner';
import TechSolutions from '@/components/home/TechSolutions';
import ClientTestimonials from '@/components/home/ClientTestimonials';
import Data from '@/components/home/Data';
import OurServicesNetwork from '@/components/home/OurServicesNetwork';

export default function Home() {
  return (
    <main>
      <RotatingBanner />
      <Brand />
      <AboutUs />
      <GlobalPartner />
      <TechSolutions />
      <ClientTestimonials />
      <Data />
      <OurServicesNetwork />
    </main>
  );
}
export const metadata = {
  title: 'Business Mail - Your Trusted IT Partner',
  description: 'Explore our IT and cloud solutions. Trusted by top clients worldwide.',
  keywords: 'IT services, cloud solutions, business email, tech support',
  openGraph: {
    title: 'Business Mail - Your Trusted IT Partner',
    description: 'Explore our IT and cloud solutions. Trusted by top clients worldwide.',
    url: 'https://business-mail.com',
    siteName: 'Business Mail',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Mail - Your Trusted IT Partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

