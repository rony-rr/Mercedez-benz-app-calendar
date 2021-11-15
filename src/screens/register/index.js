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
  const [errorsRegister, setErrorsRegister] = useState([]);
  const [errorsVisible, setErrorsVisible] = useState(false)
  const urlRegister = `${GlobalVars.urlApi}register`;

  const register = async (data) => {
    setOpenModal(true);
    try {
      const response = await fetchHook.fetchPost(urlRegister, data);
      console.log(response)
      if (response.status == true) {
        storage.storeData("userInfo", response.user);
        storage.storeData("userToken", response.token);
        setOpenModal(false);
        navigation.navigate("uploadPic");
      } else {
        setErrorsRegister(Object.values(response.errors));
        console.log(Object.values(response.errors))
        setErrorsVisible(true)
        setOpenModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const viewErrors = ()=>{
    setErrorsVisible(false)
  }
  return (
    <Register
      onSubmit={register}
      openModal={openModal}
      navigation={navigation}
      errorsRegister={errorsRegister}
      errorsVisible={errorsVisible}
      onSubmitError={viewErrors}
    />
  );
};

export default Index;
