import React, { useState } from "react";
import { ScrollView,Text } from "react-native";
import styles from "./styles";
import GlobalVars from "../../global/globalVars";
import Input from "../../components/atoms/input";
import Buttom from "../../components/molecules/button";
import Image from "../../components/atoms/image";
import Alert from "../../utils/useAlert";
import LabelBtn from '../../components/molecules/labelTouchable'
import Modal from '../../components/templates/modalLoading'

const view = ({ onSubmit,openModal,errors}) => {
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
    phone_number:tel,
    license_plate:"" ,
    model: "",
    year: "", 
    profile_picture: "" 
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
    <ScrollView
      style={styles.view}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <Modal openModal={openModal}/>
      <Image
        img={require("../../../assets/logo.png")}
        width={GlobalVars.windowWidth / 8}
        height={GlobalVars.windowHeight / 8}
        mode="center"
      />
      <Input placeholder="nombres" changeText={setName} />
      <Input placeholder="apellidos" changeText={setLastName} />
      <Input placeholder="email" changeText={setEmail} />
      <Input placeholder="telefono" changeText={setTel} />
      <Input placeholder="password" changeText={setPassword} />
      <Input placeholder="Confirmar password" changeText={setConfirmPassword} />
      <Buttom onSubmit={() => validateData()} label="Confirmar" />
    </ScrollView>
  )
}

export default view
