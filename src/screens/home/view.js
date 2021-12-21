import React from "react";
import { View, Platform } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

/** Variables globales */
import GlobalVars from "../../global/globalVars";

import StatusBar from "../../components/atoms/statusBar";
import Header from "../../components/molecules/header";
import ImgProfile from "../../components/molecules/imgProfile";
import BtnOption from "../../components/organisms/btnOption";

import styles from "./styles";

const HomeScreen = ({ imgProfile, dataUser, onSubmit }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        color={GlobalVars.black}
        styleBar="light-content"
        statusTransition="slide"
      />
      <LinearGradient
        colors={["rgba(74,89,95,0.5)", GlobalVars.black]}
        style={styles.background}
      >
        <Header label="Inicio" />
        <ImgProfile img={imgProfile} data={dataUser} />
        <BtnOption
          icon="calendar"
          label="Agendar cita"
          screen="stackShelude"
          onSubmit={onSubmit}
        />
        <BtnOption
          icon="car"
          label="Mercedes Benz Experiencie"
          screen="link"
          onSubmit={onSubmit}
        />
        <BtnOption
          icon="tago"
          label="Shop"
          screen="stackShop"
          onSubmit={onSubmit}
        />
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
