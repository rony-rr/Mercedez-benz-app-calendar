import React,{useState} from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity,Modal} from 'react-native'
import Header from "../../components/molecules/header/index";
import Logo from "../../components/atoms/imageLocal"
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "../../components/atoms/icon/index"
import {Calendar} from 'react-native-calendars';
import GlobalVars from '../../global/globalVars';
const index = () => {
  const [mes, setMes] = useState("Julio")
  const [modalV, setModalV] = useState(false)
  return (
  <View style={styles.container}>
   <Modal
        animationType="slide"
        transparent={true}
        visible={modalV}
        
      >
      <View style={{flex:1,backgroundColor:"rgba(0, 0, 0, 0.80)",alignItems:'center',justifyContent:'center'}}>
         
          <LinearGradient
          // Background Linear Gradient
          colors={['rgba(74,89,95,0.5)', 'black']}
          style={{width:GlobalVars.windowWidth/1.5,height:300}}
          >
            <TouchableOpacity onPress={()=>setModalV(!modalV)}>
            <View>
              <Text style={{color:'white',fontWeight:'400',fontSize:26,textAlign:"left",marginLeft:10,marginTop:20}}>!Tu cita ha sido agendada</Text>
            </View>
            <View style={{marginTop:80,alignItems:'flex-end',paddingHorizontal:20}}>
                <Logo
                width={GlobalVars.windowWidth/8}
                height={GlobalVars.windowHeight/8} 
                mode='center'
                />
            </View>
            </TouchableOpacity>
            
          </LinearGradient>
         
      </View>
      </Modal>
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(74,89,95,0.5)', 'black']}
      style={styles.background}
    >
       <Header label='Agendar Cita'/>
       <Text style={{marginVertical:20,color:'white',fontSize:20,fontWeight:'bold'}}>{mes}</Text>
        <Calendar
        style={{width:GlobalVars.windowWidth/1.2}}
        markingType={'period'}
        markedDates={{
        '2021-28-10': {marked: true, dotColor: '#50cebb'},
        '2012-05-16': {marked: true, dotColor: '#50cebb'},
        '2012-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
        '2012-05-22': {color: '#70d7c7', textColor: 'white'},
        '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
        '2012-05-24': {color: '#70d7c7', textColor: 'white'},
        '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
        }}
        />
        <View style={{flexDirection:'row',marginVertical:15}}>
       
          <Icon 
            iconName='exclamationcircle'
            color='#55C1FF'
            size={20}
          />
          <Text style={{color:'white',marginHorizontal:5}}>Dia ocupado</Text>
        </View>
    <TouchableOpacity style={styles.btnCreate}
      onPress={()=>setModalV(!modalV)}
    >
        <Text style={{color:'white'}}>Agendar cita</Text>
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
    height: 600,
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
