import React from "react";
import profileImg from "../assets/cropped_photo_corpo_bg.jpg";
import { useCensoredStore } from "../store/useCensoredStore";

const ProfilePicture: React.FC = () => {
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    <div className="profile-picture mb-8 flex justify-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cv-primary via-cv-secondary to-cv-accent rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative">
          <img
            src={profileImg}
            alt="CTO Profile"
            className={`relative rounded-2xl w-56 h-56 object-cover shadow-2xl border-4 border-white/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 ${
              isCensored ? "blur-md select-none" : ""
            }`}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-cv-primary/20"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
