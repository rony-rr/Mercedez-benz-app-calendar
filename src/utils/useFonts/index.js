import { useFonts } from 'expo-font';

  const loadFonts = async()=> {
    try {
      const [loaded] = useFonts({
        "Roboto": require('../../../assets/fonts/Roboto-Regular.ttf'),
      });
      return loaded
    } catch (error) {
      console.log(error)
    }
  }


const useFont = {
  loadFonts
};
Object.freeze(useFont);

export default useFont;