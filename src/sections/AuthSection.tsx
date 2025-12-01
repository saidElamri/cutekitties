import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { Github } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

export const AuthSection: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const currentForm = isLogin ? loginForm : signupForm;

  const onSubmit = async (data: LoginFormData | SignupFormData) => {
    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-md mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-kitty-text dark:text-white mb-2">
            {isLogin ? 'Welcome Back!' : 'Join the Cuddle'}
          </h2>
          <p className="text-gray-400 dark:text-gray-500">
            {isLogin ? 'Ready to get back to work, hooman?' : 'Create an account to start your journey.'}
          </p>
        </div>

        <Card className="p-8 dark:bg-gray-800">
          <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-xl mb-8">
            <button
              onClick={() => {
                setIsLogin(true);
                currentForm.reset();
              }}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                isLogin 
                  ? 'bg-white dark:bg-gray-600 shadow-sm text-kitty-pink' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                currentForm.reset();
              }}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                !isLogin 
                  ? 'bg-white dark:bg-gray-600 shadow-sm text-kitty-pink' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={currentForm.handleSubmit(onSubmit)} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <Input
                    placeholder="Your Name"
                    type="text"
                    {...signupForm.register('name')}
                    error={signupForm.formState.errors.name?.message}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <Input
              placeholder="name@example.com"
              type="email"
            />
            
            <Input
              placeholder="••••••••"
              type="password"
            />

            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    {...signupForm.register('confirmPassword')}
                    error={signupForm.formState.errors.confirmPassword?.message}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-kitty-pink hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
            )}

            <Button 
              className="w-full justify-center mt-4" 
              size="lg"
              type="submit"
            >
              {isLogin ? 'Log In' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-bold text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-bold text-gray-600 dark:text-gray-300">
              <Github size={20} />
              Github
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
};
