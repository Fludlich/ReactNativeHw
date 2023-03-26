import React, { useState } from "react";
import { Text, View } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";

import { Container } from "../main.styled";
import {
  PostBox,
  Img,
  UserBox,
  Post,
  DescriptionText,
  InfoBox,
  FlexBox,
  CommentText,
  LocationText,
  PostImg,
} from "./PostScreen.styled";

import CommentsScreen from "../coments/CommentsScreen";

let data = [
  {
    photo: require("../../../assets/images/example/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"),
    description: "Some text",
    location: "Lviv, Ukraine",
    comments: 4,
  },
  {
    photo: require("../../../assets/images/example/flowers-276014__340.jpg"),
    description: "Some text",
    location: "Lviv, Ukraine",
    comments: 0,
  },
  {
    photo: require("../../../assets/images/example/gettyimages-1146431497.jpg.webp"),
    description: "Some text",
    location: "Lviv, Ukraine",
    comments: 1,
  },
  {
    photo: require("../../../assets/images/example/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg.avif"),
    description: "Some text",
    location: "Lviv, Ukraine",
    comments: 18,
  },
  {
    photo: require("../../../assets/images/example/Zugpsitze_mountain.jpg"),
    description: "Some text",
    location: "Lviv, Ukraine",
    comments: 3,
  },
];

initialState = {
  avatar: require("../../../assets/images/user.jpg"),
  name: "userName",
  surname: "Surname",
  email: "email.dar@gmail.com",
};

const PostScreen = () => {
  const [user, setUser] = useState(initialState);
  const [page, setPage] = useState(true)

  const commentHandler = () => {
    setPage(false)
    // console.log("move to comment");
  };

  const handleLocation = () => {
    console.log("move to location/map");
  };

  return (
    <Container>
     {page ? <PostBox>
                <UserBox>
                    <Img source={user.avatar}/>
                    <View>
                        <Text>{user.name}{user.surname}</Text>
                        <Text>{user.email}</Text>
                    </View>
                </UserBox>
                {data.map(el=>{
                    const {photo, description, comments, location} = el
                    return(
                        <Post>
                        <PostImg source={photo}/>
                        <DescriptionText>{description}</DescriptionText>
                        <InfoBox>
                            <FlexBox onPress={commentHandler}>
                            <FontAwesome5 name="comment" size={18} color="#BDBDBD" style={{marginLeft: 3, transform: "scaleX(-1)"}}/>
                                <CommentText>{comments}</CommentText>
                            </FlexBox>
                            <FlexBox onPress={handleLocation}>
                                <Ionicons name="location-outline" size={16} color="black" />
                                <LocationText>{location}</LocationText>
                            </FlexBox>
                        </InfoBox>
                    </Post>
                    )
                })}
        </PostBox> : <CommentsScreen/>}
    </Container>
  );
};

export default PostScreen;
