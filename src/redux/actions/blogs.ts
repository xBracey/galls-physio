import { types } from "../reducers";
import { fetchBlogs } from "../requests/blogs";
import { ThunkResult } from "../types";

export const getBlogs = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.blogs.BLOGS_LOADING_BLOGS });

    return fetchBlogs(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.blogs.BLOGS_FETCHED_BLOGS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
