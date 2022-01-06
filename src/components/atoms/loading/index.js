import React from "react";
import {ActivityIndicator} from "react-native";

const Loading = ({size,color}) => {
  return <ActivityIndicator size={size} color={color} />
};

export default Loading;
