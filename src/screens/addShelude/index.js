import React, { useState,useEffect } from 'react';
// views
import AddShelude from './view';
import TemplateLoading from '../../components/templates/splashLoading'
// utils
import fetchHook from '../../utils/useFetch'
import storage from '../../utils/useLocalStorage'
import useDate from '../../utils/useDate'
// Global values
import GlobalVars from '../../global/globalVars';

const index = ({onSubmit}) => {
  const [token, setToken] = useState(null)
  const urlDays = `${GlobalVars.urlApi}days_off`;
  const urlCita ='https://experienciamercedes.com/mbconnect/admin/api/v1/appointments';
  let days;
  useEffect(() => {
    getToken("userToken");
  }, [])

  const getToken = async (key) => {
    try {
      const response = await storage.getItem(key);
      if (response !== null) {
        getDaysOff(response)
        setToken(response)
      } else {
        navigation.navigate("login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDaysOff = async (token) => {
    try {
      const response = await fetchHook.fetchGet(urlDays,token);
      if(response.status == true){
        let data = await useDate.formaterDaysOff(response.dates)
        days = data;
       
      }else{
        console.log('Error obtenido days off')
      }
      
    } catch (error) {
      console.log(error);
    }
  };


  const addShelude =async(data) =>{

    try {
      const response = await fetchHook.fetchPost(urlCita,data,token);
      if(response.status == true){
        alert('Cita agendada')
      }else{
        alert('error')
      }
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <AddShelude
          days={days}
          onSubmit={addShelude}
      />
    )
  
  
}

export default index
