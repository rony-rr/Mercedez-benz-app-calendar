import React, { useState } from "react";
import { Modal, View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import GlobalVars from "../../../global/globalVars";

import fetchHook from "../../../utils/useFetch";

import Loading from "../../atoms/loading";
import Input from "../../atoms/input";
import Textos from "../../atoms/text";
import Buttom from "../../molecules/button";

import styles from "./styles";

const URL_RESTORE_PASS = `${GlobalVars.urlApi}password_reset`;

const ModalResetPass = (props) => {
  const { openModal, onHelp } = props;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorInService, setErrorInService] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [succes, setSuccess] = useState(false);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateData = () => {
    setLoading(true);
    if (validateEmail(email)) sendData();

    setTimeout(() => {
      setErrorEmail(true);
      setLoading(false);
    }, 1500);
  };

  const sendData = () => {
    setTimeout(async () => {
      try {
        const data = {
          email: email,
        };

        const response = await fetchHook.fetchPost(URL_RESTORE_PASS, data);
        if (response === undefined) setErrorInService(true);
        if (response.status && response.message === "success") setSuccess(true);
        if (!response.status) setErrorEmail(true);
      } catch (error) {
        setErrorInService(true);
      }
      setLoading(false);
    }, 1500);
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
            {!errorEmail && !errorInService && !succes && (
              <>
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
              </>
            )}
            {errorEmail && (
              <>
                <Textos
                  text="Error en el correo ingresado."
                  size={25}
                  color={GlobalVars.white}
                />
                <Buttom
                  onSubmit={() => setErrorEmail(!errorEmail)}
                  label="Reintentar"
                />
              </>
            )}
            {errorInService && (
              <>
                <Textos
                  text="Error en el servicio Web, intente en breve."
                  size={25}
                  color={GlobalVars.white}
                />
                <Buttom
                  onSubmit={() => setErrorInService(!errorInService)}
                  label="Reintentar"
                />
              </>
            )}
            {succes && (
              <>
                <Textos
                  text="Se envió la restauración de su cuenta, 
                        revise su correo en breve."
                  size={25}
                  color={GlobalVars.white}
                />
                <Buttom onSubmit={onHelp} label="Finalizar" />
              </>
            )}
          </View>
        )}
      </View>
    </Modal>
  );
};

export default ModalResetPass;
