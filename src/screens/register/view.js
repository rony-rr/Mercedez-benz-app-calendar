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
import Errors from "../../components/templates/modalErrors";
/** Estilos */
import styles from "./styles";

const RegisterScreen = ({
  onSubmitError,
  navigation,
  onSubmit,
  openModal,
  errorsRegister,
  errorsVisible,
}) => {
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [tel, setTel] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState(" ");
  const [licensePlate, setLicense] = useState(" ");
  const [model, setModel] = useState(" ");
  const [year, setYear] = useState(" ");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data = {
    name: name,
    last_name: lastName,
    email: email,
    password: password,
    password_confirmation: confirmPassword,
    phone_number: tel,
    license_plate: licensePlate,
    model: model,
    year: year,
    profile_picture: "",
  };

  const validateData = () => {
    if (
      name.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      password.length < 7 ||
      confirmPassword.length < 7
    ) {
      Alert("Mensaje", "Campos obligatorios vacíos");
    } else {
      onSubmit(data);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        color={GlobalVars.black}
        styleBar={Platform.OS === "android" ? "light-content" : "light-content"}
        statusTransition="slide"
      />
      <Errors
        visible={errorsVisible}
        errors={errorsRegister}
        onSubmit={onSubmitError}
      />
      <Modal openModal={openModal} />
      <Image
        img={require("../../../assets/logomb.png")}
        width={GlobalVars.windowWidth / 6}
        height={GlobalVars.windowHeight / 6}
        mode="center"
      />
      <View style={styles.viewScrolling}>
        <ScrollView
          style={styles.viewScroll}
          contentContainerStyle={styles.contentContainer}
        >
          <Input placeholder="Nombres *" changeText={setName} />
          <Input placeholder="Apellidos *" changeText={setLastName} />
          <Input placeholder="Correo electrónico *" changeText={setEmail} />
          <Input placeholder="Teléfono" changeText={setTel} />
          <Input placeholder="Placa" changeText={setLicense} />
          <Input placeholder="Modelo" changeText={setModel} />
          <Input placeholder="Año" changeText={setYear} />
          <Input placeholder="Contraseña *" changeText={setPassword} />
          <Input
            placeholder="Confirmar contraseña *"
            changeText={setConfirmPassword}
          />
        </ScrollView>
      </View>
      <Buttom onSubmit={() => validateData()} label="Siguiente" />
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Textos
          text="Ya tiene una cuenta, Iniciar sesión"
          size={15}
          color={GlobalVars.white}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;
