import React from "react";
import { View } from "react-native";

/** Variables globales */
import GlobalVars from "../../../global/globalVars";

/** Componentes */
import Image from "../../atoms/image";
import Text from "../../atoms/text";

import styles from "./styles";

const Header = ({ label }) => {
  return (
    <View style={styles.view}>
      <View style={styles.headerContentLogo}>
        <Image
          width={GlobalVars.windowWidth / 8}
          height={GlobalVars.windowWidth / 8}
          img={require("../../../../assets/logo.png")}
          mode="center"
        />
      </View>
      <View style={styles.headerContentLabel}>
        <Text text={label} size={30} />
      </View>
    </View>
  );
};

export default Header;
