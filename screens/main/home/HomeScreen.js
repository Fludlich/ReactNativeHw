import React, { useState } from "react";

import {Pressable, Text, View} from "react-native"
import { Container } from "../main.styled";
//import { PostsBox, Img, UserBox } from "./PostScreen.styled";

initialState ={
    avatar: require("../../../assets/images/user.jpg"),
    name: "userName",
    surname: "Surname",
    email: "email.dar@gmail.com"
}

const HomeScreen = () => {
    const [user, setUser] = useState(initialState)
    const [page, setPage] = useState("")

console.log(page)

    return(
            <Container>
                <Text style={{marginLeft: 105, marginTop: 300, fontSize: 40}}>Home Page</Text>
              {/* <PostsBox>
                <UserBox>
                <Img source={user.avatar}></Img>
                    <View>
                        <Text>{user.name} {user.surname}</Text>
                        <Text>{user.email}</Text>
                    </View>
                </UserBox>
                <Pressable 
                onPress={()=>setPage("Create")}
                style={{width: 200, height: 40, justifyContent: "center", alignItems: "center", backgroundColor:"orange", borderRadius:20, marginTop: 40, marginHorizontal:90}}>
                    <Text>ADD POST</Text>
                </Pressable>
              </PostsBox> */}
            </Container>
         )
}

export default HomeScreen