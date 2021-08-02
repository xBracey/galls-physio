import { icons } from "assets";
import React from "react";
import {
  TestimonialContainer,
  TestimonialNameContainer,
  TestimonialName,
  TestimonialCompany,
  TestimonialQuote,
  TestimonialSmallTriangle,
  TestimonialBigTriangle,
  IconQuoteContainer,
} from "./Testimonial.styled";

interface ITestimonial {
  name: string;
  company: string;
  quote: string;
}

export const Testimonial = ({ name, company, quote }: ITestimonial) => {
  return (
    <TestimonialContainer>
      <IconQuoteContainer>
        <icons.quote />
      </IconQuoteContainer>

      <TestimonialNameContainer>
        <TestimonialName>{name}</TestimonialName>
        <TestimonialCompany>{company}</TestimonialCompany>
      </TestimonialNameContainer>
      <TestimonialQuote>{quote}</TestimonialQuote>
      <TestimonialSmallTriangle />
      <TestimonialBigTriangle />
    </TestimonialContainer>
  );
};
