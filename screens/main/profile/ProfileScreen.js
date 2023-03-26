import React from "react";

import { Box, Background } from "../../auth/Auth.styled";
import { ContentRegister, RegTitle } from "../../auth/RegistrationScreen/RegistrationScreen.styed";
import { Post, PostImg, DescriptionText, InfoBox, FlexBox, CommentText, LocationText, PostBox } from "../../nestedScreens/post/PostScreen.styled";
import { AvatarBox, Avatar, BtnHandlerAvatar, PreAvatarBox, Logout } from "./ProfileScreen.styled";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from "react-native";

const image = require("../../../assets/images/photo.jpg");

const user = {
    avatar: require("../../../assets/images/user.jpg"),
    name: "userName",
    surname: "Surname",
    posts: [
        {
            photo: require("../../../assets/images/example/gettyimages-1146431497.jpg.webp"),
            description: "Some text",
            location: "Lviv, Ukraine",
            comments: 1,
            likes: 10
          },
          {
            photo: require("../../../assets/images/example/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg.avif"),
            description: "Some text",
            location: "Lviv, Ukraine",
            comments: 18,
            likes: 190
          },
          {
            photo: require("../../../assets/images/example/Zugpsitze_mountain.jpg"),
            description: "Some text",
            location: "Lviv, Ukraine",
            comments: 3,
            likes: 100
          },
    ]
}

const ProfileScreen = () => {

    const logoutHandler = () => {
        // setPage(false)
        console.log("LOGOUT");
      };

    const avatarHandler = () => {
        // setPage(false)
        console.log("remove avatar");
      };

    const commentHandler = () => {
        // setPage(false)
        console.log("move to comment");
      };

    const likeHandler = () => {
        // setPage(false)
        console.log("move to comment");
      };
    
    const handleLocation = () => {
        console.log("move to location/map");
      };

    return (
    <Box>
        <Background source={image}>
            <ContentRegister>
                <Logout onPress={logoutHandler}>
                     <MaterialIcons name="logout" size={24} color="#E8E8E8" />
                </Logout>
                <PreAvatarBox>
                    <AvatarBox>
                        <Avatar source={image}/>
                        <BtnHandlerAvatar onPress={avatarHandler}>
                            {/* <Entypo name="plus" size={24} color="#E8E8E8" /> */}
                            <MaterialCommunityIcons name="plus" size={24} color="#E8E8E8" style={{transform: [{rotate: "45deg"}]}} />
                        </BtnHandlerAvatar>
                    </AvatarBox>
                </PreAvatarBox>
                <RegTitle>{user.name} {user.surname}</RegTitle>
                    <PostBox>
                    {user.posts.map(el=>{
                        const {photo, description, comments, location, likes} = el
                        return(
                            <Post key={likes.toString()}>
                            <PostImg source={photo}/>
                            <DescriptionText>{description}</DescriptionText>
                            <InfoBox>
                                <FlexBox unique={true}>
                                    <FlexBox onPress={commentHandler}>
                                    <FontAwesome5 name="comment" size={18} color="#BDBDBD" style={{marginLeft: 3, transform: [{scaleX:-1}]}}/>
                                        <CommentText>{comments}</CommentText>
                                    </FlexBox>
                                    <FlexBox onPress={likeHandler}>
                                    <AntDesign name="like2" size={18} color="#BDBDBD" />
                                        <CommentText>{likes}</CommentText>
                                </FlexBox>
                                </FlexBox>
                                <FlexBox onPress={handleLocation}>
                                    <Ionicons name="location-outline" size={16} color="black" />
                                    <LocationText>{location}</LocationText>
                                </FlexBox>
                            </InfoBox>
                        </Post>
                        )
                    })}
                    </PostBox>
            </ContentRegister>
        </Background>
    </Box>)
}

export default ProfileScreen