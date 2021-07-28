import styled from "styled-components";
import { colours, device } from "theme";

export const FooterOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.blue200};
`;

export const FooterContainer = styled.div`
  width: calc(100% - 50px);
  max-width: 1000px;
  padding: 50px 25px;
  display: flex;
  color: ${colours.white};

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const FooterThird = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.mobile} {
    padding: 25px 0;
  }
`;

export const FooterHeader = styled.h3`
  font-size: 20px;
`;

export const FooterText = styled.p`
  margin: 10px;
  text-align: center;
`;

export const FooterLink = styled.a`
  color: ${colours.grey100};
  margin: 10px;
  text-align: center;
`;

export const FooterLogos = styled.div``;

export const FooterLogo = styled.img`
  margin: 15px 10px 0 10px;
  height: 40px;

  path {
    fill: ${colours.white};
  }
`;

export const FooterLogoLink = styled.a``;
