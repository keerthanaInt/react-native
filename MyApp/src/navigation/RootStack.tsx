import React, { useLayoutEffect } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { NavigationContainer } from "@react-navigation/native";
import { LightTheme, DarkTheme, } from "@theme/themes";

const RootStack = () => {
  const isLogin = false;
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  useLayoutEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    let login = JSON.parse(await AsyncStorage.getItem('login') || '{}');
  };

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >{isLogin ? <AppStack /> : <AppStack />}</NavigationContainer>

  );
};

export default RootStack;
