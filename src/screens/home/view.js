import React from 'react'
import { View, Text,StyleSheet,Image} from 'react-native'
import Header from "../../components/molecules/header/index"
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "../../components/atoms/icon/index"
import GlobalVars from '../../global/globalVars';
import styles from './styles'

const view = ({imgProfile}) => {
  return (
    <View style={styles.container}>
   
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(74,89,95,0.5)', 'black']}
      style={styles.background}
    >
       <Header label='Inicio'/>
       <View style={{alignItems:'center'}}>
        <Image
          style={styles.imgProfile}
          source={{
            uri: imgProfile,
          }}
        />
        <Text style={{color:'white',fontSize:18,marginVertical:10}}>Sergio Matti</Text>
       </View>
       <View style={{alignItems:'center'}}>
          <View style={styles.card}>
              <View style={styles.cardContentIcon}>
                    <Icon 
                      iconName='calendar'
                      color='white'
                      size={50}
                     
                    />
                </View>
                <View style={styles.cardContentLabel}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Agendar cita</Text>
                </View>
          </View>

       </View>

       <View style={{alignItems:'center'}}>
          <View style={styles.card}>
              <View style={styles.cardContentIcon}>
                    <Icon 
                      iconName='car'
                      color='white'
                      size={50}
                     
                    />
                </View>
                <View style={styles.cardContentLabel}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Mercedez Benz Experience</Text>
                </View>
          </View>

       </View>

       <View style={{alignItems:'center'}}>
          <View style={styles.card2}>
              <View style={styles.cardContentIcon}>
                    <Icon 
                      iconName='tago'
                      color='white'
                      size={50}
                     
                    />
                </View>
                <View style={styles.cardContentLabel}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Shoping</Text>
                </View>
          </View>

       </View>
       
    </LinearGradient>
   
  </View>
  )
}

export default view
