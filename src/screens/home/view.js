import React from 'react'
import {View} from 'react-native'
import Header from "../../components/molecules/header/index"
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'
import ImgProfile from "../../components/molecules/imgProfile"
import BtnOption from '../../components/organisms/btnOption'

const view = ({ imgProfile, dataUser,onSubmit}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(74,89,95,0.5)','black']}
        style={styles.background}
      >
      <Header label='Inicio' />
      <ImgProfile
        img={imgProfile}
        data={dataUser}
      />
      <BtnOption
        icon='calendar'
        label='Agendar cita'
        screen='stackShelude'
        onSubmit={onSubmit}
      />
      <BtnOption
        icon='car'
        label='Mercedes Benz Experiencie'
        screen='link'
        onSubmit={onSubmit}
      />
      <BtnOption
        icon='tago'
        label='Shoping'
        screen='stackShop'
        onSubmit={onSubmit}
      />
      </LinearGradient>
    </View>
  )
}

export default view
