import React from "react";
import { LogoBanner } from "./LogoBanner";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/LogoBanner", module);

story.add("LogoBanner Component", () => (
  <LogoBanner
    logos={[
      { imgUrl: "/static/hufc-logo.png" },
      { imgUrl: "/static/hufc-logo.png" },
      { imgUrl: "/static/hufc-logo.png" },
      { imgUrl: "/static/hufc-logo.png" },
    ]}
  />
));
