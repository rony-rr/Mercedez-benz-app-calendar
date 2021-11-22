import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import Image from '../../atoms/image'
import GlobalVars from '../../../global/globalVars'
import Modal from '../../templates/modalProduct'
const index = ({img,onSubmit,data}) => {
  
  return (
    <TouchableOpacity 
    onPress={()=>onSubmit(data)}
    style={styles.card}
    >
      
       <Image 
          width={GlobalVars.windowWidth/2}
          height={GlobalVars.windowHeight/8} 
          img={{uri:`https://experienciamercedes.com/mbconnect/admin/uploads/${img}`}}
          mode='contain'
        />
    </TouchableOpacity>
  )
}

export default index
