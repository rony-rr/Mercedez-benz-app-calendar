import { StyleSheet } from "react-native";
import GlobalVars from "../../../global/globalVars"

const styles = StyleSheet.create({
  labelHeader:{
    color:'white',
    marginTop:10,
    fontSize:20,
    marginHorizontal:10
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  centeredView: {
    flex: 1,
    backgroundColor:'black',
    padding:20
  },
  btn:{
    backgroundColor:'#31CA25',
    width:"45%",
    paddingVertical:5,
    justifyContent:'center',
    flexDirection:'row',
    borderRadius:10,
    marginVertical:5
  },
  btnLabel:{
    color:'white',
    fontSize:20,
    marginHorizontal:10
  }
 
  });

export default styles;