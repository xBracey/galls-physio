import React from "react";
import { ImageText } from "./ImageText";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { StorybookWrapper } from "theme";

const story = storiesOf("Components/ImageText", module);

story.add("ImageText Component", () => (
  <StorybookWrapper width={1000}>
    <ImageText
      imgUrl={"/static/hero-1.jpg"}
      content="### Header look at me!\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      callToAction={
        boolean("CTA", true)
          ? {
              text: "Find Out More",
              link: "/home",
            }
          : null
      }
      blueBackground={boolean("blueBackground", false)}
    />
  </StorybookWrapper>
));
