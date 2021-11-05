import React,{useState} from 'react'
import useFont from "./src/utils/useFonts/index"
import Splash from "./src/components/templates/splashLoading/index"
import Navigation  from './src/navigation/navigation'
const Root = () => {
  const [loadingFonts, setLoadingFonts] = useState(null);
  useFont.loadFonts().then(res=>setLoadingFonts(res));
  

  if(loadingFonts == null) return <Splash/>

  if(loadingFonts == true){
    return <Navigation/>
  }else{
    return <Splash/>
  }
 
}

export default Root
