import { config } from "config";
import { formatImage } from "lib/formatImage";
import { IAction, IReducers } from "../types";

export interface ILogo {
  imgUrl: string;
  link: string;
}

export interface ILogos {
  loading: boolean;
  logos: ILogo[];
}

const initialState: ILogos = {
  loading: false,
  logos: [],
};

export const logosTypes = {
  LOGOS_FETCHED_LOGOS: "fetchedLogos",
  LOGOS_LOADING_LOGOS: "loadingLogos",
};

/**
 * LOGOS REDUCERS - START
 */

const loadingLogos = state => ({ ...state, loading: true });

const fetchedLogos = (state, { data }) => {
  const logos = data.map(logo => ({
    link: logo.link,
    imgUrl: formatImage(logo.image, "thumbnail"),
  }));

  return { ...state, loading: false, logos };
};

/**
 * LOGOS REDUCERS - END
 * */

const reducers: IReducers<ILogos> = {
  fetchedLogos,
  loadingLogos,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
