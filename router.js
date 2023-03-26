import React from "react";

// import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from "./screens/auth/LoginScreen/LoginScren";
import RegistrationScreen from "./screens/auth/RegistrationScreen/RegistrationScreen";

import PostScreen from "./screens/nestedScreens/post/PostScreen";
import CreateScreen from "./screens/main/create/CreateScreen";
import ProfileScreen from "./screens/main/profile/ProfileScreen";

// import PostsScreen from "./screens/main/home/HomeScreen";

import { IconLabel } from "./router/router.styled";
import MapScreeen from "./screens/nestedScreens/map/MapScreen";
import CommentsScreen from "./screens/nestedScreens/coments/CommentsScreen";

export const checkRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    );
  }
  function HomeTabs() {
    return (
      <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
        <MainTab.Screen
          name="Posts"
          component={PostScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <IconLabel focused={focused}>
                <AntDesign
                  name="appstore-o"
                  size={size}
                  color={focused ? "white" : "black"}
                />
              </IconLabel>
            ),
          }}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <IconLabel focused={focused}>
                <MaterialCommunityIcons
                  name="plus"
                  size={size}
                  color={focused ? "white" : "black"}
                />
              </IconLabel>
            ),
          }}
          name="Create post"
          component={CreateScreen}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <IconLabel focused={focused}>
                <Feather
                  name="user"
                  size={24}
                  color={focused ? "white" : "black"}
                />
              </IconLabel>
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </MainTab.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeTabs}
      />
      <Stack.Screen
        name="Map"
        component={MapScreeen}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
      />
    </Stack.Navigator>
  );

  //   <View style={{ flex: 1 }}>
  //     <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
  //       <MainTab.Screen
  //         options={{
  //           headerShown: false,
  //           tabBarIcon: ({ focused, size, color }) => (
  //             <IconLabel focused={focused}>
  //               <AntDesign
  //                 name="appstore-o"
  //                 size={size}
  //                 color={focused ? "white" : "black"}
  //               />
  //             </IconLabel>
  //           ),
  //         }}
  //         name="Home"
  //         component={PostsScreen}
  //       />
  //       <MainTab.Screen
  //         options={{
  //           tabBarIcon: ({ focused, size, color }) => (
  //             <IconLabel focused={focused}>
  //               <MaterialCommunityIcons
  //                 name="plus"
  //                 size={size}
  //                 color={focused ? "white" : "black"}
  //               />
  //             </IconLabel>
  //           ),
  //         }}
  //         name="Create post"
  //         component={CreateScreen}
  //       />
  //       <MainTab.Screen
  //         options={{
  //           tabBarIcon: ({ focused, size, color }) => (
  //             <IconLabel focused={focused}>
  //               <Feather
  //                 name="user"
  //                 size={24}
  //                 color={focused ? "white" : "black"}
  //               />
  //             </IconLabel>
  //           ),
  //         }}
  //         name="Profile"
  //         component={ProfileScreen}
  //       />
  //     </MainTab.Navigator>
  //   </View>
  // );
};

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
