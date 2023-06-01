import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import GlobalVars from "../../../global/globalVars";

import Icon from "../../atoms/icon";

import styles from "./styles";

const Index = ({ icon, label, onSubmit, screen }) => {
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

export default Index;
