import React from "react";

import { View } from "react-native";

import Image from "../../atoms/image";
import Loading from "../../atoms/loading";

import GlobalVars from "../../../global/globalVars";

import styles from "./styles";

const index = () => {
  return (
    <View style={styles.view}>
      <Image
        width={GlobalVars.windowWidth / 6}
        height={GlobalVars.windowHeight / 4}
        img={require("../../../../assets/logomb.png")}
        mode="contain"
      />
      <Loading size="small" color={GlobalVars.white} />
    </View>
  );
};

export default index;
