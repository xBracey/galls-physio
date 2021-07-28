import styled from "styled-components";
import { colours } from "theme";

const maxWidth = 1400;

interface IHomeHeroContainer {
  backgroundImage: string;
}

export const HomeHeroOuterContainer = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.blackHero};
  position: relative;
`;

export const HomeHeroFade = styled.div`
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
  z-index: 5;

  &:last-child {
    left: calc(50% + ${maxWidth / 2 - 100}px);
    background-image: linear-gradient(
      to left,
      rgba(35, 35, 35, 1),
      rgba(35, 35, 35, 0)
    );
  }
`;

export const HomeHeroContainer = styled.div<IHomeHeroContainer>`
  height: 100%;
  width: 100%;
  max-width: ${maxWidth}px;
  position: relative;
  filter: grayscale(100%);

  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 5;
  padding: 100px 0;
`;

export const HeroHeader = styled.h2`
  width: 100%;
  min-width: 300px;
  max-width: 800px;
  color: ${colours.white};
  font-size: 30px;
`;

export const HeroDescription = styled.p`
  width: 100%;
  min-width: 300px;
  max-width: 800px;
  color: ${colours.white};
  font-size: 16px;
  line-height: 24px;
`;

export const HomeHeroMask = styled.div`
  background-color: ${colours.black200};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  z-index: 1;
`;
