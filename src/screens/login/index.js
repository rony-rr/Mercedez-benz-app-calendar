import React, { useState } from "react";
<<<<<<< HEAD
import Login from "./view";
import fetchHook from "../../utils/useFetch";
import GlobalVars from "../../global/globalVars";
import storage from '../../utils/useLocalStorage'
import Alert from '../../utils/useAlert'
=======
import { View, Text } from "react-native";
import Login from "./view";
import fetchHook from "../../utils/useFetch";
import GlobalVars from "../../global/globalVars";

>>>>>>> 71648aaca1b9fd91895ef6a649e30b20229f4455
const index = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);

  const urlLogin = `${GlobalVars.urlApi}login`;

  const login = async (data) => {
    setOpenModal(true);
    try {
      const response = await fetchHook.fetchPost(urlLogin, data);
<<<<<<< HEAD
      if (response.status == true) {
        storage.storeData('userToken',response.token);
        setOpenModal(false);
        navigation.navigate("TabNavigation");
=======
      if (response.status) {
        navigation.navigate("TabNavigation");
        setOpenModal(false);
>>>>>>> 71648aaca1b9fd91895ef6a649e30b20229f4455
      } else {
        setOpenModal(false);
        Alert("Mensaje", "Datos incorrectos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <Login openModal={openModal} onSubmit={login} />;
};

export default index;
