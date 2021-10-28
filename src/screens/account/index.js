import React from 'react'
import { View, Text,StyleSheet,Image,TextInput} from 'react-native'
import Header from "../../components/molecules/header/index"
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "../../components/atoms/icon/index"
import GlobalVars from '../../global/globalVars';

const index = () => {
  return (
  <View style={styles.container}>
   
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(74,89,95,0.5)', 'black']}
      style={styles.background}
    >
       <Header label='Perfil'/>
       <View style={{alignItems:'center'}}>
        <Image
          style={styles.imgProfile}
          source={{
            uri: 'https://yt3.ggpht.com/ytc/AKedOLSlQErlIOYqfiFq8WIXGs4r54Om_EUc0cdmSF8G=s900-c-k-c0x00ffffff-no-rj',
          }}
        />
       </View>

      <View style={{width:GlobalVars.windowWidth,alignItems:'center'}}>
      <TextInput
        placeholder='Cita pendiente / 05/08/2021'
        placeholderTextColor='grey'
        editable={false}
        style={styles.input}
      />
      <TextInput
        placeholder='Mercedes CLA Coupé'
        placeholderTextColor='grey'
        editable={false}
        style={styles.input}
      />
      <TextInput
        placeholder='Año del vehículo 2019'
        placeholderTextColor='grey'
        editable={false}
        style={styles.input}
      />
       <TextInput
        placeholder='Placa del vehículo'
        placeholderTextColor='grey'
        editable={false}
        style={styles.input}
      />
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
    marginTop:10,
    height:190,
    width:150
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
