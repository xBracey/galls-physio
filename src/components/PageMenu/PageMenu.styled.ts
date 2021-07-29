import styled from "styled-components";
import { colours } from "theme";

export const PageMenuContainer = styled.div`
  width: 300px;
  padding: 30px 50px;
  background-color: ${colours.blue200};
  color: ${colours.white};
  border-radius: 5px;
`;

export const PageMenuHeader = styled.h2`
  margin: 10px 0;
`;

export const PageMenuSplitter = styled.div`
  background-color: ${colours.white};
  border-radius: 100px;
  height: 4px;
  width: 100%;
  margin: 15px 0 30px 0;
`;

export const PageSingleMenu = styled.p`
  margin: 20px 0;
  cursor: pointer;
`;
