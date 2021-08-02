import styled from "styled-components";
import { colours } from "theme";

export const TestimonialContainer = styled.div`
  width: 450px;
  margin: 25px 25px 45px 25px;
  background-color: ${colours.white};
  border: 2px solid ${colours.grey200};
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  color: ${colours.black200};
  position: relative;
  border-radius: 10px;
`;

export const TestimonialNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const TestimonialName = styled.h2`
  margin: 10px 5px;
`;

export const TestimonialCompany = styled.p`
  margin: 10px 5px;
  font-style: italic;
`;

export const TestimonialQuote = styled.p`
  margin: 10px 5px;
  text-align: center;
`;

export const TestimonialSmallTriangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 20px solid ${colours.white};
  border-left: 20px solid transparent;
  bottom: -20px;
  z-index: 5;
  transform: translate(max(-125px, calc(-100vw / 5)), 0);
  border-bottom-right-radius: 10px;
`;

export const TestimonialBigTriangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 23px solid ${colours.grey200};
  border-left: 23px solid transparent;
  bottom: -23px;
  z-index: 4;
  transform: translate(max(-125px, calc(-100vw / 5)), 0);
`;

export const IconQuoteContainer = styled.div`
  position: absolute;
  opacity: 0.75;
  top: 16px;
  left: 16px;

  path {
    fill: ${colours.grey200};
  }
`;
