import React, { useEffect, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForGps from '../../i18n/for-gps-config';
import '../../styles/rtl.css';

interface ForGpsI18nProviderProps {
  children: ReactNode;
}

export const ForGpsI18nProvider: React.FC<ForGpsI18nProviderProps> = ({ children }) => {
  // Handle RTL for Arabic
  useEffect(() => {
    const handleLanguageChange = () => {
      const isRTL = i18nForGps.dir() === 'rtl';
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = i18nForGps.language;
      
      // Add RTL-specific CSS class to body if needed
      if (isRTL) {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
    };

    i18nForGps.on('languageChanged', handleLanguageChange);
    handleLanguageChange(); // Set initial direction

    return () => {
      i18nForGps.off('languageChanged', handleLanguageChange);
      document.documentElement.dir = 'ltr'; // Reset to LTR when unmounted
      document.body.classList.remove('rtl');
    };
  }, []);

  return (
    <I18nextProvider i18n={i18nForGps}>
      {children}
    </I18nextProvider>
  );
};

export default ForGpsI18nProvider;
