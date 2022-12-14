import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
// import {TailwindProvider} from 'tailwind-rn';
// import utilities from './tailwind.json';
import { TailwindProvider } from 'tailwindcss-react-native';
import GlobalStyles from './GlobalStyles';
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
          <Stack.Navigator>
              <Stack.Screen name="Index" component={HomeScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </TailwindProvider>
    </NavigationContainer>
  );
}
