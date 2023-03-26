import styled from "styled-components/native";
//import { StyleSheet, Text, View } from 'react-native';

export const Content = styled.View`
   background-color: #fff;
   height: 80%;
   border-top-left-radius: 25px ;
   border-top-right-radius: 25px ;
   align-items: center;
   padding: 32px 16px 0 16px;
   height: ${(p) =>
      p.myHeight === "shown" ? `60%` : `80%`};;
`

export const Title = styled.Text`
    font-family: 'Mont-Normal';
    color: black;
    font-size: 30px;
    margin-bottom: 32px;
`