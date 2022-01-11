import React, { useState } from "react";
import Login from "./view";
import fetchHook from "../../utils/useFetch";
import GlobalVars from "../../global/globalVars";
import storage from "../../utils/useLocalStorage";
import Alert from "../../utils/useAlert";

const index = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);
  const [restorePass, setRestorePass] = useState(false);

  const urlLogin = `${GlobalVars.urlApi}login`;

  const login = async (data) => {
    setOpenModal(true);
    try {
      const response = await fetchHook.fetchPost(urlLogin, data);
      if (response.status == true) {
        storage.storeData("userInfo", response.user);
        storage.storeData("userToken", response.token);
        setOpenModal(false);
        navigation.navigate("TabNavigation");
      } else {
        setOpenModal(false);
        Alert("Mensaje", "Datos incorrectos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRegister = () => navigation.navigate("register");

  const onHelp = () => {
    setRestorePass(!restorePass);
  };

  return (
    <Login
      openModal={openModal}
      restorePass={restorePass}
      onSubmit={login}
      onRegister={onRegister}
      onHelp={onHelp}
      navigation={navigation}
    />
  );
};

export default index;
