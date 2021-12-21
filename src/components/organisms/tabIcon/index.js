import React from "react";

import GlobalVars from "../../../global/globalVars";

import Icon from "../../atoms/icon";

const tabIcon = ({ focused, route, size, color }) => {
  let iconName;
  switch (route) {
    case "stackHome":
      iconName = "home";
      break;
    case "stackShelude":
      iconName = "calendar";
      break;
    case "stackShop":
      iconName = "tago";
      break;
    case "myAccount":
      iconName = "user";
      break;
    default:
      iconName = "exclamationcircleo";
      break;
  }
  return (
    <Icon
      iconName={iconName}
      size={focused ? 24 : 16}
      color={focused ? GlobalVars.blueMercedes : GlobalVars.white}
    />
  );
};

export default tabIcon;
