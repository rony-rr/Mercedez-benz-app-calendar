import { StyleSheet } from "react-native";
import GlobalVars from "../../../global/globalVars"

const styles = StyleSheet.create({
    view: {
      backgroundColor:'rgba(107, 107, 107, 0.93)',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    scroll:{
      backgroundColor:'rgba(0, 0, 0, 0.79)',
      width:"100%",
      borderRadius:10,
      paddingTop:20,
      paddingHorizontal:10,
 
    },
    card:{
     width:"95%",
     
    },
    errros:{
      color:'red',
      fontWeight:'bold'
    },
    btn:{
      backgroundColor:'red',
      height:200
    }
  });

export default styles;
