import { apiRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchFooter = async (state: IRootState): Promise<IAPIResponse> =>
  apiRequest("/footer");
