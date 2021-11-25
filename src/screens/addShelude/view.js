import React, { useState } from 'react'
import {View} from 'react-native'
import Header from "../../components/molecules/header/index";
import { LinearGradient } from 'expo-linear-gradient';
import GlobalVars from '../../global/globalVars';
import styles from './styles';
import Calendar from '../../components/organisms/calendar'
import Icon from '../../components/atoms/icon'
import Texto from '../../components/atoms/text'
import Buttom from "../../components/molecules/button";

const view = ({onSubmit,horarios}) => {
  const [data, setData] = useState()
  const change =(x)=>{    
    setData({ 
      date: x,
      schedule_id: 1,
      user_id: 1,
      maintenance_description: "testing"
    })
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(74,89,95,0.5)', 'black']}
        style={{ width: GlobalVars.windowWidth, height:GlobalVars.windowHeight/1.2,alignItems:'center' }}
      >
        <Header label='Agendar Cita'/>
        <Calendar
          onSubmit={change}
        />
        <View style={{flexDirection:'row',marginVertical:15,justifyContent:'center'}}>
          <View style={{marginHorizontal:5,justifyContent:'center'}}>  
            <Icon 
              iconName='exclamationcircle'
              color='#55C1FF'
              size={20}
            />
          </View>
          <View style={{marginHorizontal:5,justifyContent:'center'}}>  
            <Texto
              text='Dia ocupado'
              size={18}
            />
          </View>
        </View>
        <Buttom onSubmit={() =>onSubmit(data)} label="Agendar Cita" />
      </LinearGradient>
      
    </View>
  )
}

export default view
