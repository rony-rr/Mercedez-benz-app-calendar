import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/molecules/header/index";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "../../components/atoms/icon/index";
import GlobalVars from "../../global/globalVars";

import StatusBar from "../../components/atoms/statusBar";
import ImgProfile from "../../components/molecules/imgProfile";
import BtnOption from "../../components/organisms/btnOption";
import Input from "../../components/atoms/input";

import Styles from "./styles";

const styles = Styles;

const index = ({ imgProfile, dataUser, onSubmit, cita }) => {
  console.log(dataUser);
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(74,89,95,0.5)", "black"]}
        style={styles.background}
      >
        <Header label="Perfil" />
        <View style={{ alignItems: "center" }}>
          <ImgProfile img={imgProfile} data={dataUser} />
        </View>

        <View style={{ width: GlobalVars.windowWidth, alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              marginVertical: 10,
              fontFamily: "Daimler",
            }}
          >
            Mi Mercedes
          </Text>
          <Input placeholder={"Cita Pendiente " + cita.date} editable={false} />
          <Input
            placeholder={
              dataUser.license_plate == null
                ? "Sin datos..."
                : dataUser.license_plate
            }
            editable={false}
          />
          <Input
            placeholder={dataUser.year == null ? "Sin datos..." : dataUser.year}
            editable={false}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default index;
