import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { showToast } from '../utils/toast';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  whiskerPoints: number;
  tasksCompleted: number;
  streak: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password?: string) => Promise<boolean>;
  signup: (name: string, email: string, password?: string) => Promise<boolean>;
  loginWithOAuth: (provider: 'google' | 'github') => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (name: string, avatar: string) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchProfile(session.user.id, session.user.email!);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        fetchProfile(session.user.id, session.user.email!);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string, email: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;

      if (data) {
        setUser({
          id: data.id,
          name: data.name || email.split('@')[0],
          email: data.email || email,
          avatar: data.avatar || '🐱',
          whiskerPoints: data.whisker_points || 0,
          tasksCompleted: data.tasks_completed || 0,
          streak: data.streak || 0
        });
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const login = async (email: string, password?: string): Promise<boolean> => {
    try {
      if (password) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        showToast.success('Welcome back! 🐱');
        return true;
      } else {
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        showToast.success('Magic link sent! Check your email 📧');
        return false; // Don't redirect for magic link, user needs to check email
      }
    } catch (error: any) {
      showToast.error(error.message);
      return false;
    }
  };

  const signup = async (name: string, email: string, password?: string): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: password || 'temporary-password-placeholder',
        options: {
          data: {
            name,
          },
        },
      });
      if (error) throw error;
      showToast.success('Account created! Please check your email to verify. 📧');
      return true; // Can redirect or stay, usually stay for verification
    } catch (error: any) {
      showToast.error(error.message);
      return false;
    }
  };

  const loginWithOAuth = async (provider: 'google' | 'github') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      showToast.error(error.message);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAuthenticated(false);
    showToast.success('See you later! 👋');
  };

  const updateProfile = async (name: string, avatar: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ name, avatar })
        .eq('id', user.id);

      if (error) throw error;

      setUser({ ...user, name, avatar });
    } catch (error: any) {
      showToast.error('Failed to update profile');
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, loginWithOAuth, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
