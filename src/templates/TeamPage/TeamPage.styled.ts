import styled from "styled-components";
import { colours } from "theme";

export const TeamHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.blue300};
  min-height: calc(100vh - 130px - 185px - 204px - 249px - 63px);
  height: 100%;
`;

export const TeamHeader = styled.h1`
  color: ${colours.white};
  text-align: center;
  padding: 10px;
`;

export const TeamPageOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
`;

export const TeamPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
`;
