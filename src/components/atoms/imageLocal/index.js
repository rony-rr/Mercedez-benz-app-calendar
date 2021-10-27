import React from 'react';
import {Image} from 'react-native';
import styles from "./styles"

const imageLocal = ({width,height,mode,img}) => {
 
  return (
      <Image
        style={[styles.img,{width:width,height:height}]}
        source={require("../../../../assets/logo.png")}
        resizeMode={mode}
      />
  );
}



export default imageLocal;