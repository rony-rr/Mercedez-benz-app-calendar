import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import Header from "../../components/molecules/header/index";

import styles from "./styles";
const Element = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.view}>
      <Header label="" />

      <View style={{ alignItems: "center" }}>
        {/* <TouchableOpacity style={styles.btnPhoto}>
        <AntDesign name="camerao" size={45} color="white" />
        <View
         style={styles.btnAdd}
        >
        <Octicons name="plus-small" size={45} color="white" />
        </View>
      </TouchableOpacity> */}
        <TextInput
          placeholder="Nombre"
          placeholderTextColor="white"
          style={styles.input}
        />
        <TextInput
          placeholder="Apellido"
          placeholderTextColor="white"
          style={styles.input}
        />
        <TextInput
          placeholder="Correo Electronico"
          placeholderTextColor="white"
          style={styles.input}
        />
        <TextInput
          placeholder="Teléfono"
          placeholderTextColor="white"
          style={styles.input}
        />
        <TextInput
          placeholder="Modelo"
          placeholderTextColor="white"
          style={styles.input}
        />
        <TextInput
          placeholder="Año"
          placeholderTextColor="white"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.btnCreate}
          onPress={() => navigation.navigate("TabNavigation")}
        >
          <Text style={{ color: "white" }}>Crear perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Element;
