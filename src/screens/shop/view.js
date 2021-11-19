import React ,{useState,useEffect}from 'react'
import { View, Text ,FlatList} from 'react-native'
import styles from './styles'
import Header from '../../components/molecules/header'
import { LinearGradient } from 'expo-linear-gradient';
import CardProduct from '../../components/organisms/cardProduct'
const view = ({data}) => {


  return (
    <View style={styles.container}>
      
      <LinearGradient
      // Background Linear Gradient
      colors={['rgba(74,89,95,0.5)', 'black']}
      style={styles.background}
       >

     <Header label='Boutique'/>
     <FlatList
        data={data}
        renderItem={({item})=><CardProduct  img={item.main_image} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </LinearGradient>
    </View>
  )
}

export default view
