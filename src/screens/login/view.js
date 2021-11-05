import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import GlobalVars from "../../global/globalVars";
import Input from "../../components/atoms/input";
import Buttom from "../../components/molecules/button";
import Image from "../../components/atoms/image";
<<<<<<< HEAD
import Modal from "../../components/templates/modalLoading";
import Alert from "../../utils/useAlert";
import LabelBtn from '../../components/molecules/labelTouchable'

const view = ({ onSubmit,onRegister,onHelp,openModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

=======

const view = ({ onSubmit }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
>>>>>>> 71648aaca1b9fd91895ef6a649e30b20229f4455
  const data = {
    email: email,
    password: password,
  };
<<<<<<< HEAD

  const validateData = () => {
    if (email.length == 0 || password.length == 0) {
      Alert("Mensaje", "Campos vacíos");
    } else {
      onSubmit(data);
    }
  };

=======
>>>>>>> 71648aaca1b9fd91895ef6a649e30b20229f4455
  return (
    <View style={styles.view}>
      <Image
        img={require("../../../assets/logo.png")}
        width={GlobalVars.windowWidth / 8}
        height={GlobalVars.windowHeight / 8}
        mode="center"
      />
      <Input placeholder="Ingresar correo" changeText={setEmail} />
      <Input placeholder="Ingresar password" changeText={setPassword} />
      <Buttom onSubmit={() => validateData()} label="Acceder" />
      <View style={styles.footer}>
        <LabelBtn
          onPress={onRegister}
          label='Registrarme'
        /> 
        <LabelBtn
          label='Necesitas ayuda?'
          onPress={onHelp}
        />         
      </View>
    </View>
  );
};

export default view;
