import React from 'react'
import { View, Text } from 'react-native'
import Login from './view'
import fetchHook  from '../../utils/useFetch'
import GlobalVars from '../../global/globalVars'

const urlLogin = `${GlobalVars.urlApi}login`;

const login = async (data) =>{
  try { 
    const response = await fetchHook.fetchPost(urlLogin,data);
    if(response.status == true){
      
    }else{
      alert('algo salio mal')
    }
  } catch (error) {
    console.log(error)
  }
}


const index = () => {
  return (
    <Login
      onSubmit={login}
    />
  )
}

export default index
