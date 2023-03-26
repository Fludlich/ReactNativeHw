
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { checkRoute } from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Italic-Mont-Title": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "Mont-Title": require("./assets/fonts/Roboto-Bold.ttf"),
    "Italic-Mont-Normal": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "Mont-Normal": require("./assets/fonts/Roboto-Medium.ttf"),
    "Mont-Daily": require("./assets/fonts/Roboto-Regular.ttf"),
  });

const routing = checkRoute(true)

 
  if (!fontsLoaded) {
    return (
      <AppLoading
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}
