import styled from "styled-components/native";
//import { StyleSheet, Text, View } from 'react-native';

export const Box = styled.View`
    flex: 1;
    flex-direction: column;
    /* justify-content: space-around; */
    /* align-items: flex-end; */

    /* justify-content: flex-end; */
`

export const Background = styled.ImageBackground`
    flex: 1;
    resize: cover;
    justify-content: flex-end;
    /* align-items: center; */
  
`

export const Content = styled.View`
   background-color: #fff;
   /* height: 489px; */
   height: 80%;
   border-top-left-radius: 25px ;
   border-top-right-radius: 25px ;
  /* // border-radius: 25px 25px 0px 0px; */
   align-items: center;
   /* position: relative; */
   padding: 32px 16px 0 16px;
 //  gap: 32px;
 height: ${(p) =>
      p.myHeight === "shown" ? `60%` : `80%`};;
`

export const Title = styled.Text`
    font-family: 'Mont-Normal';
    color: black;
    font-size: 30px;
    margin-bottom: 32px;
`

export const Form = styled.View`
    /* padding-top: 32px; */
    width: 100%;
    gap: 16px;
`

export const Input = styled.TextInput`
    font-family: 'Mont-Daily';
    color: black;
    font-size: 16px;
    width: 100%;
    padding: 16px 15px;
    border-radius: 10px;
    font-weight: 400;
    background-color: #F6F6F6;
    border: 1px solid  #dcdcdc ;

    /* &:focus,
    :hover{
        background-color: #fff;
        border-color: #FF6C00;
    } */

`

export const BackBtnBox = styled.View`
    /* margin: 80px 20px; */
    padding: 20% 10%;
    height: 40%;
`

export const ShowPassword = styled.Pressable`
    /* margin: 80px 20px; */
    /* padding: 20% 10%;
    height: 40%; */
    bottom: 30%;
    //transform: translateX(50%);
    right: 16px;
    position: absolute;
`

export const PasswordText = styled.Text`
    font-family: 'Mont-Daily';
    color: #1B4371;
    font-size: 16px;
`

export const ButtonSubmit = styled.Pressable`
    margin-top: 27px;
    background-color: #FF6C00;
    padding: 16px;
    border-radius: 25px;
    align-items: center;
`

export const SubmitText = styled.Text`
    font-family: 'Mont-Normal';
    color: #fff;
    font-size: 16px;
`
  
  export const LinkToREgister = styled.Pressable`
    color: #fff;
    margin-top: 16px;
`
export const RegisterTExt = styled.Text`
    font-family: 'Mont-Daily';
    color: #1B4371;
    font-size: 16px;
`