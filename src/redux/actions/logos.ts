import { types } from "../reducers";
import { fetchLogos } from "../requests/logos";
import { ThunkResult } from "../types";

export const getLogos = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.logos.LOGOS_LOADING_LOGOS });

    return fetchLogos(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.logos.LOGOS_FETCHED_LOGOS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
