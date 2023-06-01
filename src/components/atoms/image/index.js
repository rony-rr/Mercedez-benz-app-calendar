import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const ImageLocal = ({ width, height, radius, mrTop, mrBottom, mode, img }) => {
  return (
    <Image
      style={[
        styles.img,
        {
          width: width,
          height: height,
          borderRadius: radius,
          marginTop: mrTop,
          marginBottom: mrBottom,
        },
      ]}
      source={img}
      resizeMode={mode}
    />
  );
};

export default ImageLocal;
