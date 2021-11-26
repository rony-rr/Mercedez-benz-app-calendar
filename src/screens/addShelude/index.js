import React, { useState,useEffect } from 'react';
// views
import AddShelude from './view';
import TemplateLoading from '../../components/templates/splashLoading'
// utils
import fetchHook from '../../utils/useFetch'
import storage from '../../utils/useLocalStorage'
import useDate from '../../utils/useDate'
import Alert from '../../utils/useAlert'
// Global values
import GlobalVars from '../../global/globalVars';

const index = ({onSubmit,navigation}) => {
  const [token, setToken] = useState(null)
  const [arrayHorarios, setarrayHorarios] = useState([])
  const [userInfo, setUserInfo] = useState({id: ''})
  const [verificandoHorario, setverificandoHorario] = useState(false)
  const urlDays = `${GlobalVars.urlApi}days_off`;
  const urlCita ='https://experienciamercedes.com/mbconnect/admin/api/v1/appointments';
  const urlVerificarHorario ='https://experienciamercedes.com/mbconnect/admin/api/v1/available_schedule/';
  const [horarios, setHorarios] = useState([])
  let days;

  useEffect(() => {
    getToken("userToken","userInfo");
  }, [])

  const getToken = async (key,key2) => {
    try {
      const response = await storage.getItem(key);
      const response2 = await storage.getItem(key2);
    
      if (response !== null) {
        getDaysOff(response)         
        setUserInfo(response2)
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
   console.log(data)
    try {
      const response = await fetchHook.fetchPost(urlCita,data,token);
      if(response.status == true){
        navigation.navigate("myAccount");
      }else{
        Alert('error')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const verificarHorarios = async (dia) =>{
    const url = urlVerificarHorario+dia.date
    console.log(dia)
    try {
      const response = await fetchHook.fetchGet(url,token);
 
       const s =[ ]
       response.disponibles.map((item,index)=>{
        s.push(item.time)
      })
      setHorarios(s)
      setarrayHorarios(response.disponibles)
      setverificandoHorario(true)
    } catch (error) {
      console.log(error);
    }
  }

  
    return (
      <AddShelude
          days={days}
          horarios={horarios}
          onSubmit={verificarHorarios}
          confirmar={addShelude}
          vhorario={verificandoHorario}
          arrayHorarios={arrayHorarios}
          user={userInfo.id}
      />
    )
  
  
}

export default index
