import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

/** Variables globales */
import GlobalVars from "../../global/globalVars";

/** Utils */
import Alert from "../../utils/useAlert";

/** Componentes */
import StatusBar from "../../components/atoms/statusBar";
import Input from "../../components/atoms/input";
import Image from "../../components/atoms/image";
import Textos from "../../components/atoms/text";
import Buttom from "../../components/molecules/button";
import Modal from "../../components/templates/modalLoading";

/** Estilos */
import styles from "./styles";

const RegisterScreen = ({ navigation, onSubmit, openModal, errors }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data = {
    name: name,
    last_name: lastName,
    email: email,
    password: password,
    password_confirmation: confirmPassword,
    phone_number: tel,
    license_plate: "",
    model: "",
    year: "",
    profile_picture: "",
  };
  const validateData = () => {
    if (
      name.length == 0 ||
      lastName.length == 0 ||
      email.length == 0 ||
      tel.length == 0 ||
      password.length == 0 ||
      confirmPassword.length == 0
    ) {
      Alert("Mensaje", "Campos vacíos");
    } else {
      onSubmit(data);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
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
      <View style={styles.viewScrolling}>
        <ScrollView
          style={styles.viewScroll}
          contentContainerStyle={styles.contentContainer}
        >
          <Input placeholder="Nombres" changeText={setName} />
          <Input placeholder="Apellidos" changeText={setLastName} />
          <Input placeholder="Email" changeText={setEmail} />
          <Input placeholder="Telefono" changeText={setTel} />
          <Input placeholder="Placa" changeText={setTel} />
          <Input placeholder="Modelo" changeText={setTel} />
          <Input placeholder="Año" changeText={setTel} />
          <Input placeholder="Password" changeText={setPassword} />
          <Input
            placeholder="Confirmar password"
            changeText={setConfirmPassword}
          />
        </ScrollView>
      </View>
      <Buttom onSubmit={() => validateData()} label="Confirmar" />
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Textos
          text="Ya tiene una cuenta, Ingrese acá"
          size={15}
          color={GlobalVars.white}
        ></Textos>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;
