import React from 'react'
import Icon from "../../atoms/icon/index"

const tabIcon = ({ focused, route, size, color }) => {
  let iconName;
  switch (route) {
    case "stackHome":
      iconName = "home";
      break;
    case "stackCategories":
      iconName = "tag";
      break;
    case "stackAddRecipe":
      iconName = "plus-circle";
      break;
    case "stackFavorites":
      iconName = "cards-heart";
      break;
    case "stackRegional":
      iconName = "map-search";
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

