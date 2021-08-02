export interface IContactFormReducer {
  name: string;
  email: string;
  message: string;
}

export const initialState: IContactFormReducer = {
  name: "",
  email: "",
  message: "",
};

export const reducer = (state: IContactFormReducer, action) => {
  if (action.type === "edit") {
    return { ...state, ...action.data };
  }

  return state;
};
