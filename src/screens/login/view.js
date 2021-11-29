import React, { useState } from "react";
import { View, Platform } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

/** Variables globales */
import GlobalVars from "../../global/globalVars";

/** Utils */
import Alert from "../../utils/useAlert";

/** Componentes */
import StatusBar from "../../components/atoms/statusBar";
import Textos from "../../components/atoms/text";
import Input from "../../components/atoms/input";
import Image from "../../components/atoms/image";
import Buttom from "../../components/molecules/button";
import LabelBtn from "../../components/molecules/labelTouchable";
import Modal from "../../components/templates/modalLoading";

/** Estilos */
import styles from "./styles";

const LoginScreen = ({ onSubmit, onRegister, onHelp, openModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email: email,
    password: password,
  };

  const validateData = () => {
    if (email.length == 0 || password.length == 0) {
      Alert("Mensaje", "Campos vacíos");
    } else {
      onSubmit(data);
    }
  };

  return (
    <SafeAreaView style={styles.view}>
      <StatusBar
        color={GlobalVars.black}
        styleBar={Platform.OS === "android" ? "light-content" : "light-content"}
        statusTransition="slide"
      />
      <Modal openModal={openModal} />
      <Image
        img={require("../../../assets/logo.png")}
        width={GlobalVars.windowWidth / 6}
        height={GlobalVars.windowHeight / 6}
        mode="center"
      />
      <Textos text="Iniciar Sesión" size={28} color={GlobalVars.white} />
      <Input placeholder="Ingresar correo" changeText={setEmail} />
      <Input
        placeholder="Ingresar contraseña"
        changeText={setPassword}
        secure={true}
      />
      <Buttom onSubmit={() => validateData()} label="Iniciar sesión" />
      <View style={styles.footer}>
        <LabelBtn onPress={onRegister} label="Registrarme" />
        <LabelBtn label="Necesitas ayuda?" onPress={onHelp} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
