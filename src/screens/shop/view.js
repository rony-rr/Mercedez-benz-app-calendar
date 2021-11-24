import React ,{useState,useEffect}from 'react'
import { View, Text ,FlatList,TouchableOpacity,Linking} from 'react-native'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../../components/molecules/header'
import { LinearGradient } from 'expo-linear-gradient';
import CardProduct from '../../components/organisms/cardProduct'
import Modal from '../../components/templates/modalProduct'
import Icon from '../../components/atoms/icon'
const view = ({data}) => {
  const [openM, setOpenM] = useState(false)
  const [producto, setProducto] = useState(null)
  const openModal =(product)=>{
    setProducto(product)
    setOpenM(true)
  }
  const closeModal =()=>{
    setOpenM(false)
    console.log("s")
  }

  return (
    <View style={styles.container}>
      <Modal
        data={producto}
        visible={openM}
        submit={closeModal}
      />
      <LinearGradient
      // Background Linear Gradient
      colors={['rgba(74,89,95,0.5)', 'black']}
      style={styles.background}
       >

     <Header label='Boutique'/>
     <FlatList
        data={data}
        renderItem={({item})=><CardProduct onSubmit={openModal} img={item.main_image} data={item}  />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       position: 'absolute',                                          
       bottom: 20,                                                    
       right: 10,
       height:70,
       backgroundColor:'#50BD2A',
       borderRadius:100,
     }}

     onPress={()=>Linking.openURL(`whatsapp://send?text=Hola, quisiera informacion &phone=503 72102380`)}
 >

    <MaterialCommunityIcons name="whatsapp" size={40} color="white" />
  </TouchableOpacity>
    </LinearGradient>
    </View>
  )
}

export default view
