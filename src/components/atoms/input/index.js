import React from "react";
import {TextInput} from "react-native";
import styles from "./styles";

const index = (props) => {
  const {value,type,secure,placeholder,changeText}= props;
  return (
      <TextInput
        value={value}
        secureTextEntry={secure}
        onChangeText={changeText}  
        placeholder={placeholder}
        placeholderTextColor='#E8E8E8'
        style={styles.input}
      />
  );
};


export default index;