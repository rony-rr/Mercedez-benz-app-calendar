import { useFonts } from "expo-font";

const loadFonts = async () => {
  try {
    const [loaded] = useFonts({
      Daimler: require("../../../assets/fonts/font-corporate.otf"),
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
