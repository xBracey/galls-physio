import { IContactFormReducer } from "components/ContactForm/ContactFormReducer";
import { types } from "../reducers";
import { fetchContact, postMail } from "../requests/contact";
import { ThunkResult } from "../types";

export const getContact = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.contact.CONTACT_LOADING_CONTACT });

    return fetchContact(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.contact.CONTACT_FETCHED_CONTACT,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const sendMail = (state: IContactFormReducer): ThunkResult<any> => {
  return dispatch => {
    dispatch({ type: types.contact.CONTACT_LOADING_SENT_MAIL });

    return postMail(state).then(response =>
      !response.error
        ? dispatch({
            type: types.contact.CONTACT_SENT_MAIL,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
