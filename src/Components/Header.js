import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className="header">
      <h1>I am a Header</h1>
      <MenuIcon />
      <img
        src="https://www.ugtcantabria.org/wp-content/uploads/youtube-wikipedia.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
