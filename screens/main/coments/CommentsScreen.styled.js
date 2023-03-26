import styled from "styled-components/native";

export const CommentsBox = styled.View`
    flex: 1;
    gap: 32px;
`

export const ChatBox = styled.View`
    position: relative;
    /* flex: 1; */
    gap: 24;
`

export const Comment = styled.View`
    gap: 16px;
    /* flex-direction: row; */
    flex-direction:  ${(p)=> p.owner === true ? "row-reverse" : "row"};
    /* height: auto; */
    /* text-align: ${(p)=> p.owner === true ? "right" : "left"}; */
    width: 100%;


`

export const CommentImg = styled.Image`
    width: 28px;
    height: 28px;
    border-radius: 50%;
`

export const CommentDiv = styled.View`
   background-color: #E5E5E5;
    /* width: clac(100% - 92px); */
    /* width: 88%;
    height: 45px; */
    width:  89%;
    padding: 16px;
    gap: 8px;
    border-radius: 6px;
    border-top-left-radius: 0%;
    transform:  ${(p)=> p.owner === true && "scaleX(-1)"} ;
`

export const CommentText = styled.Text`
   font-family: Mont-Daily;
   font-size: 13px;
   line-height: 18;
   color: #212121;
   transform:  ${(p)=> p.owner === true && "scaleX(-1)"} ;
`
export const CommentDate = styled.Text`
     font-family: Mont-Daily;
   font-size: 10px;
   color: #BDBDBD;
   text-align: right;
   text-align: ${(p)=> p.owner === true ? "right" : "left"};
   transform:  ${(p)=> p.owner === true && "scaleX(-1)"} ;
`
export const Form = styled.View`
    position: fixed;
    bottom: 160px;
    margin-bottom: 16px;
`
export const Input = styled.TextInput`
    background-color: #F6F6F6;
    font-family: Mont-Normal;
    font-size: 16px;
    padding: 16px;
    position: relative;
    color: #BDBDBD;
    border: 1px solid #E8E8E8;
    border-radius: 30px;
`

export const BtnSubmit = styled.Pressable`
    position: absolute;
    right: 8px;
    /* top: 16px; */
    width: 34px;
    height: 34px;
    justify-content: center;
    align-items: center;
    background-color: #FF6C00;
    top: 9px;
    border-radius: 50%;
`