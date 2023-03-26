import styled from "styled-components/native";

import { Content, Title} from "../LoginScreen/LoginScreen.styled";
export const ContentRegister = styled(Content)`
    position: relative;
    /* flex-direction: column; */
    align-items: center;
    height: ${(p) =>
      p.myHeight === "shown" ? `85%` : `85%`};;
`
export const RegTitle = styled(Title)`
    margin-top: 62px;
`