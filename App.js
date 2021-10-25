import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import useFont from "./src/utils/useFonts/index"

const Root = () => {
  const [authCheck, setAuthCheck] = useState(null)
  const [loadingFonts, setLoadingFonts] = useState(null);

  useFont.loadFonts().then(res=>setLoadingFonts(res));

  
  return (
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
      <Text>Cargando fuente</Text>
    </View>
  )
}

export default Root
