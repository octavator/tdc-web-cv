import React from 'react';
import { useLanguageStore } from '../store/useLanguageStore';

const LanguageToggle: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);

  return (
    <button
      onClick={toggleLanguage}
      className="mb-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      {isFrench ? 'Passer en anglais' : 'Switch to French'}
    </button>
  );
};

export default LanguageToggle; 