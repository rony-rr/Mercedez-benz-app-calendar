import React,{useState,useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { View, Text ,Image,Button} from 'react-native'
import SingUp from "./view";
const index = () => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("¡Te has negado a permitir que esta aplicación acceda a tu cámara!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16,16],
        quality: 1,
      });
  };
  return (
    <SingUp
      openCamera={pickImage}
    />
  )
}

export default index
