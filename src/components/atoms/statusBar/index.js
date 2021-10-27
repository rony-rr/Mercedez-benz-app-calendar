import React,{useState} from 'react'
import {StatusBar } from 'react-native'
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const index = ({color}) => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
  return (
    <StatusBar
      animated={true}
      backgroundColor={color}
      barStyle={statusBarStyle}
      showHideTransition={statusBarTransition}
      hidden={hidden} 
    />
  )
}

export default index
