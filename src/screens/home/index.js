import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet,Image} from 'react-native'
import Header from "../../components/molecules/header/index"
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "../../components/atoms/icon/index"
import GlobalVars from '../../global/globalVars';
import fetchHook from "../../utils/useFetch";
import storage from "../../utils/useLocalStorage";
import Home from './view'
const index = () => {
  const [imageProfile, setImageProfile] = useState(null);
  useEffect(() => {
    getToken("userToken");
  }, []);

  const getToken = async (key) => {
    try {
      const response = await storage.getItem(key);
      
      if (response !== null) {
        
        getPicture(response)
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
      const response = await fetchHook.fetchGet(urlPicture,token);
      setImageProfile(response.data)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Home
      imgProfile={imageProfile}
    />
  )
}

export default index
