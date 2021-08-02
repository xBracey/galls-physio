import { config } from "config";
import { formatImage } from "lib/formatImage";
import { IAction, IReducers } from "../types";

export interface ISingleContent {
  header: string;
  imgUrl: string;
  content: string;
}

export interface IContent {
  loading: boolean;
  activeContent: string;
  generalPhysio: ISingleContent;
  sportsPhysio: ISingleContent;
  about: ISingleContent;
  covid: ISingleContent;
}

const defaultSingleContent = {
  header: null,
  imgUrl: null,
  content: null,
};

const initialState: IContent = {
  loading: false,
  activeContent: null,
  generalPhysio: defaultSingleContent,
  sportsPhysio: defaultSingleContent,
  about: defaultSingleContent,
  covid: defaultSingleContent,
};

export const contentTypes = {
  CONTENT_FETCHED_CONTENT: "fetchedContent",
  CONTENT_LOADING_CONTENT: "loadingContent",
  CONTENT_SET_ACTIVE_CONTENT: "setActiveContent",
};

/**
 * CONTENT REDUCERS - START
 */

const loadingContent = state => ({ ...state, loading: true });

const fetchedContent = (state, { data }) => {
  const { content: contentData } = data;
  const { header, image, content } = contentData;

  const newContent = {
    header,
    content,
    imgUrl: formatImage(image, "small"),
  };

  return { ...state, loading: false, [state.activeContent]: newContent };
};

const setActiveContent = (state, { activeContent }) => ({
  ...state,
  activeContent,
});

/**
 * CONTENT REDUCERS - END
 * */

const reducers: IReducers<IContent> = {
  fetchedContent,
  loadingContent,
  setActiveContent,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
