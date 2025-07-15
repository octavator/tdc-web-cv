import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCalendar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface PersonalInfosItemProps {
  icon: IconDefinition;
  text: string;
  isSensitive?: boolean;
}

const PersonalInfos: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div>
      <PersonalInfosItem
        icon={faEnvelope}
        text="Theophile.decagny@gmail.com"
        isSensitive={true}
      />

      <PersonalInfosItem
        icon={faCalendar}
        text={isFrench ? "20 / 07 / 1994" : "07 / 20 / 1994"}
        isSensitive={true}
      />

      <PersonalInfosItem icon={faLocationDot} text="Paris, France" />

      <PersonalInfosItem
        icon={faLinkedin}
        text="linkedin.com/in/theophile-de-cagny"
        isSensitive={true}
      />

      <PersonalInfosItem
        icon={faGithub}
        text="github.com/octavator"
        isSensitive={true}
      />
    </div>
  );
};

const PersonalInfosItem: React.FC<PersonalInfosItemProps> = ({
  icon,
  text,
  isSensitive = false,
}) => {
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    <div className="info-section flex items-center mb-2">
      <div className="info-icon mr-2">
        <FontAwesomeIcon icon={icon} className="text-blue-600" />
      </div>
      <div
        className={`text-infos ${
          isSensitive && isCensored ? "blur-md select-none" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default PersonalInfos;
