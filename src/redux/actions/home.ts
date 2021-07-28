import { types } from "../reducers";
import { fetchHome } from "../requests/home";
import { ThunkResult } from "../types";

export const getHome = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.home.HOME_LOADING_HOME });

    return fetchHome(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.home.HOME_FETCHED_HOME,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
