import styled from "styled-components";
import { colours, device } from "theme";

export const CopyrightFooterOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.blue300};
`;

export const CopyrightFooterContainer = styled.div`
  color: ${colours.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 50px);
  max-width: 1000px;
  padding: 8px 25px;

  @media ${device.mobile} {
    margin: 15px 0;
    flex-direction: column;
  }
`;

export const CopyrightText = styled.p`
  flex: 1;
  margin: 15px 20px;
  display: flex;
  justify-content: flex-start;
  text-align: center;
`;

export const AuthorText = styled.a`
  flex: 1;
  margin: 15px 20px;
  display: flex;
  justify-content: flex-end;
  text-align: center;
`;
