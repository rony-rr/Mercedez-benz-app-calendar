import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from '../../screens/account/index'
const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}