import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { isAndroid } from "@freakycoder/react-native-helpers";
import RootStack from "navigation/RootStack";

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  return (   
      <RootStack />
  );
};

export default App;
