import { types } from "../reducers";
import { fetchContent } from "../requests/content";
import { ThunkResult } from "../types";

export const getContent = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.content.CONTENT_LOADING_CONTENT });

    return fetchContent(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.content.CONTENT_FETCHED_CONTENT,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
