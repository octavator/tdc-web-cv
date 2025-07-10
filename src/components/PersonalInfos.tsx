import React from "react";
import { useLanguageStore } from '../store/useLanguageStore';

const PersonalInfos: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);
  const isCensored = true; // Peut être ajouté au store si besoin

  return (
    <div>
      <div className="info-section flex items-center mb-2">
        <i className="info-icon mr-2 text-blue-600 fa-solid fa-envelope" />
        <div className="text-infos email">Theophile.decagny@gmail.com</div>
      </div>

      {!isCensored && (
        <div className="info-section flex items-center mb-2">
          <i className="info-icon mr-2 text-blue-600 fa-solid fa-calendar" />
          <div className="text-infos date">
            {isFrench ? "20 / 07 / 1994" : "07 / 20 / 1994"}
          </div>
        </div>
      )}

      <div className="info-section flex items-center mb-2">
        <i className="info-icon mr-2 text-blue-600 fa-solid fa-location-dot" />
        <div className="text-infos location">Paris, France</div>
      </div>

      <div className="info-section flex items-center mb-2">
        <i className="info-icon mr-2 text-blue-600 fa-brands fa-linkedin" />
        <div className="text-infos linkedin">
          linkedin.com/in/theophile-de-cagny
        </div>
      </div>

      <div className="info-section flex items-center mb-2">
        <i className="info-icon mr-2 text-blue-600 fa-brands fa-github" />
        <div className="text-infos github">github.com/octavator</div>
      </div>
    </div>
  );
};

export default PersonalInfos; 