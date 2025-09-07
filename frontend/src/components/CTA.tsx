import { Button } from '@/components/ui/button';

interface CTASectionProps {
  heroRef: React.RefObject<HTMLDivElement>;
}

export default function CTASection({ heroRef }: CTASectionProps) {
  const scrollToHero = () => {
    console.log('Scrolling to hero', heroRef.current);
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
          Start shortening your URLs today!
        </h2>
        <Button
          onClick={scrollToHero}
          className="px-6 py-3 text-lg bg-black text-white hover:bg-white hover:text-black border border-black rounded-full transition"
        >
          Get Started for Free
        </Button>
      </div>
    </section>
  );
}