import React,{useState} from 'react'
import { View, Text ,StatusBar,TouchableOpacity,TextInput} from 'react-native'
import Header from "../../components/molecules/header/index"
import styles from "./styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
const view = () => {
  return (
    <View style={styles.view}>
     <TouchableOpacity style={styles.btnPhoto}>
        <AntDesign name="camerao" size={45} color="white" />
        <View
         style={styles.btnAdd}
        >
        <Octicons name="plus-small" size={45} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default view
