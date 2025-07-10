import React from "react";
import { useLanguageStore } from '../store/useLanguageStore';

const Summary: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="summary text-center my-6">
      <h1 className="text-3xl font-bold mb-2">Théophile de Cagny</h1>
      <h3 className="summary-subtitle text-xl font-semibold mb-2">
        {isFrench
          ? "Sr. Engineering Project Manager - Architecte Solution"
          : "Sr. Full-rstack Engineer | Program Manager | Solutions Architect"}
      </h3>
      <div className="summary-resume text-base text-gray-700">
        {isFrench
          ? "Curieux et persévérant, je suis à la recherche d’un nouveau défi."
          : "Curious and persevering, I'm looking for a new challenge."}
      </div>
    </div>
  );
};

export default Summary; 