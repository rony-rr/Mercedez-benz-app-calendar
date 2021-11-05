import React,{useState} from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import GlobalVars from '../../global/globalVars';
import Input from '../../components/atoms/input';
import Buttom from '../../components/molecules/button'
import Image from '../../components/atoms/image'

const view = ({onSubmit}) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const data ={
    email:email,
    password:password
  }
  return (
    <View style={styles.view}>
      <Image
        img={require('../../../assets/logo.png')}
        width={GlobalVars.windowWidth/8}
        height={GlobalVars.windowHeight/8} 
        mode='center'
      />
      <Input
        placeholder='Ingresar correo'
        changeText={setEmail}
      />
      <Input
        placeholder='Ingresar password'
        changeText={setPassword}
      />
      <Buttom
        onSubmit={()=>onSubmit(data)}
        label='Acceder'
      />
    </View>
  )
}

export default view
