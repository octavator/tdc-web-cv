import React from "react"
import profileImg from "../assets/cropped_photo_corpo_bg.jpg"

const ProfilePicture: React.FC = () => {
  return (
    // @TODO: check image properties are alright for every screen size
    <div className="profile-picture flex justify-center my-6">
      <img
        src={profileImg}
        alt="Profil"
        className="rounded-full w-40 h-40 object-cover border-4 border-blue-600 shadow-lg"
      />
    </div>
  )
}

export default ProfilePicture