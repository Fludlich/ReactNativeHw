import styled from "styled-components/native";

const MyComponent = styled.View`
  background-color: red;
` 
export const Box = styled.View`
    flex: 1;
    flex-direction: column;
`
export const Background = styled.ImageBackground`
    flex: 1;
    resize: cover;
    justify-content: flex-end;
`

export const Form = styled.View`
    width: 100%;
    gap: 16px;
`

export const Input = styled.TextInput`
    font-family: Mont-Daily;
    color: black;
    font-size: 16px;
    width: 100%;
    padding: 16px 15px;
    border-radius: 10px;
    font-weight: 400;
    background-color: #F6F6F6;
    border: 1px solid  #dcdcdc ;
`

export const ShowPassword = styled.Pressable`
    bottom: 30%;
    right: 16px;
    position: absolute;
`

export const PasswordText = styled.Text`
    font-family: Mont-Daily;
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
    font-family: Mont-Normal;
    color: #fff;
    font-size: 16px;
`
export const LinkToScreen = styled.Pressable`
color: #fff;
margin-top: 16px;



`
export const NavText = styled.Text`
margin-top: 16px;
font-family: Mont-Daily;
font-size: 16px;
padding: 5px;
color:  "#1B4371" ;
transform: scale(1);
color: ${(p) =>  p.hover === "active" ? "#FF6C00" : "#1B4371" };
transform: ${(p) => p.hover === "active" ? "scale(1.1)" : "scale(1)"};
transition-duration:  2s ;
`