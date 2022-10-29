import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Octicons, AntDesign } from "@expo/vector-icons";

import GlobalVars from "../../global/globalVars";

import Text from "../../components/atoms/text";
import Buttom from "../../components/molecules/button";

import styles from "./styles";

const Element = ({ onSubmit, uploadPic, pickedImagePath = null }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      {!pickedImagePath && (
        <TouchableOpacity style={styles.btnPhoto} onPress={onSubmit}>
          <AntDesign name="camerao" size={100} color="white" />
          <View style={styles.btnAdd}>
            <Octicons name="plus-small" size={45} color="white" />
          </View>
        </TouchableOpacity>
      )}

      {pickedImagePath && (
        <TouchableOpacity
          style={[styles.btnPhoto, { backgroundColor: "transparent" }]}
          onPress={onSubmit}
        >
          <Image
            style={{
              width: GlobalVars.windowWidth / 2.75,
              height: GlobalVars.windowWidth / 2.75,
              borderRadius: 75,
            }}
            source={{
              uri: pickedImagePath,
            }}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={onSubmit}>
        <Text text="Agregar foto de perfil" onPress={onSubmit} />
      </TouchableOpacity>

      {pickedImagePath && (
        <Buttom label="CARGAR" onSubmit={() => uploadPic()} />
      )}

      <Buttom
        label="OMITIR"
        onSubmit={() => navigation.navigate("TabNavigation")}
      />
    </View>
  );
};

export default Element;
