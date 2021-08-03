import { combineReducers } from "redux";
import home, { homeTypes, IHome } from "./home";
import message, { messageTypes, IMessage } from "./message";
import logos, { logosTypes, ILogos } from "./logos";
import footer, { footerTypes, IFooter } from "./footer";
import team, { teamTypes, ITeam } from "./team";
import content, { contentTypes, IContent } from "./content";
import testimonials, { testimonialsTypes, ITestimonials } from "./testimonials";
import contact, { contactTypes, IContact } from "./contact";
import blogs, { blogsTypes, IBlogs } from "./blogs";

export const cache = {};

export const types = {
  home: homeTypes,
  message: messageTypes,
  logos: logosTypes,
  footer: footerTypes,
  team: teamTypes,
  content: contentTypes,
  testimonials: testimonialsTypes,
  contact: contactTypes,
  blogs: blogsTypes,
};

export interface IRootState {
  home: IHome;
  message: IMessage;
  logos: ILogos;
  footer: IFooter;
  team: ITeam;
  content: IContent;
  testimonials: ITestimonials;
  contact: IContact;
  blogs: IBlogs;
}

export default combineReducers({
  home,
  message,
  logos,
  footer,
  team,
  content,
  testimonials,
  contact,
  blogs,
});
