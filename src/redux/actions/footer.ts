import { types } from "../reducers";
import { fetchFooter } from "../requests/footer";
import { ThunkResult } from "../types";

export const getFooter = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.footer.FOOTER_LOADING_FOOTER });

    return fetchFooter(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.footer.FOOTER_FETCHED_FOOTER,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
