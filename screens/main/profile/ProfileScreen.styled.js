import styled from "styled-components/native";

export const AvatarBox = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 16px;
    position: absolute;
`

export const PreAvatarBox = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 16px;
    position: relative;
    background-color: transparent;
    height: 1;
`

export const Avatar = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 16px;
    position: absolute;
    top: -92px;

`

export const BtnHandlerAvatar = styled.Pressable`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -14px;
    right: -12.5px;
    background-color: #fff;
    border: 1px solid #E8E8E8;
    justify-content: center;
    align-items: center;
`
export const Logout = styled.Pressable`

    position: absolute;
    right: 19;
    top: 24;
    justify-content: center;
    align-items: center;
    transform: scale(1, 1.3);
`