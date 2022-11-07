import React from "react";
import { Text } from "react-native";

import styles from "./styles";

const Index = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item, index) => {
        return (
          <Text key={index.toString()} style={styles.label}>
            * {item}
          </Text>
        );
      })}
    </>
  );
};

export default Index;
