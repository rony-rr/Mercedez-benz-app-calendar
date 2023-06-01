import React, { useEffect, useState } from "react";
import { Linking } from "react-native";

import { useFocusEffect } from "@react-navigation/native";

// Variables globales
import GlobalVars from "../../global/globalVars";

// Utils
import fetchHook from "../../utils/useFetch";
import storage from "../../utils/useLocalStorage";

// Views
import Home from "./view";

const Index = ({ navigation }) => {
  const [imageProfile, setImageProfile] = useState(null);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    getToken("userToken", "userInfo");
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getToken("userToken", "userInfo");
    }, [])
  );

  const getToken = async (token, info) => {
    try {
      const response = await storage.getItem(token);
      const infoUser = await storage.getItem(info);
      if (response !== null) {
        getPicture(response);
        setDataUser(infoUser);
      } else {
        navigation.navigate("login");
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

  const onSubmit = (screen) => {
    if (screen == "link") {
      Linking.openURL("https://experienciamercedes.com");
    } else {
      navigation.navigate(screen);
    }
  };

  return (
    <Home imgProfile={imageProfile} dataUser={dataUser} onSubmit={onSubmit} />
  );
};

export default Index;
