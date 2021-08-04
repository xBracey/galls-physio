import React from "react";
import { BlogHero } from "./BlogHero";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/BlogHero", module);

story.add("BlogHero Component", () => (
  <BlogHero imgUrl={"/static/hero-1.jpg"} header="Lorem Ipsum" />
));
