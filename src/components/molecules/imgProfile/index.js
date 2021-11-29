import React from "react";
import { View, Text } from "react-native";
import Image from "../../atoms/image";
import styles from "./styles";
import GlobalVars from "../../../global/globalVars";
const index = ({ img, data }) => {
  return (
    <View style={styles.view}>
      <Image
        img={{ uri: img }}
        width={GlobalVars.windowWidth / 2.75}
        height={GlobalVars.windowWidth / 2.75}
        mrTop={30}
        radius={75}
      />
      <Text style={styles.name}>
        {data.name} {data.last_name}
      </Text>
    </View>
  );
};

export default index;
