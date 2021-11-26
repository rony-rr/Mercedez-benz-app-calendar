import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from '../../screens/account'
import SingupScreen from '../../screens/singUp'
import LoginScreen from '../../screens/login'
import UploadPicScreen from '../../screens/uploadPicProfile'
import VerifyAuth from '../../screens/verifyAuth'
import RegisterScreen from '../../screens/register'
const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="verifyAuth"
        component={VerifyAuth}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="myAccount"
        component={MyAccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="uploadPic"
        component={UploadPicScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="singup"
        component={SingupScreen}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}