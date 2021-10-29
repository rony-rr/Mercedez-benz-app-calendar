import React from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity, ScrollView} from 'react-native'
import Header from "../../components/molecules/header/index"
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "../../components/atoms/icon/index"
import { useNavigation } from '@react-navigation/native';
import GlobalVars from '../../global/globalVars';
import { FontAwesome5 } from '@expo/vector-icons';

const index = () => {
  const navigation = useNavigation();

  return (
  <View style={styles.container}>
   
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(74,89,95,0.5)', 'black']}
      style={styles.background}
    >

       <Header label='Boutique  '/>
     

  <View style={{flex:1}}>
  
  <ScrollView>
      
      <View style={{width:GlobalVars.windowWidth,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.carProduct}>
          <Image
            style={styles.imgProduct}
            source={{
              uri: 'https://m.media-amazon.com/images/I/51K+EkK5DlL._AC_SX425_.jpg',
            }}
            
          />
          <Text style={{color:'white'}}>Producto Test 1</Text>
        </View>
        <View style={styles.carProduct}>
          <Image
            style={styles.imgProduct}
            source={{
              uri: 'https://i.ebayimg.com/thumbs/images/g/CPUAAOSwteJhMecU/s-l300.jpg',
            }}
            
          />
          <Text style={{color:'white'}}>Producto Test 2</Text>
        </View>
      </View>

      <View style={{width:GlobalVars.windowWidth,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.carProduct}>
          <Image
            style={styles.imgProduct}
            source={{
              uri: 'https://i.ebayimg.com/images/g/twQAAMXQ01tRR0Vu/s-l300.jpg',
            }}
            
          />
          <Text style={{color:'white'}}>Producto Test 3</Text>
        </View>
        <View style={styles.carProduct}>
          <Image
            style={styles.imgProduct}
            source={{
              uri: 'https://http2.mlstatic.com/D_NQ_NP_927858-MLM26815109146_022018-W.jpg',
            }}
            
          />
          <Text style={{color:'white'}}>Producto Test 4</Text>
        </View>
      </View>
      <View style={{width:GlobalVars.windowWidth,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.carProduct}>
          <Image
            style={styles.imgProduct}
            source={{
              uri: 'https://i.ebayimg.com/images/g/h70AAOSwkHFb47uH/s-l300.jpg',
            }}
            
          />
          <Text style={{color:'white'}}>Producto Test 5</Text>
        </View>
        <View style={styles.carProduct}>
          <Image
            style={styles.imgProduct}
            source={{
              uri: 'https://cdn.luxatic.com/wp-content/uploads/2011/07/New-Mercedes-Benz-Fashion-Accessories-1.jpg',
            }}
            
          />
          <Text style={{color:'white'}}>Producto Test 6</Text>
        </View>
      </View>
      <View style={{width:GlobalVars.windowWidth,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.carProduct}>
          <Image
            style={styles.imgProduct}
            source={{
              uri: 'https://m.media-amazon.com/images/I/81z4I3uoKkL._AC_SX679._SX._UX._SY._UY_.jpg',
            }}
            
          />
          <Text style={{color:'white'}}>Producto Test 5</Text>
        </View>
        <View style={styles.carProduct}>
          <Image
            style={styles.imgProduct}
            source={{
              uri: 'https://i.pinimg.com/236x/7d/f4/50/7df450f5a16fee5a14ab54e45ff85193.jpg',
            }}
            
          />
          <Text style={{color:'white'}}>Producto Test 6</Text>
        </View>
      </View>      
    </ScrollView>
  </View>
    <View style={{width:'100%'}}>
    <TouchableOpacity
    onPress={()=>alert('Test')}
    style={{
    borderWidth:4,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,
    height:70,
    backgroundColor:'#2ECC71',
    borderRadius:100,
    }}
    >
    <FontAwesome5 name="whatsapp" size={40} color="white" />
    </TouchableOpacity>
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
    height: GlobalVars.windowHeight-60,
    alignItems:'center'
  },
  carProduct:{
    marginTop:10,
    alignItems:"center",
    width:"50%"
  },
  imgProduct:{
    width:150,
    height:150
  }
});
export default index
