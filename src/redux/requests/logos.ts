import { apiRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchLogos = async (state: IRootState): Promise<IAPIResponse> =>
  apiRequest("/logos");
