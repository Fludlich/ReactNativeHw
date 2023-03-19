import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from "react-native";
import {
  Title,
  Input,
  Form,
  ShowPassword,
  PasswordText,
  ButtonSubmit,
  SubmitText,
  LinkToREgister,
  RegisterTExt
} from "../LoginScreen/LoginScreen.styled";
import { ContentREgister, RegTitle } from "./RegistrationScreen.styed";
import { useState, useRef } from "react";

export const RegistrationScreen = ({ onRegister, keyboardShown }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [passwordShown, setPasswordShown] = useState(false)
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

    const [keyboardStatus, setKeyboardStatus] = useState('');
  
    // useEffect(() => {
    //     const showSubscription1 = Keyboard.addListener('keyboardWillShow', () => {
    //         console.log("tut")
    //         setKeyboardStatus('Keyboard Shown');
    //       });
    //   const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
    //     console.log("tut1")
    //     setKeyboardStatus('Keyboard Shown');
    //   });
    //   const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
    //     console.log("tut2")
    //     setKeyboardStatus('Keyboard Hidden');
    //   });
  
    //   return () => {
    //     showSubscription1.remove();
    //     showSubscription.remove();
    //     hideSubscription.remove();
    //   };
    // }, []);

    const handleTouchOutside = () => {
        setIsFocused("")
        Keyboard.dismiss();
      };
const submitForm = () =>{
  console.log(email, password, login)
}

  return (
    <TouchableWithoutFeedback onPress={handleTouchOutside}>
           <KeyboardAvoidingView
        // behavior="padding" enabled={true}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{width: "100%", justifyContent: "flex-end"}}>
      <ContentREgister  myHeight={keyboardShown? "shown": "hiden"}>
        <RegTitle>Registration</RegTitle>
        <Form> 
            <Input
           // ref={inputRef}
            style = { isFocused === "login" && {backgroundColor: "#fff", borderColor: "#FF6C00" }}
            value = {login}
            cursorColor="#dcdcdc"
            selectionColor="#dcdcdc"
            placeholder="Login"
            placeholderTextColor="#dcdcdc"
            textContentType="emailAddress"
            // keyboardType = "email-address"
            onFocus={()=>setIsFocused("login")}
            onChangeText={(login) => setLogin(login)}
            // onBlur={()=>setIsFocused("")}
            onSubmitEditing={Keyboard.dismiss}
          />
          <Input
        //  ref={inputRef}
            style = { isFocused === "email" && {backgroundColor: "#fff", borderColor: "#FF6C00" }}
            value = {email}
            cursorColor="#dcdcdc"
            selectionColor="#dcdcdc"
            placeholder="Enter your email"
            placeholderTextColor="#dcdcdc"
            textContentType="emailAddress"
            // keyboardType = "email-address"
            onFocus={()=>setIsFocused("email")}
            onChangeText={(email) => setEmail(email)}
            // onBlur={()=>setIsFocused("")}
            onSubmitEditing={Keyboard.dismiss}
          />
      <View style={{position: "relative"}}>
      <Input
    //  ref={inputRef}
            style = { isFocused === "password" && {backgroundColor: "#fff", borderColor: "#FF6C00" }}
            value = {password}
            cursorColor="#dcdcdc"
            selectionColor="#dcdcdc"
            placeholder="Enter your password"
            // keyboardType = "email-address"
            placeholderTextColor="#dcdcdc"
            secureTextEntry={!passwordShown}
            onChangeText={(password) => setPassword(password)}
            onFocus={()=>setIsFocused("password")}
            // onBlur={()=>setIsFocused("")}
            onSubmitEditing={Keyboard.dismiss}
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
        </ContentREgister>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
