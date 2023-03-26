import React, { useState } from "react";

import { Ionicons } from '@expo/vector-icons';
import { 
    View, 
    Image,
    Text,
    Keyboard,
    TouchableWithoutFeedback, 
    KeyboardAvoidingView, 
    Platform,
    Pressable
   } from "react-native";

import { Container } from "../main.styled";
import {
  CommentsBox,
  ChatBox,
  Comment,
  CommentImg,
  CommentDiv,
  CommentDate,
  CommentText,
  Form,
  Input,
  BtnSubmit
} from "./CommentsScreen.styled";
import { PostImg } from "../post/PostScreen.styled";

const data = {
  postImg: require("../../../assets/images/example/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"),
  comments:[
    {
      avatar: require("../../../assets/images/example/flowers-276014__340.jpg"),
      comment: "The ScrollView is a generic scrolling container that can contain multiple components and views.",
      date: "09 june, 2020",
      time: "08:40",
      owner: false,
      id: 1
    },
    {
      avatar: require("../../../assets/images/user.jpg"),
      comment: "The ScrollView is a generic scrolling container that can contain multiple components and views.",
      date: "09 june, 2020",
      time: "08:40",
      owner: true,
      id: 2
    },
    {
      avatar: require("../../../assets/images/example/gettyimages-1146431497.jpg.webp"),
      comment: "The ScrollView is a generic scrolling container that can contain multiple components and views.",
      date: "09 june, 2020",
      time: "08:40",
      owner: false,
      id: 3
    },
    {
      avatar: require("../../../assets/images/example/gettyimages-1146431497.jpg.webp"),
      comment: "The ScrollView is a generic scrolling container that can contain multiple components and views.",
      date: "09 june, 2020",
      time: "08:40",
      owner: true,
      id: 4
    },
  ]
}

const CommentsScreen = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [text, setText] = useState("")

  const handleTouchOutside = () => {
    setIsFocused(false)
    Keyboard.dismiss();
  };

const submitForm = () =>{
  console.log(email, password)
}


  return (
    <CommentsBox>
      <PostImg source={data.postImg}/>
      <TouchableWithoutFeedback onPress={handleTouchOutside}>
              <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              // style={{width: "100%", justifyContent: "flex-end"}}
              >
      <ChatBox>
        {data.comments.map(el=>{
          const {avatar, comment, date, time, id, owner} = el
          return(
            //box
            <Comment owner = {owner} key={id}>
              <CommentImg source={avatar}/>
              <CommentDiv owner = {owner}>
                <CommentText owner = {owner}>{comment}</CommentText>
                <CommentDate owner = {owner}>{date} | {time}</CommentDate>
              </CommentDiv>
            </Comment>
          )
        })}
        <Form>
            <Input
              style = { isFocused && {backgroundColor: "#fff", borderColor: "#FF6C00" }}
              value = {text}
              cursorColor="#dcdcdc"
              selectionColor="#dcdcdc"
              placeholder="Comment..."
              onFocus={()=>setIsFocused(true)}
              onChangeText={(x) => setText(x)}
            />
         {text !== "" && <BtnSubmit>
            <Ionicons name="ios-arrow-up-outline" size={14} color="white" />
          </BtnSubmit>}
        </Form>
      </ChatBox>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </CommentsBox>
  );
};

export default CommentsScreen;
