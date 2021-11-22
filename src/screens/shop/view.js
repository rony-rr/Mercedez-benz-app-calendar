import React ,{useState,useEffect}from 'react'
import { View, Text ,FlatList} from 'react-native'
import styles from './styles'
import Header from '../../components/molecules/header'
import { LinearGradient } from 'expo-linear-gradient';
import CardProduct from '../../components/organisms/cardProduct'
import Modal from '../../components/templates/modalProduct'
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
    </LinearGradient>
    </View>
  )
}

export default view
