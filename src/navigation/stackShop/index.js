import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShopScreen from '../../screens/shop/index';

const Stack = createStackNavigator();

export default function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="shop"
        component={ShopScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}