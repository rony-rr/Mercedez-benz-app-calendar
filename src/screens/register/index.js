import React, { useState } from "react";

/** Variables globales */
import GlobalVars from "../../global/globalVars";

/** Utils */
import fetchHook from "../../utils/useFetch";
import storage from "../../utils/useLocalStorage";
import Alert from "../../utils/useAlert";

/** Componentes */
import Register from "./view";

const Index = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState();
  const urlRegister = `${GlobalVars.urlApi}register`;

  const register = async (data) => {
    setOpenModal(true);
    try {
      const response = await fetchHook.fetchPost(urlRegister, data);
      if (response.status == true) {
        storage.storeData("userInfo", response.user);
        storage.storeData("userToken", response.token);
        setOpenModal(false);
        navigation.navigate("TabNavigation");
      } else {
        setErrors(response.errors);
        setOpenModal(false);
        Alert("Mensaje", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Register
      onSubmit={register}
      openModal={openModal}
      navigation={navigation}
      errors={errors}
    />
  );
};

export default Index;
