import React,{useState} from 'react'
import { View, Text } from 'react-native'
import Login from './view'
import fetchHook  from '../../utils/useFetch'
import GlobalVars from '../../global/globalVars'

const index = ({navigation}) => {
  const [openModal, setOpenModal] = useState(false)

  const urlLogin = `${GlobalVars.urlApi}login`;

  const login = async (data) =>{
    setOpenModal(true);
    try { 
      const response = await fetchHook.fetchPost(urlLogin,data);
      if(response.status == true){
          navigation.navigate('TabNavigation');
          setOpenModal(false);
      }else{
        setOpenModal(false);
      }
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <Login
      openModal={openModal}
      onSubmit={login}
    />
  )
}

export default index
