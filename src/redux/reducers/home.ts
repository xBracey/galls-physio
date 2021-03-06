import { config } from "config";
import { formatImage } from "lib/formatImage";
import { IAction, IReducers } from "../types";

interface IHomeImageText {
  content: string;
  imgUrl: string;
}

export interface IHome {
  loading: boolean;
  heroHeader: string;
  heroDescription: string;
  heroImageUrl: string;
  mainImageText: IHomeImageText[];
}

const initialState: IHome = {
  loading: false,
  heroHeader: null,
  heroDescription: null,
  heroImageUrl: null,
  mainImageText: [],
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
  const { heroHeader, heroDescription, heroImage, main } = data;

  const mainImageText = main.map(singleImageText => ({
    content: singleImageText.content,
    imgUrl: formatImage(singleImageText.image, "small"),
  }));

  return {
    ...state,
    loading: false,
    heroHeader,
    heroDescription,
    heroImageUrl: formatImage(heroImage, "small"),
    mainImageText,
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
