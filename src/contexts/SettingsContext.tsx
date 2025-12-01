import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type ThemeColor = 'pink' | 'blue' | 'green' | 'purple' | 'orange';
type Language = 'en' | 'es' | 'fr' | 'ja';

interface SettingsContextType {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    return (localStorage.getItem('kitty-theme-color') as ThemeColor) || 'pink';
  });

  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('kitty-sound-enabled');
    return saved ? JSON.parse(saved) : true;
  });

  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('kitty-language') as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('kitty-theme-color', themeColor);
    document.documentElement.setAttribute('data-theme', themeColor);
  }, [themeColor]);

  useEffect(() => {
    localStorage.setItem('kitty-sound-enabled', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  useEffect(() => {
    localStorage.setItem('kitty-language', language);
  }, [language]);

  return (
    <SettingsContext.Provider value={{
      themeColor,
      setThemeColor,
      soundEnabled,
      setSoundEnabled,
      language,
      setLanguage
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within SettingsProvider');
  return context;
};
