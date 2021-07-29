import React from "react";
import { PageMenu } from "./PageMenu";
import { storiesOf } from "@storybook/react";
import { colours, StorybookWrapper } from "theme";

const story = storiesOf("Components/PageMenu", module);

story.add("PageMenu Component", () => (
  <StorybookWrapper style={{ backgroundColor: colours.blue200 }}>
    <PageMenu
      header="Services"
      menu={[
        {
          text: "General Physio",
          link: "/",
        },
        {
          text: "Sports Physio",
          link: "/",
        },
      ]}
    />
  </StorybookWrapper>
));
