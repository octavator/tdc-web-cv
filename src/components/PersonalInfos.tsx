import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCalendar,
  faLocationDot,
  faPhone,
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
    <div className="w-full">
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

      <PersonalInfosItem icon={faPhone} text="+33 6 70 70 36 72" />

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
    <div className="info-section flex mb-3 max-w-44 text-xs break-all w-full">
      <FontAwesomeIcon
        icon={icon}
        className="info-icon text-cv-secondary mr-2.5"
      />
      <div
        className={`text-infos ${text.includes("@") ? "email break-normal" : "break-words"} ${
          isSensitive && isCensored ? "blur-md select-none" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default PersonalInfos;
