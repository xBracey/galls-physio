import styled, { css } from "styled-components";
import { colours } from "theme";

interface ImageTextContainer {
  blueBackground: boolean;
}

export const ImageTextContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.blueBackground ? colours.blue300 : colours.white};
  color: ${props => (props.blueBackground ? colours.white : colours.blue300)};
`;

const paddingFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageContentContainer = styled.div`
  ${paddingFlex}
  flex: 1;
  padding: 20px;
`;

export const ImageContent = styled.div`
  ${paddingFlex}
`;

export const ImageImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
