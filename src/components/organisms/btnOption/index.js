import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Image from "../../atoms/image";
import styles from "./styles";
import Icon from "../../atoms/icon";
import GlobalVars from "../../../global/globalVars";
const index = ({ icon, label, onSubmit, screen }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSubmit(screen)}>
      <View style={styles.card}>
        <View style={styles.cardContentIcon}>
          <Icon iconName={icon} color="white" size={50} />
        </View>
        <View style={styles.cardContentLabel}>
          <Text
            style={{
              color: "white",
              fontFamily: GlobalVars.fontFamily,
              fontSize: 20,
            }}
          >
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default index;
