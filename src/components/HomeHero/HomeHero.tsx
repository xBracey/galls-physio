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
  description?: string;
}

export const HomeHero = ({ imgUrl, header, description }: IHomeHero) => {
  const descriptionComponent = description ? (
    <HeroDescription>{description}</HeroDescription>
  ) : null;

  return (
    <HomeHeroOuterContainer>
      <HomeHeroFade />
      <HomeHeroContainer backgroundImage={imgUrl}>
        <HomeHeroMask />
        <HeroContent>
          <HeroHeader>{header}</HeroHeader>
          {descriptionComponent}
        </HeroContent>
      </HomeHeroContainer>
      <HomeHeroFade />
    </HomeHeroOuterContainer>
  );
};
