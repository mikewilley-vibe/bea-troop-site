'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    localStorage.setItem('darkMode', String(newValue));

    if (newValue) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg transition-all hover:shadow-md"
      style={{
        backgroundColor: isDark ? '#3D7B2F' : '#E8F3E8',
        color: isDark ? '#E8F3E8' : '#2D5016',
      }}
      aria-label="Toggle dark mode"
      title={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
