import React,{useState,useEffect}from 'react'
import { View, Text } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Texto from '../../atoms/text'
import styles from './styles';
import useDate from '../../../utils/useDate';



const index = ({days,onSubmit}) => {
  console.log("dias")
 console.log(days)
  const INITIAL_DATE = useDate.fechaActual;
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [mesSelected, setMesSelected] = useState("Seleccionar una fecha")
  const onDayPress = day => {
    onSubmit(day.dateString)
    setMesSelected(useDate.formatearMes(day.month.toString()))
    setData(
      {...days,[day.dateString]: {
      selected: true,
      disableTouchEvent: true,
      selectedColor: '#6BE142',
      selectedTextColor: 'white'
      }}
    )
  };

  const [data, setData] = useState(
    {...days,[INITIAL_DATE]: {
    selected: true,
    disableTouchEvent: true,
    selectedColor: '#6BE142',
    selectedTextColor: 'white'
  }})


 

 

  LocaleConfig.locales['es'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    dayNamesShort: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    today: 'Hoy dia'
  };

  LocaleConfig.defaultLocale = 'es';
 

  return (
    <View style={{alignItems:'center'}}>
      <Texto
        text={mesSelected}
        size={25}
      />
        <Calendar
          enableSwipeMonths
          style={styles.calendar}
          onDayPress={onDayPress}
          current={INITIAL_DATE}
          minDate={useDate.fechaActual}
          selected={selected}
          markedDates={data}
        />
    </View>
  )
}

export default index
