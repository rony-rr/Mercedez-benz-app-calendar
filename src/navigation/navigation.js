import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "../navigation/tabNavigation";
import AccountStack from "./stackAccount";
import UploadPicScreen from "../screens/uploadPicProfile";
import VerifyScreen from "../screens/verifyAuth";

const Stack = createNativeStackNavigator();
const optionsScreen = { headerShown: false };

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="verifyAuth"
          component={VerifyScreen}
          options={optionsScreen}
        />
        <Stack.Screen
          name="account"
          component={AccountStack}
          options={optionsScreen}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={optionsScreen}
        />
        <Stack.Screen
          name="uploadPic"
          component={UploadPicScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
