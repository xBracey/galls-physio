import styled from "styled-components";
import { colours } from "theme";

export const ComingSoonHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.blue300};
  min-height: calc(100vh - 130px - 185px - 204px - 249px - 63px);
  height: 100%;
`;

export const ComingSoonHeader = styled.h1`
  color: ${colours.white};
  text-align: center;
  padding: 10px;
`;
