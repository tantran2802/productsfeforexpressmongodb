import React, { createContext, useState, useContext } from 'react';
// Import translation files
import en from './translations/en.json';
import vi from './translations/vi.json';

// Create a translations object
const translations = {
  en: en,
  vi: vi
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);