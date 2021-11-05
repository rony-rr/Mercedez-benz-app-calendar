import AsyncStorage from "@react-native-async-storage/async-storage";





const StorageData = async (key,value) => {
  try {
     await AsyncStorage.setItem(key,value);
  }catch (error) {
    console.log(error);
  }
};

const removeItemStorageData = async (key) => {
  //el metodo remove por medio de AsyngStorage removera el contenido almacenado en la memoria del dispositivo
  try {
    await AsyncStorage.removeItem(key); //Metodo .removeItem que nos permite remover el contenido almacenado.
  } catch (error) {
    //definimos un catch de error por defecto
    console.log(error)
  }
};

const getItemData = async (key) => {
  //Metodo que nos permite Obtener la informacion de la key del metodo StorageDate
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      //Si el valor es igual a null, devolvera value
      return value;
    } else {
      return 2;
      console.log("error al leer la info");
    }
  } catch (error) {
    //definimos un catch de error por defecto
    console.log("error al leer la info");
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    console.log(e)
  }

}


const storage = {
  StorageData,
  removeItemStorageData,
  getItemData,
  clearAll
};

Object.freeze(storage);

export default storage;