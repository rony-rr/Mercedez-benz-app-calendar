import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";

import GlobalVars from "../../global/globalVars";

import Icon from "../../components/atoms/icon";
import Image from "../../components/atoms/image";
import Header from "../../components/molecules/header";

import Styles from "./styles";

const styles = Styles;

const Index = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(74,89,95,0.5)", "black"]}
        style={styles.background}
      >
        <Header label="Agendar Cita" />
        <ScrollView
          style={styles.viewScroll}
          contentContainerStyle={styles.contentContainer}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
            }}
          >
            <Icon iconName="tool" color="white" size={40} />
            <View style={{ justifyContent: "center", marginHorizontal: 15 }}>
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  fontFamily: GlobalVars.fontFamily,
                }}
              >
                Mantenimiento
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              img={require("../../../assets/APP_OFFER.png")}
              width={GlobalVars.windowWidth / 1.05}
              height={GlobalVars.windowWidth / 1.4}
              mrTop={15}
              mrBottom={15}
              mode="stretch"
            />
            {/* <Text style={styles.info}>
              Un buen mantenimiento periodico ,garantiza el eficiente
              funcionamiento de tu estrella,por ello te invitamos aque agendes
              tu cita de servicio,desde la comodidad de tu casa a través de este
              medio.
            </Text>
            <Text style={styles.info}>
              Contamos con herramientas y equipo especializado, como el Star
              Diagnosis, que brinda la información electronica direcamtente dede
              el corazón de tu Mercedes , mostrando aspectos que debe ser
              corregidos.
            </Text>
            <Text style={styles.info}>
              Todos nuestros mantenimientos se rigen por guias de servicio
              online , que brinda directamente el fabricante. Nuestro servicio
              es personalizado y garantizado.
            </Text> */}
          </View>
          <TouchableOpacity
            style={styles.btnCreate}
            onPress={() => navigation.navigate("addShelude")}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Agendar</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Index;
