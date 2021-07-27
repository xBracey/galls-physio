import { IMenu } from "components/Header";

export const header: IMenu[] = [
  {
    label: "COVID-19",
    link: "/covid-1",
  },
  {
    label: "Services",
    link: "/services",
    subMenu: [
      {
        label: "General Physio",
        link: "/services/general",
      },
      {
        label: "Sports Physio",
        link: "/services/sports",
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
        label: "Who we work with",
        link: "/about/work-with",
      },
      {
        label: "Testimonials",
        link: "/about/testimonials",
      },
      {
        label: "FAQs",
        link: "/about/faqs",
      },
    ],
  },

  {
    label: "Contact",
    link: "/contact",
  },
];
