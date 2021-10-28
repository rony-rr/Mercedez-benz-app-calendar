import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from '../../components/organisms/tabIcon/index'
import GlobalVars from "../../global/globalVars";
import HomeStack from "../stackHome/index";
import SheludeStack from "../stackShelude";
import ShopStack from "../stackShop";
import AccountStack from "../stackAccount";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
 
      <Tab.Navigator
        initialRouteName="stackHome"
        screenOptions={({ route }) => ({
          tabBarShowLabel:false,
          tabBarIcon: ({ focused, color, size }) => <TabIcon route={route.name} size={size} focused={focused} color={color} />,
          tabBarActiveTintColor: GlobalVars.white,
          tabBarInactiveTintColor: GlobalVars.whiteLite,
          tabBarStyle: { backgroundColor:GlobalVars.black},
          showLabel:false
        })}
      >
        <Tab.Screen
          name="stackHome"
          component={HomeStack}
          options={{ title: "inicio", headerShown: false }}
        />
        <Tab.Screen
          name="stackShelude"
          component={SheludeStack}
          options={{ title: "inicio", headerShown: false }}
        />
        <Tab.Screen
          name="stackShop"
          component={ShopStack}
          options={{ title: "inicio", headerShown: false }}
        />
        <Tab.Screen
          name="stackAccount"
          component={AccountStack}
          options={{ title: "inicio", headerShown: false }}
        />
       
      </Tab.Navigator>
    
  );


}
