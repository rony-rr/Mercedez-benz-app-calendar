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
          width={32}
          height={32}
          img={require("../../../../assets/logomb.png")}
          // mode="center"
        />
      </View>
      <View style={styles.headerContentLabel}>
        <Text text={label} size={30} />
      </View>
    </View>
  );
};

export default Header;
