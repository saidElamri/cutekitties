import { Navbar } from '../sections/Navbar';
import { HeroSection } from '../sections/HeroSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { AuthSection } from '../sections/AuthSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { Footer } from '../sections/Footer';

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-4 px-4">
        <HeroSection />
        <FeaturesSection />
        <AuthSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};
