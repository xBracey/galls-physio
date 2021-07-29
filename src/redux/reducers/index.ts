import { combineReducers } from "redux";
import home, { homeTypes, IHome } from "./home";
import message, { messageTypes, IMessage } from "./message";
import logos, { logosTypes, ILogos } from "./logos";
import footer, { footerTypes, IFooter } from "./footer";
import team, { teamTypes, ITeam } from "./team";
import content, { contentTypes, IContent } from "./content";

export const cache = {};

export const types = {
  home: homeTypes,
  message: messageTypes,
  logos: logosTypes,
  footer: footerTypes,
  team: teamTypes,
  content: contentTypes,
};

export interface IRootState {
  home: IHome;
  message: IMessage;
  logos: ILogos;
  footer: IFooter;
  team: ITeam;
  content: IContent;
}

export default combineReducers({
  home,
  message,
  logos,
  footer,
  team,
  content,
});
