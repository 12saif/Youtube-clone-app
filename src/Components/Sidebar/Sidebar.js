import React from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
import "./Sidebar.css";

import HomeSharpIcon  from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeSharpIcon} title="Home" />
      <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
    </div>
  );
}

export default Sidebar;