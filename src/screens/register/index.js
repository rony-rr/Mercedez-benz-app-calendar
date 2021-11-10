import React, { useState } from "react";
import Register from "./view";
import fetchHook from "../../utils/useFetch";
import GlobalVars from "../../global/globalVars";
import storage from '../../utils/useLocalStorage'
import Alert from '../../utils/useAlert';

const index = ({navigation}) => {

  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState();
  const urlRegister = `${GlobalVars.urlApi}register`;

  const register = async (data) => {
    setOpenModal(true);
    try {
      const response = await fetchHook.fetchPost(urlRegister, data);
      if (response.status == true) {
        storage.storeData('userInfo',response.user);
        storage.storeData('userToken',response.token);
        setOpenModal(false);
        navigation.navigate("TabNavigation");
      } else {
        setErrors(response.errors);
        setOpenModal(false);
        Alert("Mensaje","error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Register onSubmit={register} openModal={openModal} errors={errors}/>
  )
}

export default index
