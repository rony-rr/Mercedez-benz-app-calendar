import React,{useState} from 'react'
import { View ,StatusBar,TouchableOpacity,TextInput} from 'react-native'
import Header from "../../components/molecules/header/index"
import styles from "./styles"
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Text from "../../components/atoms/text";
import Buttom from "../../components/molecules/button"
import { useNavigation } from '@react-navigation/native';

const view = ({onSubmit,uploadPic}) => {
  const navigation = useNavigation();

  return ( 
    <View style={styles.view}>
     <TouchableOpacity style={styles.btnPhoto}
      onPress={onSubmit}
     >
        <AntDesign name="camerao" size={100} color="white" />
        <View
         style={styles.btnAdd}
        >
        <Octicons name="plus-small" size={45} color="white" />
        </View>
      </TouchableOpacity>

      <Text
        text="Add Profile Picture"
      />

       <Buttom label="UPLOAD" onSubmit={()=>uploadPic()}/>    

      <Buttom label="SKIP" onSubmit={()=>navigation.navigate("TabNavigation")}/>
    </View>
  )
}

export default view
