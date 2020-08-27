import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    BalooTamma2SemiBold: require('./assets/fonts/BalooTamma2-SemiBold.ttf'),
    BalooTamma2Bold: require('./assets/fonts/BalooTamma2-Bold.ttf'),
    NunitoLight: require('./assets/fonts/Nunito-Light.ttf'),
    NunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    NunitoSemiBold: require('./assets/fonts/Nunito-SemiBold.ttf'),
    NunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppNavigator />
      </>
    );
  }
}
