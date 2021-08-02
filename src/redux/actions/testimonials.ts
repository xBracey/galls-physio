import { types } from '../reducers';
import { fetchTestimonials } from '../requests/testimonials';
import { ThunkResult } from '../types';

export const getTestimonials = (): ThunkResult<any>  => {
  return (dispatch, getState) => {
    dispatch({ type: types.testimonials.TESTIMONIALS_LOADING_TESTIMONIALS });

    return fetchTestimonials(getState()).then((response) =>
      !response.error
        ? dispatch({
            type: types.testimonials.TESTIMONIALS_FETCHED_TESTIMONIALS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          }),
    );
  };
};
