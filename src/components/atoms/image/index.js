import React from 'react';
import {Image} from 'react-native';
import styles from "./styles"

const imageLocal = ({width,height,radius,mrTop,mode,img}) => {
 
  return (
      <Image
        style={[styles.img,{width:width,height:height,borderRadius:radius,marginTop:mrTop}]}
        source={img}
        resizeMode={mode}
      />
  );
}



export default imageLocal;