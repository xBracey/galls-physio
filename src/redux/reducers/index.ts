import { combineReducers } from "redux";
import home, { homeTypes, IHome } from "./home";
import message, { messageTypes, IMessage } from "./message";
import logos, { logosTypes, ILogos } from "./logos";

export const cache = {};

export const types = {
  home: homeTypes,
  message: messageTypes,
  logos: logosTypes,
};

export interface IRootState {
  home: IHome;
  message: IMessage;
  logos: ILogos;
}

export default combineReducers({
  home,
  message,
  logos,
});
