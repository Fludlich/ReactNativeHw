import styled from "styled-components/native";

export const IconLabel = styled.View`
    background-color: ${(p)=> p.focused === true ? "#FF6C00" : "white" };
    width: 70px;
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`