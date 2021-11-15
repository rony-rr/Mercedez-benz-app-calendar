import { StyleSheet } from "react-native";
import GlobalVars from "../../global/globalVars";
const styles = StyleSheet.create({
  view: {
    flex:1,
    backgroundColor:GlobalVars.black,
    alignItems:'center',
    justifyContent:"center"
  },
  btnPhoto:{
    padding:20,
    borderRadius:50,
    alignItems:'center',
    backgroundColor:'#393939',
    marginVertical:10
  },
  btnAdd:{
    alignItems:'center',
    justifyContent:'center',
    width:40,
    position: 'absolute',                                          
    bottom:-10,                                                    
    right: -5,
    height:40,
    backgroundColor:'transparent',
    borderRadius:100,
  },
});

export default styles;
