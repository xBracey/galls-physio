import styled from "styled-components";
import { colours } from "theme";

export const ContentBoxContainer = styled.div`
  width: calc(100% - 64px);
  max-width: 750px;
  background-color: ${colours.white};
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  color: ${colours.black200};
  position: relative;
  border-radius: 10px;
  margin: 25px 0;
`;

export const ContentBoxHeader = styled.h3`
  text-align: center;
  margin: 15px 0;
`;

export const ContentBoxContent = styled.div``;
