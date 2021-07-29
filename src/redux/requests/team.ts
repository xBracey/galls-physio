import { apiRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchTeam = async (state: IRootState): Promise<IAPIResponse> =>
  apiRequest("/teams");
