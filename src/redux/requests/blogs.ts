import { apiRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchBlogs = async (state: IRootState): Promise<IAPIResponse> =>
  apiRequest(`/blogs/${state.blogs.pageNumber + 1}`);

export const fetchBlog = async (
  state: IRootState,
  id: string
): Promise<IAPIResponse> => apiRequest(`/blogs/single/${id}`);
