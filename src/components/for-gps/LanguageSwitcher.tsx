import React from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../../i18n/for-gps-config';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isRTL = i18n.dir() === 'rtl';

  return (
    <div className={`language-switcher ${className} relative`}>
      <div className="flex items-center gap-1">
        <Globe size={16} className="text-[#0A382C]" />
        <select 
          value={i18n.language} 
          onChange={(e) => changeLanguage(e.target.value)}
          className={`bg-transparent border border-gray-300 rounded px-2 py-1 text-sm appearance-none pr-6 ${isRTL ? 'text-right pl-6' : 'text-left'}`}
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          {Object.entries(supportedLanguages).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <div className="absolute pointer-events-none right-2 top-1/2 transform -translate-y-1/2">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#0A382C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
