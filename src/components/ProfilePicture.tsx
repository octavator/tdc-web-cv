import React from "react";
import profileImg from "../assets/cropped_photo_corpo_bg.jpg";
import { useCensoredStore } from "../store/useCensoredStore";

const ProfilePicture: React.FC = () => {
  const isCensored = useCensoredStore((state) => state.isCensored);

  return (
    // @TODO: check image properties are alright for every screen size
    <div className="profile-picture mb-4">
      <img
        src={profileImg}
        alt="Profil"
        className={`rounded-lg w-44 h-44 object-cover ${
          isCensored ? "blur-md select-none" : ""
        }`}
        style={{ width: "180px", height: "180px" }}
      />
    </div>
  );
};

export default ProfilePicture;
