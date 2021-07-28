import { IAction, IReducers } from "../types";

export interface IHome {
  loading: boolean;
  heroHeader: string;
  heroDescription: string;
  heroImageUrl: string;
}

const initialState: IHome = {
  loading: false,
  heroHeader: null,
  heroDescription: null,
  heroImageUrl: null,
};

export const homeTypes = {
  HOME_FETCHED_HOME: "fetchedHome",
  HOME_LOADING_HOME: "loadingHome",
};

/**
 * HOME REDUCERS - START
 */

const loadingHome = state => ({ ...state, loading: true });

const fetchedHome = (state, { data }) => {
  const { heroHeader, heroDescription, heroImage } = data;

  return {
    ...state,
    loading: false,
    heroHeader,
    heroDescription,
    heroImageUrl: heroImage?.url,
  };
};

/**
 * HOME REDUCERS - END
 * */

const reducers: IReducers<IHome> = {
  fetchedHome,
  loadingHome,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
