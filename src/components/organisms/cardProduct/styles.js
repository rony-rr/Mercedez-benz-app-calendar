import { StyleSheet } from "react-native";
import GlobalVars from "../../../global/globalVars";

GlobalVars
const styles = StyleSheet.create({
  card: {
    backgroundColor:'white',
    marginHorizontal:5,
    marginVertical:5,
    height:GlobalVars.windowHeight/4,
    width:GlobalVars.windowWidth/2.2,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
});

export default styles;
