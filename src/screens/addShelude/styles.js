import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
    alignItems: 'center'
  },
  info: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'left'
  },
  btnCreate: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#45B5EA',
    marginTop: 20,
  }
});
export default styles