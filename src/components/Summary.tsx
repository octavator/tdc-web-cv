import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";

const Summary: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    <div className="summary bg-gradient-to-r from-cv-primary to-cv-secondary text-white p-8 mb-6 rounded-xl shadow-lg">
      <h1
        className={`text-4xl font-bold mb-3 text-white tracking-tight ${isCensored ? "blur-md select-none" : ""}`}
      >
        Théophile de Cagny
      </h1>
      <h3 className="summary-subtitle text-xl font-medium mb-4 text-blue-100 block">
        {isFrench
          ? "Architecte Solutions & Lead Developer | VP Engineering"
          : "Solutions Architect & Lead Developer | VP Engineering"}
      </h3>
      <div className="summary-resume text-lg text-blue-50 leading-relaxed max-w-4xl">
        {isFrench
          ? "Architecte Solutions & Lead Developer expert dans la conception de systèmes critiques à haute disponibilité (99,9%), plus particulièrement dans la chaîne logistique. J'ai dirigé une équipe de 15 développeurs pour la plateforme Michelin Europe et supervisé architecturalement 20+ développeurs sur des projets stratégiques CAC40. J'associe vision stratégique et expertise technique pour créer des solutions durables et performantes."
          : "Solutions Architect & Lead Developer expert in designing critical high-availability systems (99.9%), particularly in supply chain. Led a 15-developer team for Michelin Europe platform and architecturally supervised 20+ developers on strategic CAC40 projects. I combine strategic vision and technical expertise to create sustainable, high-performance solutions."}
      </div>
    </div>
  );
};

export default Summary;
