import styled from "styled-components/native";

import { Content, Title} from "../LoginScreen/LoginScreen.styled";
export const ContentREgister = styled(Content)`
    height: ${(p) =>
      p.myHeight === "shown" ? `85%` : `85%`};;
`
export const RegTitle = styled(Title)`
    margin-top: 92px;
`