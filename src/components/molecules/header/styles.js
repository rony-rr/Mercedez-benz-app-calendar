import { StyleSheet } from "react-native";
import GlobalVars from "../../../global/globalVars"
const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection:'row',
    backgroundColor:'black',
    justifyContent:'space-between'
  },
  headerContentLogo:{
    marginHorizontal:10,
    justifyContent:'center',
  },
  headerContentLabel:{
    marginHorizontal:10,
    marginBottom:10,
    justifyContent:'flex-end'
    
  }
});

export default styles;
