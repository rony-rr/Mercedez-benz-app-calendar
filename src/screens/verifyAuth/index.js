import React,{useEffect,useState} from 'react'
import VerifyAuth from './view'
import storage from '../../utils/useLocalStorage'

const getToken = async (data) =>{
  try { 
    const response = await storage.getItemData('userToken')
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const index = () => {
  setTimeout(() => {
    getToken()
  }, 2000);
  return (
    <VerifyAuth/>
  )
}

export default index
