import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View,Linking } from "react-native";
import styles from './styles'
import Image from '../../atoms/image'
import GlobalVars from "../../../global/globalVars";
import Icon from '../../atoms/icon'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const App = ({visible,data,submit}) => {
  const [status, setStatus] = useState(1)
 
  return (
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        {visible &&
           
            <View style={styles.centeredView}>
            <View style={styles.header}>
            <Text style={styles.labelHeader}>
            Shop
            </Text>
            <TouchableOpacity
              onPress={()=>submit()}
            >
            <Text style={styles.labelHeader}>Cerrar</Text>
            </TouchableOpacity>
            </View>
            <Text style={styles.labelHeader}>
            {data.title}
            </Text>

            <Image 
            width={GlobalVars.windowWidth}
            height={GlobalVars.windowHeight/1.8} 
            img={{uri:`https://experienciamercedes.com/mbconnect/admin/uploads/${data.main_image}`}}
            />
            <Text style={styles.labelHeader}>Price: ${data.price}</Text>
            <Text style={styles.labelHeader}>{data.description}</Text>
            <TouchableOpacity style={styles.btn}
              onPress={()=>Linking.openURL('whatsapp://send?text=hello&phone=503 73749610')}
            >
              <MaterialCommunityIcons name="whatsapp" size={24} color="white" />
              <Text style={styles.btnLabel}>Contactar</Text>
            </TouchableOpacity>
            </View>
        }

       
      </Modal>

  );
};


export default App;