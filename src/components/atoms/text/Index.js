import React from "react";
import { Text } from "react-native";

/** Variables globales */
import GlobalVars from "../../../global/globalVars";

/** Estilos */
import styles from "./style";

const Textos = (props) => {
  const { text, size, color } = props;
  const propsStyles = {
    fontSize: size,
    color: color || GlobalVars.white
  };
  return <Text style={[styles.label, propsStyles]}>{text}</Text>;
};

export default Textos;
