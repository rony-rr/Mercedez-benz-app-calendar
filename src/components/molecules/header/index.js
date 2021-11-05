import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Image from '../../atoms/image';
import Text from '../../atoms/text';
import GlobalVars from '../../../global/globalVars';
import StatusBar  from '../../atoms/statusBar';

const index = ({label}) => {
  return (
    <View style={styles.view}>
       <StatusBar color='black'/>
      <View style={styles.headerContentLogo}>
        <Image 
          width={GlobalVars.windowWidth/8}
          height={GlobalVars.windowHeight/8} 
          img={require('../../../../assets/logo.png')}
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
