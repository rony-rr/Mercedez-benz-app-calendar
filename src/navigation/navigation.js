import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingUp from "../screens/singUp/index"
import TabNavigation from "../navigation/tabNavigation/index"

const Stack = createNativeStackNavigator();
const optionsScreen = { headerShown: false }
function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="singUp"
          component={SingUp}
          options={optionsScreen}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={optionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;