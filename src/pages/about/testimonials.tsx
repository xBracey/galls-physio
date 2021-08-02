import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonials } from "redux/actions/testimonials";
import { IRootState } from "redux/reducers/index";
import { TestimonialsPage } from "templates/TestimonialsPage";

const Testimonials = () => {
  const dispatch = useDispatch();

  const testimonials = useSelector((state: IRootState) => state.testimonials);

  useEffect(() => {
    dispatch(getTestimonials());
  }, []);

  return <TestimonialsPage testimonials={testimonials.testimonials} />;
};

export default Testimonials;
