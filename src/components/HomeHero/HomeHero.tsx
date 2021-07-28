import React from "react";
import {
  HomeHeroOuterContainer,
  HomeHeroContainer,
  HeroHeader,
  HeroDescription,
  HomeHeroMask,
  HeroContent,
  HomeHeroFade,
} from "./HomeHero.styled";

interface IHomeHero {
  imgUrl: string;
  header: string;
  description: string;
}

export const HomeHero = ({ imgUrl, header, description }: IHomeHero) => {
  return (
    <HomeHeroOuterContainer>
      <HomeHeroFade />
      <HomeHeroContainer backgroundImage={imgUrl}>
        <HomeHeroMask />
        <HeroContent>
          <HeroHeader>{header}</HeroHeader>
          <HeroDescription>{description}</HeroDescription>
        </HeroContent>
      </HomeHeroContainer>
      <HomeHeroFade />
    </HomeHeroOuterContainer>
  );
};
