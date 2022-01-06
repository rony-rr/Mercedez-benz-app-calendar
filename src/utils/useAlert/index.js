import {Alert} from 'react-native'

const index = (title,msj) => {
    Alert.alert(
        title,
        msj,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
}

export default index
