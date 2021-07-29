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
        label: "Sports Physio",
        link: "/services/sports-physio",
      },
    ],
  },
  {
    label: "Team",
    link: "/team",
  },
  {
    label: "About Us",
    link: "/about-us",
    subMenu: [
      {
        label: "Where to find us",
        link: "/about/where-to-find-us",
      },
      {
        label: "Testimonials",
        link: "/about/testimonials",
      },
      {
        label: "COVID-19",
        link: "/covid-19",
      },
    ],
  },

  {
    label: "Contact",
    link: "/contact",
  },
];
