import React from 'react'
import styles from "./styles"
import {View} from 'react-native'
import Loading from "../../atoms/loading/index"
import Image from "../../atoms/imageLocal/index"
import GlobalVars from '../../../global/globalVars'
const index = () => {

  return (
    <View style={styles.view}>
      <Image 
        width={GlobalVars.windowWidth/6}
        height={GlobalVars.windowHeight/4} 
        mode='contain'
      />
      <Loading size='small' color={GlobalVars.white} />
    </View>
  )
}

export default index
