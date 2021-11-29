import React, { useState, useEffect } from "react";
import UploadPicProfile from "./view";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import storage from "../../utils/useLocalStorage";

const index = ({ navigation }) => {
  const [pickedImagePath, setPickedImagePath] = useState(null);
  const getMimeType = (ext) => {
    // mime type mapping for few of the sample file types
    switch (ext) {
      case "pdf":
        return "application/pdf";
      case "jpg":
        return "image/jpeg";
      case "jpeg":
        return "image/jpeg";
      case "png":
        return "image/png";
    }
  };
  const uploadPic = async (data) => {
    const fileUri = pickedImagePath;
    let filename = fileUri.split("/").pop();
    const extArr = /\.(\w+)$/.exec(filename);
    const type = getMimeType(extArr[1]);
    let formData = new FormData();
    const getToken = await storage.getItem("userToken");
    const user = await storage.getItem("userInfo");
    const dataUser = JSON.parse(user);

    const token = JSON.parse(getToken);
    formData.append("profile_picture", { uri: fileUri, name: filename, type });
    formData.append("_method", "PUT");
    try {
      const response = await fetch(
        `https://experienciamercedes.com/mbconnect/admin/api/v1/picture/${dataUser.id}`,
        {
          method: "POST",
          body: formData,
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseAgain = await response.json();

      alert("Datos actualizados correctamente");
      console.log(responseAgain);
      navigation.navigate("TabNavigation");
    } catch (error) {
      console.log(error);
    }
  };

  const upload = (data) => {
    Alert.alert("Mensaje", "Selecciona una opcion", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Camara",
        onPress: () => openCamera(),
      },
      {
        text: "Galeria",
        onPress: () => showImagePicker(),
      },
    ]);
  };

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Te has negado a permitir que esta aplicación acceda a tus fotos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 16],
      quality: 1,
    });

    // Explore the result
    if (!result.cancelled) {
      setPickedImagePath(result.uri);

      console.log("foto cargada con exito");
    } else {
      console.log("carga de foto anulada");
    }
  };
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert(
        "¡Te has negado a permitir que esta aplicación acceda a tu cámara!"
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 16],
      quality: 1,
    });

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log("foto cargada con exito");
    } else {
      console.log("carga de foto anulada");
    }
  };

  return <UploadPicProfile onSubmit={upload} uploadPic={uploadPic} />;
};

export default index;
