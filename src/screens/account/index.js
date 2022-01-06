import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import { useFocusEffect } from "@react-navigation/native";

// Variables globales
import GlobalVars from "../../global/globalVars";

// Utils
import fetchHook from "../../utils/useFetch";
import storage from "../../utils/useLocalStorage";

// Views
import Home from "./view";

const index = ({ navigation }) => {
  const [tokenUser, setTokenUser] = useState(null);
  const [imageProfile, setImageProfile] = useState(null);
  const [dataUser, setDataUser] = useState([]);
  const [dataCita, setDataCita] = useState([]);

  useEffect(() => {
    getToken("userToken", "userInfo");
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getToken("userToken", "userInfo");
      setTimeout(() => {
        getToken("userToken", "userInfo");
      }, 3500);
    }, [])
  );

  const getToken = async (token, info) => {
    try {
      const response = await storage.getItem(token);
      const infoUser = await storage.getItem(info);
      if (response !== null) {
        setTokenUser(response);
        getPicture(response);
        getCita(response);
        setDataUser(infoUser);
      } else {
        navigation.navigate("account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPicture = async (token) => {
    const urlPicture = `${GlobalVars.urlApi}uri`;
    try {
      const response = await fetchHook.fetchGet(urlPicture, token);
      setImageProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCita = async (token) => {
    const urlCitas = `${GlobalVars.urlApi}appointments/user`;
    try {
      const response = await fetchHook.fetchGet(urlCitas, token);
      let res = response.appointments;
      // console.log({urlCitas});
      if (res) {
        setDataCita(res);
      } else {
        // console.log("si citas");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutProcess = () => {
    storage.clearAll();
    navigation.navigate("account");
  };

  const cancelDate = async () => {
    if (tokenUser) {
      const urlCitas = `${GlobalVars.urlApi}appointments/user/cancel`;
      try {
        const response = await fetchHook.fetchGet(urlCitas, tokenUser);
        console.log(response);
        if (response !== null) {
          Alert.alert("Cita cancelada");
          getCita(tokenUser);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Home
      imgProfile={imageProfile}
      dataUser={dataUser}
      cita={dataCita}
      navigation={navigation}
      logoutProcess={logoutProcess}
      cancelDate={cancelDate}
    />
  );
};

export default index;
