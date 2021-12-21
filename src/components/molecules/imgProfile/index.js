import React from "react";
import { View, Text } from "react-native";
import Image from "../../atoms/image";
import styles from "./styles";
import GlobalVars from "../../../global/globalVars";
const index = ({ img, data }) => {
  const imgSrc = img
    ? { uri: img }
    : require("../../../../assets/avatar-default.png");
  return (
    <View style={styles.view}>
      <Image
        img={imgSrc}
        width={130}
        height={130}
        mrTop={30}
        radius={img ? 75 : 0}
      />
      <Text style={styles.name}>
        {data.name} {data.last_name}
      </Text>
    </View>
  );
};

export default index;
