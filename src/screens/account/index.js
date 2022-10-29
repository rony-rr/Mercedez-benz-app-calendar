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

const Index = ({ navigation }) => {
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
      if (response?.status) {
        setImageProfile(response?.data || null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCita = async (token) => {
    const urlCitas = `${GlobalVars.urlApi}appointments/user`;
    try {
      const response = await fetchHook.fetchGet(urlCitas, token);
      // console.log("****************");
      // console.log({ response });
      let res = response?.appointments;
      if (res) {
        setDataCita(res);
      } else {
        setDataCita([]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Ocurrio un error, intente nuevamente");
    }
  };

  const logoutProcess = () => {
    storage.clearAll();
    navigation.navigate("account");
  };

  const cancelDate = async (idCita) => {
    if (tokenUser) {
      const urlCitas = `${GlobalVars.urlApi}appointments/user/cancel`;
      const data = {
        appointment_id: idCita,
        _method: "PUT",
      };
      try {
        const response = await fetchHook.fetchPost(urlCitas, data, tokenUser);
        // console.log({ response });
        if (response?.status) {
          Alert.alert("Cita cancelada");
          getCita(tokenUser);
        } else {
          Alert.alert("Ocurrio un error, intente nuevamente");
        }
      } catch (error) {
        console.log(error);
        Alert.alert("Ocurrio un error, intente nuevamente");
      }
    }
  };

  const dropCita = async (idCita) => {
    if (tokenUser) {
      const urlCitas = `${GlobalVars.urlApi}appointments/user/delete`;
      const data = {
        appointment_id: idCita,
        _method: "DELETE",
      };
      try {
        const response = await fetchHook.fetchPost(urlCitas, data, tokenUser);
        // console.log({ response });
        if (response?.status) {
          Alert.alert("Cita eliminada");
          getCita(tokenUser);
        } else {
          Alert.alert("Ocurrio un error, intente nuevamente");
        }
      } catch (error) {
        console.log(error);
        Alert.alert("Ocurrio un error, intente nuevamente");
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
      dropCita={dropCita}
    />
  );
};

export default Index;
