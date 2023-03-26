import React from "react";

import { View } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from "./screens/auth/LoginScreen/LoginScren";
import RegistrationScreen from "./screens/auth/RegistrationScreen/RegistrationScreen";

import PostScreen from "./screens/main/post/PostScreen";
import CreateScreen from "./screens/main/create/CreateScreen";
import ProfileScreen from "./screens/main/profile/ProfileScreen";

import { IconLabel } from "./router/router.styled";




export const checkRoute = (isAuth) =>{

    if(!isAuth){
      return (
        <Stack.Navigator>
        <Stack.Screen
        options={{
          headerShown: false
        }}
         name="Login" component = {LoginScreen}/>
        <Stack.Screen
        options={{
          headerShown: false
        }}
         name="Register" component = {RegistrationScreen}/>
        </Stack.Navigator>
      )
    }

    return(
      <View style={{flex:1}}>
           <MainTab.Navigator tabBarOptions={{showLabel:false}}>
            <MainTab.Screen 
                options={{
                    tabBarIcon: ({focused, size, color})=> <IconLabel focused={focused}><AntDesign name="appstore-o" size={size} color={focused? "white" : "black"} /></IconLabel>
                }}
                name="Posts" component = {PostScreen}/>
            <MainTab.Screen 
                options={{
                    tabBarIcon: ({focused, size, color})=> <IconLabel  focused={focused}><MaterialCommunityIcons name="plus" size={size} color={focused? "white" : "black"} /></IconLabel>
                }}
                name="Create post" component = {CreateScreen}/>
             {/* <Stack.Screen 
                options={{
                    tabBarIcon: ({focused, size, color})=> <IconLabel  focused={focused}><MaterialCommunityIcons name="plus" size={size} color={focused? "white" : "black"} /></IconLabel>
                }}
                name="Create pos" component = {CreateScreen}/> */}
            <MainTab.Screen
                options={{
                    tabBarIcon: ({focused, size, color})=> <IconLabel focused={focused}><Feather name="user" size={24} color={focused? "white" : "black"} /></IconLabel>
                }}
                name="Profile" component = {ProfileScreen}/>
        </MainTab.Navigator>
      </View>
    )
  }
  


//   <MainTab.Navigator tabBarOptions={{showLabel:false}}>
//   <MainTab.Screen 
//       options={{
//           tabBarIcon: ({focused, size, color})=> <IconLabel focused={focused}><AntDesign name="appstore-o" size={size} color={focused? "white" : "black"} /></IconLabel>
//       }}
//       name="Posts" component = {PostScreen}/>
//   <MainTab.Screen 
//       options={{
//           tabBarIcon: ({focused, size, color})=> <IconLabel  focused={focused}><MaterialCommunityIcons name="plus" size={size} color={focused? "white" : "black"} /></IconLabel>
//       }}
//       name="Create post" component = {CreateScreen}/>
//    {/* <Stack.Screen 
//       options={{
//           tabBarIcon: ({focused, size, color})=> <IconLabel  focused={focused}><MaterialCommunityIcons name="plus" size={size} color={focused? "white" : "black"} /></IconLabel>
//       }}
//       name="Create pos" component = {CreateScreen}/> */}
//   <MainTab.Screen
//       options={{
//           tabBarIcon: ({focused, size, color})=> <IconLabel focused={focused}><Feather name="user" size={24} color={focused? "white" : "black"} /></IconLabel>
//       }}
//       name="Profile" component = {ProfileScreen}/>
// </MainTab.Navigator>