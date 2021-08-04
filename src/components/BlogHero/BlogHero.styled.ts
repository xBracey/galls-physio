import styled from "styled-components";
import { colours } from "theme";

const maxWidth = 1000;

interface IBlogHeroContainer {
  backgroundImage: string;
}

export const BlogHeroContainer = styled.div<IBlogHeroContainer>`
  height: 400px;
  width: 100%;
  background-color: ${colours.blackHero};

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlogHeroBackground = styled.div<IBlogHeroContainer>`
  height: 400px;
  width: 100%;
  max-width: ${maxWidth}px;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 5;

  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: brightness(0.75);
`;

export const BlogHeroHeader = styled.h2`
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  color: ${colours.white};
  font-size: 32px;
  text-align: center;
  text-shadow: ${colours.black300} 0px 0px 20px;
  z-index: 10;
  line-height: 45px;
`;

export const BlogHeroFade = styled.div`
  width: 200px;
  background-image: linear-gradient(
    to right,
    rgba(35, 35, 35, 1),
    rgba(35, 35, 35, 0)
  );
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% - ${maxWidth / 2 - 100}px);
  transform: translate(-50%, 0%);
  z-index: 25;

  &:last-child {
    left: calc(50% + ${maxWidth / 2 - 100}px);
    background-image: linear-gradient(
      to left,
      rgba(35, 35, 35, 1),
      rgba(35, 35, 35, 0)
    );
  }
`;
