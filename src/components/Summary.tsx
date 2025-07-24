import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";

const Summary: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    <div className="summary bg-gradient-to-r from-cv-primary to-cv-secondary text-white p-3 mb-2 rounded-xl">
      <h1
        className={`text-2xl font-bold mb-1 text-white tracking-tight ${isCensored ? "blur-md select-none" : ""}`}
      >
        Théophile de Cagny
      </h1>
      <h3 className="summary-subtitle text-base font-bold mb-1 text-blue-100 block">
        {isFrench
          ? "Solutions Architect & Tech Leader"
          : "Solutions Architect & Tech Leader"}
      </h3>
      <div className="summary-resume text-sm text-blue-50 leading-snug max-w-4xl">
        {isFrench
          ? "Après avoir encadré 25 ingénieurs sur des SI du CAC 40, expert en haute disponibilité, je souhaite concevoir des solutions durables à impact positif."
          : "I led 25+ engineers on CAC40 supply-chain transformations. Expert in high-availability systems I am seeking to drive sustainable, positive-impact solutions."}
      </div>
    </div>
  );
};

export default Summary;
