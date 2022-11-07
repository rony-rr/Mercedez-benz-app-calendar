import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ iconName, color, size }) => {
  return <AntDesign name={iconName} size={size} color={color} />;
};

export default Icon;
