import { StyleSheet } from "react-native";
import GlobalVars from "../../global/globalVars";
const styles = StyleSheet.create({
  view: {
    flex:1,
    backgroundColor:GlobalVars.black,
    
  },
  btnPhoto:{
    padding:20,
    borderRadius:50,
    alignItems:'center',
    backgroundColor:'#393939'
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
  input:{
    marginTop:40,
    textAlign:'center',
    color:'white',
    fontSize:20,
    width:'90%',
    borderBottomWidth:0.5,
    borderColor:'white'
  },
  btnCreate:{
    paddingHorizontal:40,
    paddingVertical:10,
    backgroundColor:'#45B5EA',
    marginTop:20,
    marginBottom:30,
  }
});

export default styles;
