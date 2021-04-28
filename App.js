import React from 'react';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PrepScreen from './stacks/PrepScreen'
import PushupScreen from './stacks/PushupScreen'
import SuccessScreen from './stacks/SuccessScreen'
import FailureScreen from './stacks/FailureScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer theme={NavigationDarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Pushup Helper" component={PrepScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Perform Pushups" component={PushupScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Success" component={SuccessScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Failed" component={FailureScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}