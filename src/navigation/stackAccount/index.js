import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SingupScreen from "../../screens/singUp";
import LoginScreen from "../../screens/login";
import RegisterScreen from "../../screens/register";
const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
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
