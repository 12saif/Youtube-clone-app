import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Avatar } from "@mui/material";
import SaifLogo from "../images/saif photo (1).jpg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://www.ugtcantabria.org/wp-content/uploads/youtube-wikipedia.jpg"
          alt=""
        />
      </div>

      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchSharpIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <Avatar alt="md saif" src={SaifLogo} />
      </div>
    </div>
  );
}

export default Header;
