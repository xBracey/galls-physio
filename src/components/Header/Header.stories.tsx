import React from "react";
import { Header } from "./Header";
import { storiesOf } from "@storybook/react";
import { colours } from "theme";
import { boolean } from "@storybook/addon-knobs";

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
          link: "/covid-19",
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
              label: "We Also Offer",
              link: "/where-to-find-us",
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
              label: "Where to find us",
              link: "/where-to-find-us",
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
      isTop={boolean("Is Top", false)}
    />
  </div>
));
