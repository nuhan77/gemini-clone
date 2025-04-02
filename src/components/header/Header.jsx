import React from "react";
import "./Header.css";
import avatarsvg from "../../assets/avatar-boy-svgrepo-com.svg";

function Header() {
  return (
    <div className="header">
      <p>Gemini</p>
      <img src={avatarsvg} />
    </div>
  );
}

export default Header;
