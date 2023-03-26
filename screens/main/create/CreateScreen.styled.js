import styled from "styled-components/native";

export const PhotoBgc = styled.View`
    width: 100%;
    background-color: #F6F6F6;
    height: 240px;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    margin-bottom: 8px;
    justify-content: center;
    align-items: center;
`
export const ChoocePhotoBtn = styled.Pressable`
    background-color: white;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`
export const PhotoLabel = styled.Text`
    font-family: Mont-Daily;
    font-size: 16px;
    color: #BDBDBD;
    /* border-bottom: 1px solid #E8E8E8; */
`

export const Form = styled.View`
    margin-top: 48px;
    width: 100%;
    gap: 16px;
    margin-bottom: 32px;
`


export const InputBox = styled.View`
    position: relative;
    width: 100%;
`

export const Input = styled.TextInput`
    font-family: Mont-Daily;
    font-size: 16px;
    color: #BDBDBD;
    width: 100%;
    border-bottom: 1px solid #E8E8E8;
    padding: 15px 0;
    border: 1px solid transparent;
    border-bottom-color: #E8E8E8;
`
export const InputLocation = styled.TextInput`
    font-family: Mont-Daily;
    font-size: 16px;
    color: #BDBDBD;
    width: 100%;
    border-bottom: 1px solid #E8E8E8;
    padding: 15px 0 15px 26px;
    border: 1px solid transparent;
    border-bottom-color: #E8E8E8;
`
export const BtnSubmit = styled.Pressable`
    background-color: #F6F6F6;
    width: 100%;
    padding: 16px 0;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`
export const BtnText = styled.Text`
    font-family: Mont-Daily;
    font-size: 16px;
    color: #BDBDBD;
`