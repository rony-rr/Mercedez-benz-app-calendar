import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    const data = JSON.stringify(value)

    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log(error);
  }
};
const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.log(error);
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e)
  }
};

const storage = {
  storeData,
  removeItem,
  getItem,
  clearAll,
};



export default storage;
