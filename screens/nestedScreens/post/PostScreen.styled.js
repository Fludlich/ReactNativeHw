import styled from "styled-components/native";


export const PostBox = styled.View`
    /* padding: 32px 16px; */
    width: 100%;
    gap: 32px;
`

export const OwnerBox = styled.View`
    /* padding: 32px 16px; */
`

export const UserBox = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const Post = styled.View`
    width: 100%;
    gap: 8px;
    margin-bottom: 32px;
`

export const Img = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 16px;
    object-fit: cover;
`

export const PostImg = styled.Image`
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 8px;
`
export const DescriptionText = styled.Text`
    font-family: Mont-Normal;
    font-weight: 500;
    font-size: 16;
    color: #212121;
`

export const InfoBox = styled.View`
    justify-content: space-between;
      flex-direction: row;
      padding-bottom: 2px;
`


export const FlexBox = styled.Pressable`
    margin-top: 2px;
    flex-direction: row;
    gap: ${(p)=>p.unique ? 27 : 8};
    justify-content: center;
    align-items: center;
`

export const CommentText = styled.Text`
    font-family: Mont-Daily;
    font-weight: 400;
    font-size: 16;
    color: #BDBDBD;
`


export const LocationText = styled.Text`
    font-family: Mont-Daily;
    font-weight: 400;
    font-size: 16;
    color: #212121;
`
