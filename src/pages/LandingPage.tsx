import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../sections/Navbar';
import { HeroSection } from '../sections/HeroSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { AuthSection } from '../sections/AuthSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { Footer } from '../sections/Footer';

export const LandingPage = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-kitty-cream dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-kitty-pink"></div>
      </div>
    );
  }

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
