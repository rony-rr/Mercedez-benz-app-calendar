import {StyleSheet} from 'react-native'
import GlobalVars from '../../global/globalVars';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: GlobalVars.windowHeight-60,
    alignItems:'center'
  },
  carProduct:{
    marginTop:10,
    alignItems:"center",
    width:"50%"
  },
  imgProduct:{
    width:150,
    height:150
  }
});

export default styles;