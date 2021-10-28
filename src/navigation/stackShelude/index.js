import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SheludeScreen from '../../screens/schelude/index';
import AddShelude from '../../screens/addShelude/index'
const Stack = createStackNavigator();

export default function SheludeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="shelude"
        component={SheludeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="addShelude"
        component={AddShelude}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}