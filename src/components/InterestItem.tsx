import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useLanguageStore } from "../store/useLanguageStore";

interface InterestItemProps {
  frenchText: string;
  englishText: string;
  icon: IconDefinition;
}

const InterestItem: React.FC<InterestItemProps> = ({
  frenchText,
  englishText,
  icon,
}) => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="interest-element text-sm mb-2 flex items-center">
      <div className="interest-icon mr-3">
        <FontAwesomeIcon icon={icon} className="text-cv-accent text-lg" />
      </div>
      <div className="interest-text font-medium text-cv-dark-grey">
        {isFrench ? frenchText : englishText}
      </div>
    </div>
  );
};

export default InterestItem;
