import { StyleSheet } from "react-native";
import GlobalVars from "../../global/globalVars";
const styles = StyleSheet.create({
  view: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:GlobalVars.black,
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

export default styles;
