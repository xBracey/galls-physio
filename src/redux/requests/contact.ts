import axios from "axios";
import { IContactFormReducer } from "components/ContactForm/ContactFormReducer";
import { apiRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchContact = async (state: IRootState): Promise<IAPIResponse> =>
  apiRequest("/contact");

export const postMail = async (
  state: IContactFormReducer
): Promise<IAPIResponse> => {
  try {
    const response = await axios.request({
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      url: "/api/contact",
      data: state,
      method: "POST",
    });

    return {
      data: response.data,
      time: new Date(response.headers.date),
      error: false,
      message: null,
    };
  } catch (error) {
    return {
      data: null,
      time: null,
      error: true,
      message: error?.response?.data?.error,
    };
  }
};
