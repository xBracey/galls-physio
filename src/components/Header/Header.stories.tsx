import React from "react";
import { Header } from "./Header";
import { storiesOf } from "@storybook/react";
import { colours } from "theme";

const story = storiesOf("Components/Header", module);

story.add("Header Component", () => (
  <div
    style={{
      backgroundColor: colours.grey100,
      paddingBottom: "2000px",
    }}
  >
    <Header
      menu={[
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
              link: "/where-to-find-us",
            },
            {
              label: "Sports Physio",
              link: "/where-to-find-us",
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
              link: "/where-to-find-us",
            },
            {
              label: "Who we work with",
              link: "/work-with",
            },
            {
              label: "Testimonials",
              link: "/work-with",
            },
            {
              label: "FAQs",
              link: "/work-with",
            },
          ],
        },

        {
          label: "Contact",
          link: "/contact",
        },
      ]}
    />
  </div>
));
