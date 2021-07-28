import { combineReducers } from "redux";
import home, { homeTypes, IHome } from "./home";
import message, { messageTypes, IMessage } from "./message";

export const cache = {};

export const types = {
  home: homeTypes,
  message: messageTypes,
};

export interface IRootState {
  home: IHome;
  message: IMessage;
}

export default combineReducers({
  home,
  message,
});
