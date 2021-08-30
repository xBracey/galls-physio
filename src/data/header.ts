import { IMenu } from "components/Header";

export const header: IMenu[] = [
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Services",
    link: "/services",
    subMenu: [
      {
        label: "General Physio",
        link: "/services/general-physio",
      },
      {
        label: "We Also Offer",
        link: "/services/we-also-offer",
      },
    ],
  },
  {
    label: "Team",
    link: "/team",
  },
  {
    label: "About",
    link: "/about",
    subMenu: [
      {
        label: "About us",
        link: "/about",
      },
      {
        label: "Testimonials",
        link: "/about/testimonials",
      },
      {
        label: "COVID-19",
        link: "/about/covid",
      },
    ],
  },

  {
    label: "Contact",
    link: "/contact",
  },
];
