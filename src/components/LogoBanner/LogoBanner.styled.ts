import styled from "styled-components";

export const LogoBannerOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoBannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  padding: 25px 0;
`;

export const SingleLogoContainer = styled.a``;

export const SingleLogo = styled.img`
  height: 140px;
  opacity: 0.5;
  filter: grayscale(100%);
`;
