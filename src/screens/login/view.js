import React, { useState } from "react";
import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

/** Variables globales */
import GlobalVars from "../../global/globalVars";

/** Utils */
import Alert from "../../utils/useAlert";

/** Componentes */
import StatusBar from "../../components/atoms/statusBar";
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
        color="white"
        styleBar="light-content"
        statusTransition="slide"
      />
      <Modal openModal={openModal} />
      <Image
        img={require("../../../assets/logo.png")}
        width={GlobalVars.windowWidth / 8}
        height={GlobalVars.windowHeight / 8}
        mode="center"
      />
      <Input placeholder="Ingresar correo" changeText={setEmail} />
      <Input placeholder="Ingresar contraseña" changeText={setPassword} />
      <Buttom onSubmit={() => validateData()} label="Acceder" />
      <View style={styles.footer}>
        <LabelBtn onPress={onRegister} label="Registrarme" />
        <LabelBtn label="Necesitas ayuda?" onPress={onHelp} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
