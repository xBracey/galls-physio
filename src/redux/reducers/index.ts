import { combineReducers } from "redux";
import home, { homeTypes, IHome } from "./home";
import message, { messageTypes, IMessage } from "./message";
import logos, { logosTypes, ILogos } from "./logos";
import footer, { footerTypes, IFooter } from "./footer";

export const cache = {};

export const types = {
  home: homeTypes,
  message: messageTypes,
  logos: logosTypes,
  footer: footerTypes,
};

export interface IRootState {
  home: IHome;
  message: IMessage;
  logos: ILogos;
  footer: IFooter;
}

export default combineReducers({
  home,
  message,
  logos,
  footer,
});
