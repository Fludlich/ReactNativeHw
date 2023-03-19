import { Text, View, Keyboard, TouchableWithoutFeedback} from "react-native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import { Title } from "./components/LoginScreen/LoginScreen.styled";
import { MainBox, BtnBox, Btn, BtnText } from "./App.styled";
import { LoginScreen } from "./components/LoginScreen/LoginScren";
import { Box, Background } from "./components/LoginScreen/LoginScreen.styled";
import { RegistrationScreen } from "./components/RegistrationScreen/RegistrationScreen";

const image = require("./assets/images/photo.jpg");

export default function App() {
  const [fontsLoaded] = useFonts({
    "Italic-Mont-Title": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "Mont-Title": require("./assets/fonts/Roboto-Bold.ttf"),
    "Italic-Mont-Normal": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "Mont-Normal": require("./assets/fonts/Roboto-Medium.ttf"),
    "Mont-Daily": require("./assets/fonts/Roboto-Regular.ttf"),
    //'Roboto': require('./assets/fonts/Roboto-Black.ttf'),
  });
  const [login, setLogin] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState("");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [keyboardStatus]);


  const changeScreen = () => {
    setLogin(!login);
    setRegistration(!registration);
  };

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  const handleTouchOutside = () => {
    
    Keyboard.dismiss();
  };

  return (
    <Box>
       <TouchableWithoutFeedback onPress={handleTouchOutside}>
      <Background source={image}>
        {!login && !registration && (
          <MainBox>
            {!login && !registration && (
              <Title>Open up App.js to start working on your app!</Title>
            )}
            <BtnBox>
              <Btn onPress={() => setLogin(true)}>
                <BtnText>Login</BtnText>
              </Btn>
              <Btn onPress={() => setRegistration(true)}>
                <BtnText>Registration</BtnText>
              </Btn>
            </BtnBox>
          </MainBox>
        )}

        {login && (
          <LoginScreen
            onRegister={changeScreen}
            keyboardShown = {keyboardStatus}
          ></LoginScreen>
        )}
        {registration && (
          <RegistrationScreen
            onRegister={changeScreen}
            keyboardShown = {keyboardStatus}
          ></RegistrationScreen>
        )}
      </Background>
      </TouchableWithoutFeedback>
    </Box>
  );
}
