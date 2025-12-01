import { Navbar } from './sections/Navbar';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { AuthSection } from './sections/AuthSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-kitty-pink selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AuthSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
