import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";

const ModeSwitcher: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);
  const isCensored = useCensoredStore((state) => state.isCensored);
  const toggleCensored = useCensoredStore((state) => state.toggleCensored);

  return (
    <div className="flex flex-col gap-2 no-print">
      <button
        onClick={toggleLanguage}
        className="px-3 py-1.5 text-xs rounded-md bg-white/90 text-cv-primary border border-cv-primary/20 hover:bg-cv-primary/5 transition-all duration-200 shadow-sm backdrop-blur-sm font-medium"
      >
        {isFrench ? "EN" : "FR"}
      </button>
      <button
        onClick={toggleCensored}
        className="px-3 py-1.5 text-xs rounded-md bg-white/90 text-cv-accent border border-cv-accent/20 hover:bg-cv-accent/5 transition-all duration-200 shadow-sm backdrop-blur-sm font-medium"
      >
        {isCensored ? "👁️" : "🔒"}
      </button>
    </div>
  );
};

export default ModeSwitcher;
