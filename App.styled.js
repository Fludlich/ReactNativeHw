import styled from "styled-components/native";

import { Box } from './screens/auth/LoginScreen/LoginScreen.styled';

export const MainBox = styled(Box)`
    justify-content: center;
    align-items: center;
`

export const BtnBox = styled.View`
    padding: 120px 0;
    gap: 20px;
`

export const Btn = styled.Pressable`
    font-family:  'Mont-Normal';
    justify-content: center;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    padding: 10px 5px;
    align-items: center;
    font-size: 20px;
    width: 200px;
    background-color: #F6F6F6;
`

export const BtnText = styled.Text`
    font-family:  'Mont-Normal';
    font-size: 20px;

`