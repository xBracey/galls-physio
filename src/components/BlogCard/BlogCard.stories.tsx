import React from "react";
import { BlogCard } from "./BlogCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const story = storiesOf("Components/BlogCard", module);

story.add("BlogCard Component", () => (
  <BlogCard
    header="Best physio practices for junior physios"
    imgUrl={"/static/hero-1.jpg"}
    onClick={action("Click")}
    author="Thomas Brace"
    published="2021-08-03T09:36:09.000Z"
  />
));

story.add("BlogCard Component long header", () => (
  <BlogCard
    header="Best physio practices for junior physios Best physio practices for junior physios"
    imgUrl={"/static/hero-1.jpg"}
    onClick={action("Click")}
    author="Thomas Brace"
    published="2021-08-03T09:36:09.000Z"
  />
));
