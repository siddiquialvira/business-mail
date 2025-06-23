import RotatingBanner from '@/components/home/RotatingBanner';
import Brand from '@/components/home/Brand';
import AboutUs from '@/components/home/AboutUs';
import GlobalPartner from '@/components/home/GlobalPartner';
import TechSolutions from '@/components/home/TechSolutions';
import ClientTestimonials from '@/components/home/ClientTestimonials';
import Data from '@/components/home/Data';

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
    </main>
  );
}
