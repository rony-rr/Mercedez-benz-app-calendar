import React, { useState } from 'react'
import {View,ScrollView} from 'react-native'
import Header from "../../components/molecules/header/index";
import { LinearGradient } from 'expo-linear-gradient';
import GlobalVars from '../../global/globalVars';
import styles from './styles';
import Calendar from '../../components/organisms/calendar'
import Icon from '../../components/atoms/icon'
import Texto from '../../components/atoms/text'
import Buttom from "../../components/molecules/button";
import SelectDropdown from "react-native-select-dropdown";
const view = ({user,onSubmit,horarios,confirmar,vhorario,arrayHorarios}) => {
  const [indexH, setindexH] = useState(0)
  console.log(horarios)
  const [data, setData] = useState()
  const change =(x)=>{    
    onSubmit({ 
      date: x,
      schedule_id: indexH+1,
      user_id: user,
      maintenance_description: "dev"
    })
    setData({ 
      date: x,
      schedule_id: indexH+1,
      user_id: user,
      maintenance_description: "dev"
    })
  }
  return (
    
      <LinearGradient
        colors={['rgba(74,89,95,0.5)', 'black']}
        style={{ width: GlobalVars.windowWidth, height:GlobalVars.windowHeight }}
      >
        <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
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
        {horarios.length > 0  && <SelectDropdown
        data={horarios}
        defaultButtonText='Horarios Disponibles'
        onSelect={(selectedItem, index) => {
          setindexH(arrayHorarios[index].id)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem
        }}
        rowTextForSelection={(item, index) => {
        return item
        }}
        />}
        {vhorario &&  <Buttom onSubmit={() =>confirmar(data)} label="Agendar Cita" />}
       
        </ScrollView>
      </LinearGradient>
      
 
  )
}

export default view
