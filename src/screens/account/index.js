import React, { useEffect, useState } from "react";
import {Linking} from "react-native";

// Variables globales
import GlobalVars from '../../global/globalVars';
// Utils
import fetchHook from "../../utils/useFetch";
import storage from "../../utils/useLocalStorage";
// Views
import Home from './view'

const index = ({navigation}) => {
  
  const [imageProfile, setImageProfile] = useState(null);
  const [dataUser, setDataUser] = useState([ ]);
  const [dataCita, setDataCita] = useState({date:""});
  useEffect(() => {
    getToken("userToken","userInfo");
  }, []);

  const getToken = async (token,info) => {
    try {
      const response = await storage.getItem(token);
      const infoUser = await storage.getItem(info);
      if (response !== null) {
        getPicture(response)
        getCita(response)
        setDataUser(infoUser)
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
      setImageProfile(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getCita = async (token) =>{
    const urlCitas = `https://experienciamercedes.com/mbconnect/admin/api/v1/appointments`;
    try {
      const response = await fetchHook.fetchGet(urlCitas, token);
      if(response !== null){
        setDataCita(response.appointments[response.appointments.length-1])
      }else{
        console.log('si citas')
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <Home
      imgProfile={imageProfile}
      dataUser={dataUser}
      cita={dataCita}
      
    />
  )
}

export default index
