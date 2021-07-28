import { IAction, IReducers } from "../types";

export interface IMessage {
  message: string;
}

const initialState: IMessage = {
  message: null,
};

export const messageTypes = {
  MESSAGE_RESET_MESSAGE: "setMessage",
  MESSAGE_SET_MESSAGE: "loadingMessage",
};

/**
 * MESSAGE REDUCERS - START
 */

const resetMessage = () => ({ message: null });

const setMessage = (state, { message }) => {
  return { message };
};

/**
 * MESSAGE REDUCERS - END
 * */

const reducers: IReducers<IMessage> = {
  resetMessage,
  setMessage,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
