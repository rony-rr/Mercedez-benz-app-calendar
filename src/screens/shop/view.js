import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Linking } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

/** Variables globales */
import GlobalVars from "../../global/globalVars";

/** Componentes */
import StatusBar from "../../components/atoms/statusBar";
import Header from "../../components/molecules/header";
import Modal from "../../components/templates/modalProduct";
import CardProduct from "../../components/organisms/cardProduct";

/** Styles */
import styles from "./styles";

const ShopScreen = ({ data }) => {
  const [openM, setOpenM] = useState(false);
  const [producto, setProducto] = useState(null);

  const openModal = (product) => {
    setProducto(product);
    setOpenM(true);
  };

  const closeModal = () => {
    setOpenM(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        color={GlobalVars.black}
        styleBar={Platform.OS === "android" ? "light-content" : "light-content"}
        statusTransition="slide"
      />
      <Modal data={producto} visible={openM} submit={closeModal} />
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(74,89,95,0.5)", GlobalVars.black]}
        style={styles.background}
      >
        <Header label="Boutique" />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CardProduct
              onSubmit={openModal}
              img={item.main_image}
              data={item}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListStyle}
        />
        <TouchableOpacity
          style={styles.floatButton}
          onPress={() =>
            Linking.openURL(
              `https://wa.me/50372102380?text=Hola, quisiera más información sobre los productos en el cátalogo de la aplicación Mercedes Connect`
            )
          }
        >
          <MaterialCommunityIcons name="whatsapp" size={40} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ShopScreen;
