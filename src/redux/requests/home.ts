import { apiRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchHome = async (state: IRootState): Promise<IAPIResponse> =>
  apiRequest("/home");
