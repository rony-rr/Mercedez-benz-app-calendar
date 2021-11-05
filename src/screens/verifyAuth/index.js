import React, { useEffect, useState } from "react";
import storage from "../../utils/useLocalStorage";
import Splash from "../../components/templates/splashLoading";
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = ({navigation}) => {
 
  const [verificandoAuth, setVerificandoAuth] = useState(null);

  useEffect(() => {
    getToken('userToken');
  }, []);  

  const getToken = async (key) => {
    try {
      const response = await storage.getItemData(key);
      if (response !== null) {
        navigation.navigate('TabNavigation')
      } else {
        navigation.navigate('login')
      }
    } catch (error) {
      console.log(error);
    }
  };

  if(verificandoAuth == null)  return <Splash />

 
  
};

export default index;
