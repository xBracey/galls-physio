import { Testimonial } from "components/Testimonial";
import React from "react";
import { ITestimonial } from "redux/reducers/testimonials";
import { Page } from "templates/Page";
import { PageHeader } from "theme";
import {
  TestimonialsPageContainer,
  TestimonialsPageOuterContainer,
} from "./TestimonialsPage.styled";

interface ITestimonialsPage {
  testimonials: ITestimonial[];
}

export const TestimonialsPage = ({ testimonials }: ITestimonialsPage) => {
  const testimonialsComponent = testimonials.map(testimonial => (
    <Testimonial key={testimonial.name} {...testimonial} />
  ));

  return (
    <Page title="Testimonials">
      <PageHeader>{"Testimonials"}</PageHeader>
      <TestimonialsPageOuterContainer>
        <TestimonialsPageContainer>
          {testimonialsComponent}
        </TestimonialsPageContainer>
      </TestimonialsPageOuterContainer>
    </Page>
  );
};
