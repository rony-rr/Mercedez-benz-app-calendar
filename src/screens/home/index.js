import React from 'react'
import { View, Text,StyleSheet,Image} from 'react-native'
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
       <Header label='Inicio'/>
       <View style={{alignItems:'center'}}>
        <Image
          style={styles.imgProfile}
          source={{
            uri: 'https://yt3.ggpht.com/ytc/AKedOLSlQErlIOYqfiFq8WIXGs4r54Om_EUc0cdmSF8G=s900-c-k-c0x00ffffff-no-rj',
          }}
        />
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
          <View style={styles.card}>
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
    height:200,
    width:150
  },
  cardContentIcon:{
    width:'30%',
    alignItems:'center',
  },
  cardContentLabel:{
    width:'60%',
    justifyContent:'center'
  },
  card:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'85%',
    paddingVertical:25,
    borderColor:'white',
    borderBottomWidth:0.5
  }
});
export default index
