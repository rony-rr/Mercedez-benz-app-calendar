import React from 'react'
import Icon from "../../atoms/icon/index"

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
    case "stackAccount":
      iconName = "user";
      break;
    default:
      iconName = "bug";
      break;
  }
  return (
    <Icon iconName={iconName} size={size} color={color} />
  )
}

export default tabIcon

