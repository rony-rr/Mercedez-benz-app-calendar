import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const GlobalVars = {
  /** Tracking & Register Config */
  firebaseConfig: {
    apiKey: "AIzaSyAZJWe97vZqOZOipGdjnoMieo45mmAEjBE",
    authDomain: "tgapp-8099d.firebaseapp.com",
    projectId: "tgapp-8099d",
    storageBucket: "tgapp-8099d.appspot.com",
    messagingSenderId: "879554585787",
    appId: "1:879554585787:web:8925072ac9a5aee318759e",
    measurementId: "G-0EXE1TGR0S",
  },

  bannerAdsCode: "ca-app-pub-8287263841467710/7697604619",
  intersticialAdsCode: "ca-app-pub-8287263841467710/6526981416",

  /** OAuth Android Client */
  // androidClientId: '879554585787-rvci6rgla52te0d6ce6kghq1mnmn9gbt.apps.googleusercontent.com',

  /** OAuth adicional */
  // expoClientIDGoogleSign: '879554585787-mvlakf0c4dth9cpaauo98235tff9lg5v.apps.googleusercontent.com',

  /** SHA1 */
  // SHA1: '36:08:51:29:F7:B7:96:B7:66:77:E6:56:90:93:7C:DD:2D:44:D2:4B',

  /** SHA256 */
  // SHA256: 'CA:00:0E:FB:60:A3:04:AD:33:75:3C:54:C8:23:B7:F2:B5:4F:BE:4F:BB:F5:E9:D4:D7:E2:85:18:27:DA:48:21',

  /** API PATH **/
  urlapi: "https://myrecipe.ideatechstudio.com/MyRecipe/Api",

  /** KEY REQUEST **/
  keyres: "123456789",

  /** Fonts generals fields */
  fontFamily1: "Montserrat",
  fontFamily2: "KaushanScript",

  /** View Configurations */
  fondoPrincipal: "#FFF",
  white: "#FFF",
  whiteLite:"#E7E7E7",
  black: "#000",
  googleColor: "#DC1327",
  facebookColor: "#003B8B",
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

  /** ViewPort Dimensions */
  windowWidth: windowWidth,
  windowHeight: windowHeight,

  /** Default Language */
  defaultLang: "es",
};

export default GlobalVars;
