import { formatImage } from "lib/formatImage";
import { IAction, IReducers } from "../types";

export interface IContact {
  loading: boolean;
  contactInfoHeader: string;
  contactInfoContent: string;
  contactInfoMapUrl: string;
}

const initialState: IContact = {
  loading: false,
  contactInfoHeader: null,
  contactInfoContent: null,
  contactInfoMapUrl: null,
};

export const contactTypes = {
  CONTACT_FETCHED_CONTACT: "fetchedContact",
  CONTACT_LOADING_CONTACT: "loadingContact",
};

/**
 * CONTACT REDUCERS - START
 */

const loadingContact = state => ({ ...state, loading: true });

const fetchedContact = (state, { data }) => {
  const { contactInfoHeader, contactInfoContent, contactInfoMap } = data;

  return {
    ...state,
    loading: false,
    contactInfoHeader,
    contactInfoContent,
    contactInfoMapUrl: formatImage(contactInfoMap, "medium"),
  };
};

/**
 * CONTACT REDUCERS - END
 * */

const reducers: IReducers<IContact> = {
  fetchedContact,
  loadingContact,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
