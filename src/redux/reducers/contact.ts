import { formatImage } from "lib/formatImage";
import { IAction, IReducers } from "../types";

export interface IContact {
  loading: boolean;
  contactInfoHeader: string;
  contactInfoContent: string;
  contactInfoMapUrl: string;
  sentMailStatus: number;
}

const initialState: IContact = {
  loading: false,
  contactInfoHeader: null,
  contactInfoContent: null,
  contactInfoMapUrl: null,
  sentMailStatus: 0,
};

export const contactTypes = {
  CONTACT_FETCHED_CONTACT: "fetchedContact",
  CONTACT_LOADING_CONTACT: "loadingContact",
  CONTACT_SENT_MAIL: "sentMail",
  CONTACT_RESET_SENT_MAIL: "resetSentMail",
  CONTACT_LOADING_SENT_MAIL: "loadingSentMail",
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

const resetSentMail = state => ({ ...state, sentMailStatus: 0 });
const loadingSentMail = state => ({ ...state, sentMailStatus: 1 });
const sentMail = state => ({ ...state, sentMailStatus: 2 });

/**
 * CONTACT REDUCERS - END
 * */

const reducers: IReducers<IContact> = {
  fetchedContact,
  loadingContact,
  sentMail,
  resetSentMail,
  loadingSentMail,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
