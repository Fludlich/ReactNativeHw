import React, { useState, useEffect } from "react";
import { Text, View, FlatList} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";

import { Container } from "../../main/main.styled";
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

const PostScreen = ({route, navigation}) => {
  const [user, setUser] = useState(initialState);
  const [posts, setPosts] = useState([])

  useEffect(()=>{
   if(route.params !== undefined && route.params){
    setPosts(prevState=>[route.params, ...posts])
   }
  },[route])

  return (
    <Container>
        <PostBox>
          <UserBox>
            <Img source={user.avatar} />
            <View>
              <Text>
                {user.name}
                {user.surname}
              </Text>
              <Text>{user.email}</Text>
            </View>
          </UserBox>
          <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Post>
                <PostImg source={{uri: item.photo}} />
                <DescriptionText>{item.description}</DescriptionText>
                <InfoBox>
                  <FlexBox onPress={() => navigation.navigate("Comments")}>
                    <FontAwesome5
                      name="comment"
                      size={18}
                      color="#BDBDBD"
                      style={{ marginLeft: 3, transform: [{ scaleX: -1 }] }}
                    />
                    <CommentText>
                      {item.comments === undefined ? 0 : item.comments}
                    </CommentText>
                  </FlexBox>
                  <FlexBox onPress={() => navigation.navigate("Map")}>
                    <Ionicons name="location-outline" size={16} color="black" />
                    <LocationText>{item.location}</LocationText>
                  </FlexBox>
                </InfoBox>
              </Post>
            )}
          />
        </PostBox>

    </Container>
  );
};

export default PostScreen;
