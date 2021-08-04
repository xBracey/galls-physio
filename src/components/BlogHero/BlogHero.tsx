import React from "react";
import {
  BlogHeroBackground,
  BlogHeroContainer,
  BlogHeroHeader,
  BlogHeroFade,
} from "./BlogHero.styled";

interface IBlogHero {
  imgUrl: string;
  header: string;
}

export const BlogHero = ({ imgUrl, header }: IBlogHero) => (
  <BlogHeroContainer>
    <BlogHeroFade />
    <BlogHeroBackground backgroundImage={imgUrl} />
    <BlogHeroHeader>{header}</BlogHeroHeader>
    <BlogHeroFade />
  </BlogHeroContainer>
);
