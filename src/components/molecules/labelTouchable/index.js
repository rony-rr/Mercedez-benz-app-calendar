import React from "react";
import { TouchableOpacity } from "react-native";

import Text from "../../atoms/text";

import styles from "./styles";

const Index = (props) => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text text={label} />
    </TouchableOpacity>
  );
};

export default Index;
