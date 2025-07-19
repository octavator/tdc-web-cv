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
    <div className="interest-element text-base my-4 flex">
      <div className="interest-icon mr-2.5">
        <FontAwesomeIcon icon={icon} className="text-cv-secondary" />
      </div>
      <div className="interest-text">{isFrench ? frenchText : englishText}</div>
    </div>
  );
};

export default InterestItem;
