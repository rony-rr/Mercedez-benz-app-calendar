import React from 'react'
import { View, Text,StyleSheet,Image,TextInput} from 'react-native'
import Header from "../../components/molecules/header/index"
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "../../components/atoms/icon/index"
import GlobalVars from '../../global/globalVars';

import StatusBar from "../../components/atoms/statusBar";
import ImgProfile from "../../components/molecules/imgProfile";
import BtnOption from "../../components/organisms/btnOption";
import Input from "../../components/atoms/input";

const index = ({ imgProfile, dataUser, onSubmit ,cita}) => {
  return (
  <View style={styles.container}>
   
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(74,89,95,0.5)', 'black']}
      style={styles.background}
    >
       <Header label='Perfil'/>
       <View style={{alignItems:'center'}}>
       <ImgProfile img={imgProfile} data={dataUser} />
       </View>

      <View style={{width:GlobalVars.windowWidth,alignItems:'center'}}>
      <Text style={{color:'white',fontSize:18,marginVertical:10}}>Mi Mercedes</Text>
      <Input placeholder="Cita" editable={false} />
      </View>
    
       
    </LinearGradient>
   
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: GlobalVars.windowHeight,
  },
  imgProfile:{
    marginTop:15,
    borderRadius:50,
    height:90,
    width:90
  },
  input:{
    marginTop:40,
    textAlign:'left',
    color:'white',
    fontSize:20,
    width:'90%',
    borderBottomWidth:0.5,
    borderColor:'white'
  },
  
});
export default index
