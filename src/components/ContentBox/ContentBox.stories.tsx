import React from "react";
import { ContentBox } from "./ContentBox";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/ContentBox", module);

story.add("ContentBox Component", () => (
  <ContentBox
    header="Header look at me!"
    content="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  />
));
