import { useFonts } from "expo-font";

const loadFonts = async () => {
  try {
    const [loaded] = useFonts({
      Daimler: require("../../../assets/fonts/Daimler-CS-Reg-eu.ttf"),
    });
    return loaded;
  } catch (error) {
    console.log(error);
  }
};

const useFont = {
  loadFonts,
};

export default useFont;
