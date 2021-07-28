import React from "react";
import { HomeHero } from "./HomeHero";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/HomeHero", module);

story.add("HomeHero Component", () => (
  <HomeHero
    imgUrl={"/static/hero-1.jpg"}
    header="Lorem Ipsum"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  />
));
