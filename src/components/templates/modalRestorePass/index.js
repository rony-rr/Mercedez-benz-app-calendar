import React, { useState } from "react";
import { Modal, View, TouchableOpacity, Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import GlobalVars from "../../../global/globalVars";

import Loading from "../../atoms/loading";
import Input from "../../atoms/input";
import Textos from "../../atoms/text";
import Buttom from "../../molecules/button";

import styles from "./styles";

const ModalResetPass = (props) => {
  const { openModal, onHelp } = props;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateData = () => {
    setLoading(true);
    if (email) return sendData();

    setTimeout(() => {
      setLoading(false);
      Alert.alert("Correo incorrecto");
    }, 1500);
  };

  const sendData = () => {
    setTimeout(() => {
      console.log("Envío aquí");
      setLoading(false);
    }, 1500);

    return 0;
  };

  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <View style={styles.view}>
        {loading && <Loading size="small" color={GlobalVars.white} />}
        {!loading && (
          <View style={styles.container}>
            <TouchableOpacity
              style={{ position: "absolute", top: 15, right: 15 }}
              onPress={onHelp}
            >
              <AntDesign
                name="closecircleo"
                size={24}
                color={GlobalVars.white}
              />
            </TouchableOpacity>
            <Textos
              text="Recuperación de contraseña"
              size={25}
              color={GlobalVars.white}
            />
            <View style={{ paddingLeft: "15%" }}>
              <Input placeholder="Ingresar correo" changeText={setEmail} />
            </View>
            <Buttom
              onSubmit={() => validateData()}
              label="Restaurar contraseña"
            />
          </View>
        )}
      </View>
    </Modal>
  );
};

export default ModalResetPass;
