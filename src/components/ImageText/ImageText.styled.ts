import styled, { css } from "styled-components";
import { colours, device } from "theme";

interface ImageTextContainer {
  blueBackground: boolean;
}

export const ImageTextOuterContainer = styled.div<ImageTextContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.blueBackground ? colours.blue300 : colours.white};
  color: ${props => (props.blueBackground ? colours.white : colours.blue300)};
  padding: 80px 16px;
`;

export const ImageTextContainer = styled.div<ImageTextContainer>`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: ${props => (props.blueBackground ? "row-reverse" : "row")};

  @media ${device.mobile} {
    flex-direction: column;
  }
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

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }
`;

export const ImageImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
