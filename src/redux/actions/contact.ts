import { types } from '../reducers';
import { fetchContact } from '../requests/contact';
import { ThunkResult } from '../types';

export const getContact = (): ThunkResult<any>  => {
  return (dispatch, getState) => {
    dispatch({ type: types.contact.CONTACT_LOADING_CONTACT });

    return fetchContact(getState()).then((response) =>
      !response.error
        ? dispatch({
            type: types.contact.CONTACT_FETCHED_CONTACT,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          }),
    );
  };
};
