import React from "react";
import "./SidebarRow.css";
// import HomeSharpIcon from "@mui/icons-material/HomeSharp";

const SidebarRow = ({ Icon, title }) => {
  return (
    <div className="sidebarRow">
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarRow;
