import React from "react";
import { TouchableOpacity, View } from "react-native";

import GlobalVars from "../../../global/globalVars";

import Image from "../../atoms/image";
import Texto from "../../atoms/text";

import styles from "./styles";

const Index = ({ img, onSubmit, data }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSubmit(data)} style={styles.card}>
        <Image
          width={GlobalVars.windowWidth / 2}
          height={GlobalVars.windowHeight / 8}
          img={{
            uri: `https://experienciamercedes.com/mbconnect/admin/uploads/${img}`,
          }}
          mode="contain"
        />
      </TouchableOpacity>
      <View style={styles.viewText}>
        <Texto text={data.title} />
      </View>
    </View>
  );
};

export default Index;
