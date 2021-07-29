import React from "react";
import {
  LogoBannerContainer,
  SingleLogoContainer,
  SingleLogo,
  LogoBannerOuterContainer,
} from "./LogoBanner.styled";

interface ILogo {
  imgUrl: string;
  link?: string;
}

interface ILogoBanner {
  logos: ILogo[];
}

export const LogoBanner = ({ logos }: ILogoBanner) => {
  const logosComponent = logos.map(logo => (
    <SingleLogoContainer key={logo.imgUrl} href={logo.link}>
      <SingleLogo src={logo.imgUrl} />
    </SingleLogoContainer>
  ));

  return (
    <LogoBannerOuterContainer>
      <LogoBannerContainer>{logosComponent}</LogoBannerContainer>
    </LogoBannerOuterContainer>
  );
};
