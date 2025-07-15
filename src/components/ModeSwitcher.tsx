import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";

const ModeSwitcher: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);
  const isCensored = useCensoredStore((state) => state.isCensored);
  const toggleCensored = useCensoredStore((state) => state.toggleCensored);

  return (
    <div className="mb-4 space-x-2 no-print">
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {isFrench ? "Passer en anglais" : "Switch to French"}
      </button>
      <button
        onClick={toggleCensored}
        className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
      >
        {isCensored
          ? "Déflouter infos personnelles"
          : "Flouter infos personnelles"}
      </button>
    </div>
  );
};

export default ModeSwitcher;
