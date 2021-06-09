import React from "react";
import { Header } from "./Header";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/Header", module);

story.add("Header Component", () => (
  <Header
    menu={[
      {
        label: "Services",
        link: "/services",
      },
      {
        label: "About Us",
        link: "/about-us",
      },
      {
        label: "Team",
        link: "/team",
      },
      {
        label: "Contact",
        link: "/contact",
      },
    ]}
  />
));
