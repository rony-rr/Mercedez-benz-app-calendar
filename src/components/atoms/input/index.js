import React from "react";
import { TextInput } from "react-native";
import GlobalVars from "../../../global/globalVars";
import styles from "./styles";

const index = (props) => {
  const { value, type, secure, placeholder, changeText, editable } = props;
  return (
    <TextInput
      style={styles.input}
      value={value}
      secureTextEntry={secure}
      onChangeText={changeText}
      editable={editable}
      placeholder={placeholder}
      placeholderTextColor={GlobalVars.grayPlaceholder}
    />
  );
};

export default index;
