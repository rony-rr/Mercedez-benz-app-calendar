import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GlobalVars from "../../global/globalVars";

import TabIcon from "../../components/organisms/tabIcon";

import HomeStack from "../stackHome/index";
import SheludeStack from "../stackShelude";
import ShopStack from "../stackShop";
import MyAccountScreen from "../../screens/account";
import AccountStack from "../stackAccount";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="stackHome"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon
            route={route.name}
            size={size}
            focused={focused}
            color={color}
          />
        ),
        tabBarActiveTintColor: GlobalVars.white,
        tabBarInactiveTintColor: GlobalVars.whiteLite,
        tabBarStyle: { backgroundColor: GlobalVars.black },
        showLabel: false,
      })}
    >
      <Tab.Screen
        name="stackHome"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="stackShelude"
        component={SheludeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="stackShop"
        component={ShopStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="myAccount"
        component={MyAccountScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
