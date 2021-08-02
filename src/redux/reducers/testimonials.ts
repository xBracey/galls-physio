import { IAction, IReducers } from "../types";

export interface ITestimonial {
  name: string;
  company: string;
  quote: string;
}

export interface ITestimonials {
  loading: boolean;
  testimonials: ITestimonial[];
}

const initialState: ITestimonials = {
  loading: false,
  testimonials: [],
};

export const testimonialsTypes = {
  TESTIMONIALS_FETCHED_TESTIMONIALS: "fetchedTestimonials",
  TESTIMONIALS_LOADING_TESTIMONIALS: "loadingTestimonials",
};

/**
 * TESTIMONIALS REDUCERS - START
 */

const loadingTestimonials = state => ({ ...state, loading: true });

const fetchedTestimonials = (state, { data }) => {
  return { ...state, loading: false, testimonials: data };
};

/**
 * TESTIMONIALS REDUCERS - END
 * */

const reducers: IReducers<ITestimonials> = {
  fetchedTestimonials,
  loadingTestimonials,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
