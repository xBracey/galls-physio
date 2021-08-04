import { formatImage } from "lib/formatImage";
import { IAction, IReducers } from "../types";

const paginationNumber = 9;

export interface IBlog {
  id: number;
  header: string;
  content: string;
  thumbnailImgUrl: string;
  imgUrl: string;
  author: string;
  published: string;
}

export interface IBlogs {
  loading: boolean;
  blogs: {
    [id: number]: IBlog;
  };
  pageNumber: number;
  hasLoadedAll: boolean;
}

const initialState: IBlogs = {
  loading: false,
  blogs: {},
  pageNumber: 0,
  hasLoadedAll: false,
};

export const blogsTypes = {
  BLOGS_FETCHED_BLOGS: "fetchedBlogs",
  BLOGS_FETCHED_BLOG: "fetchedBlog",
  BLOGS_LOADING_BLOGS: "loadingBlogs",
};

/**
 * BLOGS REDUCERS - START
 */

const loadingBlogs = state => ({ ...state, loading: true });

const fetchedBlogs = (state: IBlogs, { data }) => {
  const blogs = { ...state.blogs };

  data.forEach(newBlog => {
    const { id, header, content, image, published_at, author } = newBlog;

    blogs[id] = {
      id,
      header,
      content,
      thumbnailImgUrl: formatImage(image, "thumbnail"),
      imgUrl: formatImage(image, "large"),
      published: published_at,
      author,
    };
  });

  return {
    ...state,
    loading: false,
    blogs,
    pageNumber: state.pageNumber + 1,
    hasLoadedAll: data.length !== paginationNumber,
  };
};

const fetchedBlog = (state: IBlogs, { data }) => {
  const blogs = { ...state.blogs };

  const { id, header, content, image, published_at, author } = data;

  blogs[id] = {
    id,
    header,
    content,
    thumbnailImgUrl: formatImage(image, "thumbnail"),
    imgUrl: formatImage(image, "large"),
    published: published_at,
    author,
  };

  return {
    ...state,
    loading: false,
    blogs,
  };
};

/**
 * BLOGS REDUCERS - END
 * */

const reducers: IReducers<IBlogs> = {
  fetchedBlogs,
  fetchedBlog,
  loadingBlogs,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
