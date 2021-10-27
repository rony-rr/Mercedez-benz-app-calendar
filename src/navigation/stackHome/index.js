import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../../screens/home/index';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}