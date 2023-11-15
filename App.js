import 'react-native-gesture-handler';

import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
// import Home from "./screens/Home";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { HomeStack} from "./routes/homeStack";
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigationStack } from './routes/RootNavigationStack';

const YourApp = () => {
  const [fontsLoaded, fontError] = useFonts({
    'nunito': require('./fonts/NunitoSans_10pt-Regular.ttf'),
    'nunito-semibold': require('./fonts/NunitoSans_10pt-SemiBold.ttf'),
    'nunito-extrabold': require('./fonts/NunitoSans_10pt-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    
      <NavigationContainer onLayout={onLayoutRootView}>
        <RootNavigationStack />
        {/* <HomeStack /> */}
      </NavigationContainer>
  );
};

export default YourApp;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "pink",
    // paddingVertical: 40,
  },
});
