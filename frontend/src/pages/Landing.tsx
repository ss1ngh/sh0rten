import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/Features';
import Footer from '@/components/Footer';
import { useRef } from 'react';
import CTASection from '@/components/CTA';

export default function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_2px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>

      
      <div className="relative z-10">
        <Navbar onFeaturesClick={scrollToFeatures} />
        <HeroSection heroRef={heroRef} featuresRef={featuresRef} />
        <div ref={featuresRef}>
          <FeaturesSection />
        </div>
        <CTASection heroRef={heroRef} />
        <Footer />
      </div>
    </div>
  );
}