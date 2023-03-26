import { 
  View, 
  Keyboard, 
  TouchableWithoutFeedback, 
  KeyboardAvoidingView, 
  Platform
 } from "react-native";
import {
  Title,
  Content
} from "./LoginScreen.styled";

import {
  Input,
  Form,
  Box,
  ShowPassword,
  PasswordText,
  ButtonSubmit,
  SubmitText,
  Background,
  // LinkToRegister,
  NavText,
  LinkToScreen,
} from "../Auth.styled";

import { useState } from "react";
//import { Btn, BtnText } from "../../../App.styled";
const image = require("../../../assets/images/photo.jpg");

const LoginScreen = ({ onRegister, keyboardShown, navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordShown, setPasswordShown] = useState(false)
  const [isFocused, setIsFocused] = useState(false);
 
  const handleTouchOutside = () => {
    setIsFocused("")
    Keyboard.dismiss();
  };

const submitForm = () =>{
  console.log(email, password)
}


  return (
      <Box>
          <Background source={image}>
            <TouchableWithoutFeedback onPress={handleTouchOutside}>
              <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{width: "100%", justifyContent: "flex-end"}}>
                <Content myHeight={keyboardShown? "shown": "hiden"}>
                  <Title>Login</Title>
                  <Form>
              
                    <Input
                      style = { isFocused === "email" && {backgroundColor: "#fff", borderColor: "#FF6C00" }}
                      value = {email}
                      cursorColor="#dcdcdc"
                      selectionColor="#dcdcdc"
                      placeholder="Enter your email"
                      placeholderTextColor="#dcdcdc"
                      textContentType="emailAddress"
                      keyboardType = "email-address"
                      onFocus={()=>setIsFocused("email")}
                      onChangeText={(email) => setEmail(email)}
                      // onBlur={()=>setIsFocused("")}
                      // onSubmitEditing={Keyboard.dismiss}
                    />
                <View style={{position: "relative"}}>
                <Input
                      style = { isFocused === "password" && {backgroundColor: "#fff", borderColor: "#FF6C00" }}
                      value = {password}
                      cursorColor="#dcdcdc"
                      selectionColor="#dcdcdc"
                      placeholder="Enter your password"
                      keyboardType = "email-address"
                      placeholderTextColor="#dcdcdc"
                      secureTextEntry={!passwordShown}
                      onChangeText={(password) => setPassword(password)}
                      onFocus={()=>setIsFocused("password")}
                      // onBlur={()=>setIsFocused("")}
                      // onSubmitEditing={Keyboard.dismiss}
                    />
                   {password!=="" && <ShowPassword onPress={()=> setPasswordShown(!passwordShown)}>
                      <PasswordText>{passwordShown? "Hide" : "Show"}</PasswordText>
                    </ShowPassword>}
                </View>
                <ButtonSubmit onPress ={submitForm}>
                  <SubmitText>
                    Enter
                  </SubmitText>
                </ButtonSubmit>
                  </Form>
                  <LinkToScreen 
                    onPress={()=>navigation.navigate("Register")}>
                   {({pressed}) => ( <NavText hover={pressed ? "active" : "null"}>Don't have account yet? Register</NavText>)}
                  </LinkToScreen>
                </Content>
              </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
          </Background>
      </Box>
  );
};

export default LoginScreen