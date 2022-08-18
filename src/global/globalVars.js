import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const GlobalVars = {
  urlApi: "https://experienciamercedes.com/mbconnect/admin/api/v1/",
  // urlApi: "https://mbconnect.dive.digital/api/v1/",
  fontFamily: "Daimler",
  fondoPrincipal: "#FFF",
  white: "#FFF",
  whiteLite: "#E7E7E7",
  black: "#000",
  googleColor: "#DC1327",
  facebookColor: "#003B8B",
  blueMercedes: "#07ADEE",
  firstColor: "#BA0E18",
  grisColor: "#3C3C3C",
  grisOscuro: "#BABABA",
  grisIntermediate: "#717171",
  grisPlane: "rgba(117, 117, 117, 0.2)",
  grisText: "rgba(60, 60, 60, 1)",
  bluePantone: "rgba(0, 32, 91, 1)",
  azulOscuro: "#3F3D56",
  colorTextRed: "rgb(219,103,103)",
  colorTextYellow: "#FFE476",
  greenMark: "#6BE142",
  grayPlaceholder: "#E1DEDD",
  redMark: "#F14E44",
  windowWidth: windowWidth,
  windowHeight: windowHeight,
};

export default GlobalVars;
