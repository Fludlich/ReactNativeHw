import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { 
    View, 
    Keyboard, 
    TouchableWithoutFeedback, 
    KeyboardAvoidingView, 
    Platform
   } from "react-native";

import { Container } from "../main.styled";
import {
  PhotoBgc,
  ChoocePhotoBtn,
  PhotoLabel,
  Form,
  InputBox,
  Input,
  InputLocation,
  BtnSubmit,
  BtnText,
} from "./CreateScreen.styled";

const CreatePost = () => {
  const [isFocused, setIsFocused] = useState(null);
  const [file, setFile] = useState(false);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fullField, setFullField] = useState(false);
   
  const handleTouchOutside = () => {
    setIsFocused("")
    Keyboard.dismiss();
  };

  const photoHandler = () => {
    console.log("choose u photo");
    setFile(!file)
    if(file){
        setFullField(true)
    }else{
        setFullField(false)
    }
  };

  const formSubmit = () => {
    console.log(file, description, location)
  }

  return (
    <Container>
      <PhotoBgc>
        <ChoocePhotoBtn onPress={photoHandler}>
          <MaterialIcons name="photo-camera" size={20} color="#BDBDBD" />
        </ChoocePhotoBtn>
      </PhotoBgc>
      
        <PhotoLabel>
            {file ? "Download your picture" : "Edit picture"}
            </PhotoLabel>
      <TouchableWithoutFeedback onPress={handleTouchOutside}>
              <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{width: "100%", justifyContent: "flex-end"}}>
      <Form>
        <Input
          value={description}
          cursorColor="#dcdcdc"
          selectionColor="#dcdcdc"
          onFocus={() => setIsFocused("description")}
          style={
            isFocused === "description" && {
            //   backgroundColor: "#fff",
              borderBottomColor: "#FF6C00",
            }
          }
          placeholder="Description..."
          onChangeText={(data) => setDescription(data)}
        />
        <InputBox>
          <SimpleLineIcons
            name="location-pin"
            size={16}
            color="#dcdcdc"
            style={{ position: "absolute", left: 4, top: 16 }}
          />
          <InputLocation
            value={location}
            cursorColor="#dcdcdc"
            selectionColor="#dcdcdc"
            onFocus={() => setIsFocused("location")}
            style={
              isFocused === "location" && {
                // backgroundColor: "#fff",
                borderBottomColor: "#FF6C00",
              }
            }
            placeholder="Location..."
            onChangeText={(data) => setLocation(data)}
          />
        </InputBox>
      </Form>

      </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
      <BtnSubmit onPress={formSubmit} style={fullField && {backgroundColor:"#FF6C00"}}>
        <BtnText style={fullField && {color:"white"}}>Create post</BtnText>
      </BtnSubmit>
    </Container>
  );
};

export default CreatePost;
