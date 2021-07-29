import { IAction, IReducers } from "../types";

export interface IFooter {
  loading: boolean;
  address: string;
  mobile: string;
  facebook: string;
  email: string;
  openingHours: string;
}

const initialState: IFooter = {
  loading: null,
  address: null,
  mobile: null,
  facebook: null,
  email: null,
  openingHours: null,
};

export const footerTypes = {
  FOOTER_FETCHED_FOOTER: "fetchedFooter",
  FOOTER_LOADING_FOOTER: "loadingFooter",
};

/**
 * FOOTER REDUCERS - START
 */

const loadingFooter = state => ({ ...state, loading: true });

const fetchedFooter = (state, { data }) => {
  return { ...state, loading: false, ...data };
};

/**
 * FOOTER REDUCERS - END
 * */

const reducers: IReducers<IFooter> = {
  fetchedFooter,
  loadingFooter,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
