import React, { useState, useEffect } from "react";

import { Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";

import GlobalVars from "../../global/globalVars";

import storage from "../../utils/useLocalStorage";

import UploadPicProfile from "./view";

const Index = ({ navigation }) => {
  const [tokeUser, setTokenUser] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [pickedImagePath, setPickedImagePath] = useState(null);

  useEffect(() => {
    recoverToken();
  }, []);

  const recoverToken = async () => {
    const getToken = await storage.getItem("userToken");
    setTokenUser(getToken);
    const user = await storage.getItem("userInfo");
    setUserInfo(user);
  };

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
  const uploadPic = async () => {
    const fileUri = pickedImagePath;
    let filename = fileUri.split("/").pop();
    const extArr = /\.(\w+)$/.exec(filename);
    const type = getMimeType(extArr[1]);
    let formData = new FormData();
    const dataUser = userInfo;
    const token = tokeUser;
    formData.append("profile_picture", { uri: fileUri, name: filename, type });
    formData.append("_method", "PUT");

    try {
      fetch(`${GlobalVars.urlApi}picture/${dataUser.id}`, {
        method: "POST",
        body: formData,
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((responseData) => {
          Alert.alert("Datos actualizados correctamente");
          navigation.navigate("TabNavigation");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
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

  return (
    <UploadPicProfile
      pickedImagePath={pickedImagePath}
      onSubmit={upload}
      uploadPic={uploadPic}
    />
  );
};

export default Index;
