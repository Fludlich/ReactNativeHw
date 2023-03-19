import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from "react-native";
import {
  Title,
  Input,
  Form,
  BackBtnBox,
  Content,
  ShowPassword,
  PasswordText,
  ButtonSubmit,
  SubmitText,
  LinkToREgister,
  RegisterTExt
} from "./LoginScreen.styled";
import { useState } from "react";
import { Btn, BtnText } from "../../App.styled";


export const LoginScreen = ({ onRegister, keyboardShown }) => {
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
          <ShowPassword onPress={()=> setPasswordShown(!passwordShown)}>
            <PasswordText>Show</PasswordText>
          </ShowPassword>
      </View>
      <ButtonSubmit onPress ={submitForm}>
        <SubmitText>
          Enter
        </SubmitText>
      </ButtonSubmit>
        </Form>
  

        <LinkToREgister onPress={onRegister}>
          <RegisterTExt>Don't have account yet? Register</RegisterTExt>
        </LinkToREgister>
      </Content>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
