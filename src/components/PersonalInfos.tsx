import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import { useCensoredStore } from "../store/useCensoredStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface PersonalInfosItemProps {
  icon: IconDefinition;
  text: string;
  isSensitive?: boolean;
  textSize?: string;
}

const PersonalInfos: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench);

  return (
    <div className="w-full bg-white rounded-lg p-3 pb-0 border border-gray-100 mb-3">
      <div className="section-title text-base font-semibold uppercase text-cv-dark-grey border-b-2 border-cv-primary pb-2 mb-3">
        {isFrench ? "Contact" : "Contact"}
      </div>
      <PersonalInfosItem
        icon={faEnvelope}
        text="Theophile.decagny@gmail.com"
        isSensitive={true}
        textSize="text-xs"
      />

      {/* Age does not seem to be essential info */}
      {/* <PersonalInfosItem
        icon={faCalendar}
        text={isFrench ? "20 / 07 / 1994" : "07 / 20 / 1994"}
        isSensitive={true}
      /> */}

      {/* Might be redundant as every work experience specifices Paris */}
      <PersonalInfosItem icon={faLocationDot} text="Paris, France" />

      <PersonalInfosItem icon={faPhone} text="+33 6 70 70 36 72" />

      {/* Would consider this unessential as it's easily found with my name */}
      {/* <PersonalInfosItem
        icon={faLinkedin}
        text="linkedin.com/in/theophile-de-cagny"
        isSensitive={true}
      /> */}

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
  textSize = "text-sm"
}) => {
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    <div className={`info-section flex items-start mb-2 text-cv-dark-grey w-full ${textSize}`}>
      <FontAwesomeIcon
        icon={icon}
        className="info-icon text-cv-primary mr-1.5 mt-1 flex-shrink-0"
      />
      <div
        className={`text-infos font-medium leading-relaxed ${text.includes("@") ? "email break-normal" : "break-words"} ${
          isSensitive && isCensored ? "blur-md select-none" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default PersonalInfos;
