import { apiRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchContent = async (
  state: IRootState
): Promise<IAPIResponse> => {
  if (state.content.activeContent === "generalPhysio") {
    return apiRequest("/general-physio");
  }

  if (state.content.activeContent === "sportsPhysio") {
    return apiRequest("/sports-physio");
  }

  if (state.content.activeContent === "covid") {
    return apiRequest("/covid");
  }

  return apiRequest("/about-us");
};
