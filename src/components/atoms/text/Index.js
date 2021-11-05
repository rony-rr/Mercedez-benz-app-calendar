import React from "react";
import {Text} from "react-native";
import styles from "./style"

const Textos = (props) => {
  const {text,size}=props;
  const propsStyles= {
    fontSize: size,
  }
  return (
      <Text style={[styles.label,propsStyles]}>{text}</Text>
  );
};

export default Textos;
