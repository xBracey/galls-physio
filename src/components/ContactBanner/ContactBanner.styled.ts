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
  max-width: 550px;
  justify-content: space-around;
  align-items: center;
  padding: 25px 15px;
`;

export const ContactText = styled.h3`
  font-size: 18px;
  color: ${colours.blue300};
  text-align: center;
  margin: 20px;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;
