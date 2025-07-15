import React from "react"
import { useLanguageStore } from "../store/useLanguageStore"

const Education: React.FC = () => {
  const isFrench = useLanguageStore((state) => state.isFrench)

  // @TODO: EducationItem
  return (
    <div className="my-6">
      <div className="section-title text-xl font-bold mb-4">
        {isFrench ? "Formation" : "Education"}
      </div>

      <div className="xp-block education-block mb-4">
        <div className="xp-establishment font-semibold">
          <span className="xp-client-name">EPITECH</span>
          <div className="xp-extra-infos flex gap-4 text-sm text-gray-600">
            <div className="xp-timerange">2015 - 2020</div>
            <div className="xp-location">Paris</div>
          </div>
        </div>
      </div>

      <div className="xp-block education-block mb-4">
        <div className="xp-establishment font-semibold">
          <span className="xp-client-name">
            {isFrench
              ? "Certificat de compétence en anglais (niveau C2)"
              : "Certificate of Proficiency in English (C2 Level)"}
          </span>
          <div className="xp-extra-infos flex gap-4 text-sm text-gray-600">
            <div className="xp-timerange">2011</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education