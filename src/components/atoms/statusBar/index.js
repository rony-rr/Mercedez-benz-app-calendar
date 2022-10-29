import React, { useState } from "react";
import { StatusBar } from "react-native";

// const STYLES = ["default", "dark-content", "light-content"];
// const TRANSITIONS = ["fade", "slide", "none"];

const Index = ({
  color,
  styleBar = "default",
  statusTransition = "fade",
  hidden = false,
}) => {
  return (
    <StatusBar
      animated={true}
      backgroundColor={color}
      barStyle={styleBar}
      showHideTransition={statusTransition}
      hidden={hidden}
    />
  );
};

export default Index;
