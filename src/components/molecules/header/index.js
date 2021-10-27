import React from 'react'
import {View} from 'react-native'
import styles from "./styles"
import Image from '../../atoms/imageLocal/index'
import Text from '../../atoms/text/Index'
import GlobalVars from '../../../global/globalVars'
import StatusBar  from '../../atoms/statusBar/index'

const index = ({label}) => {
  return (
    <View style={styles.view}>
       <StatusBar color='black'/>
      <View style={styles.headerContentLogo}>
        <Image 
          width={GlobalVars.windowWidth/8}
          height={GlobalVars.windowHeight/8} 
          mode='center'
        />
      </View>
      <View style={styles.headerContentLabel}>
        <Text 
          text={label}
        />
      </View>
      
    </View>
  )
}

export default index
