import React, { useState, useRef, useEffect } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location"
import { Camera } from "expo-camera";
import { 
    Keyboard, 
    TouchableWithoutFeedback, 
    KeyboardAvoidingView, 
    Platform
   } from "react-native";


// import { PermissionsAndroid } from 'react-native';
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';



import { Container } from "../../main/main.styled";
import {
  PhotoBgc,
  PhotoBgc1,
  ChoocePhotoBtn,
  PhotoLabel,
  Form,
  InputBox,
  Input,
  InputLocation,
  BtnSubmit,
  BtnText,
  Prevue
} from "./CreateScreen.styled";

const CreatePost = ({navigation}) => {
  const [isFocused, setIsFocused] = useState(null);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null)
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  
  const [hasPermission, setHasPermission] = useState(null);
   const [isCameraReady, setIsCameraReady] = useState(false);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);
  
    const onCameraReady = () => {
      setIsCameraReady(true);
    };
  
   useEffect(() => {
     (async () => {
       let { status } = await Location.requestForegroundPermissionsAsync();
       if (status !== "granted") {
         setErrorMsg("Permission to access location was denied");
         return;
       }

       let location = await Location.getCurrentPositionAsync({});
       setLocation(location);
     })();
   }, []);

  const cameraRef = useRef()

  const handleTouchOutside = () => {
    setIsFocused("")
    Keyboard.dismiss();
  };
  const removePhoto = () => {
    setPhoto(false)
  };

  const takePicture = async () => {

    if (cameraRef.current && isCameraReady) {
      // const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync();
      setPhoto(data.uri);
    }
  };

  const formSubmit = () => {
    navigation.navigate("Posts", {photo, location, description})
  }

  return (
    <Container>
      {!photo && (
        <PhotoBgc1 ref={cameraRef} onCameraReady={onCameraReady}>
          <ChoocePhotoBtn onPress={takePicture}>
            <MaterialIcons name="photo-camera" size={20} color="#BDBDBD" />
          </ChoocePhotoBtn>
        </PhotoBgc1>
      )}
      {photo && (
        <PhotoBgc>
          <Prevue source={{ uri: photo }} />
        </PhotoBgc>
      )}
      <PhotoLabel style={photo && { color: "#FF6C00" }} onPress={removePhoto}>
        {!photo ? "Download your picture" : "Remove picture"}
      </PhotoLabel>
      <TouchableWithoutFeedback onPress={handleTouchOutside}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ width: "100%", justifyContent: "flex-end" }}
        >
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
                // value={location}
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
      <BtnSubmit
        onPress={formSubmit}
        style={photo && { backgroundColor: "#FF6C00" }}
      >
        <BtnText style={photo && { color: "white" }}>Create post</BtnText>
      </BtnSubmit>
    </Container>
  );
};

export default CreatePost;
