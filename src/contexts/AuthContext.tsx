import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

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
  login: (name: string, email: string) => void;
  logout: () => void;
  updateProfile: (name: string, avatar: string) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('kitty-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (name: string, email: string) => {
    const newUser = {
      id: '1',
      name,
      email,
      avatar: '🐱',
      whiskerPoints: 150,
      tasksCompleted: 42,
      streak: 5
    };
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('kitty-user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('kitty-user');
  };

  const updateProfile = (name: string, avatar: string) => {
    if (user) {
      const updatedUser = { ...user, name, avatar };
      setUser(updatedUser);
      localStorage.setItem('kitty-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
