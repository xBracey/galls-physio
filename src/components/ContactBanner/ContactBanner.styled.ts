import { ButtonContainer } from "components/Button/Button.styled";
import styled from "styled-components";
import { colours, device } from "theme";

export const ContactBannerOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.grey100};
`;

export const ContactBannerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  justify-content: space-around;
  align-items: center;
  padding: 50px 15px;

  ${ButtonContainer} {
    padding: 20px 40px;
    font-size: 20px;
  }

  @media ${device.mobile} {
    ${ButtonContainer} {
      padding: 12px 24px;
      font-size: 16px;
    }
  }
`;

export const ContactText = styled.h3`
  font-size: 22px;
  color: ${colours.blue300};
  text-align: center;
  margin: 20px;

  @media ${device.mobile} {
    font-size: 18px;
  }
`;
