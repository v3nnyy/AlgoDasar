import React, { createContext, useContext, useState, useEffect } from 'react';

export type AppTheme = 'dark' | 'light' | 'sepia';

interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(() => {
    try {
      const saved = localStorage.getItem('algodasar_theme');
      if (saved === 'dark' || saved === 'light' || saved === 'sepia') return saved;
    } catch {
      // Ignore localStorage errors in sandboxes
    }
    // Default to the new high-tech Modern IDE Dark theme!
    return 'dark';
  });

  useEffect(() => {
    try {
      localStorage.setItem('algodasar_theme', theme);
    } catch {
      // Ignore
    }
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#090d16';
      document.body.style.color = '#f8fafc';
    } else if (theme === 'sepia') {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#faf6ee';
      document.body.style.color = '#26201b';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'sepia';
      return 'dark';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
