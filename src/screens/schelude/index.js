import React from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import Header from "../../components/molecules/header/index"
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "../../components/atoms/icon/index"
import { useNavigation } from '@react-navigation/native';
import GlobalVars from '../../global/globalVars';

const index = () => {
  const navigation = useNavigation();

  return (
  <View style={styles.container}>
   
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(74,89,95,0.5)', 'black']}
      style={styles.background}
    >
       <Header label='Agendar Cita'/>
    <View style={{alignItems:'flex-start',paddingVertical:10,width:'80%'}}>
        <Icon 
        iconName='tool'
        color='white'
        size={50}

    />
    </View>
    <View style={{width:'80%'}}>
      <Text style={styles.info}>Un buen mantenimiento periodico ,garantiza el eficiente funcionamiento de tu estrella,por ello te invitamos aque agendes tu cita de servicio,desde la comodidad de tu casa a través de este medio.</Text>
      <Text style={styles.info}>Contamos con herramientas y equipo especializado, como el Star Diagnosis, que brinda la información electronica direcamtente dede el corazón de tu Mercedes , mostrando aspectos que debe ser corregidos.</Text>
      <Text style={styles.info}>Todos nuestros mantenimientos se rigen por guias de servicio online , que brinda directamente el fabricante. Nuestro servicio es personalizado y garantizado.</Text>
    </View>
    <TouchableOpacity style={styles.btnCreate}
      onPress={()=>navigation.navigate("addShelude")}
    >
        <Text style={{color:'white'}}>Crear cita</Text>
      </TouchableOpacity>   
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
    alignItems:'center'
  },
  info:{
    color:'white',
    fontSize:15,
    marginTop:10,
    textAlign:'left'
  },
  btnCreate:{
    paddingHorizontal:40,
    paddingVertical:10,
    backgroundColor:'#45B5EA',
    marginTop:20,
  }
});
export default index
