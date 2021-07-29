import React from "react";
import { TeamMember } from "./TeamMember";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/TeamMember", module);

story.add("TeamMember Component", () => (
  <TeamMember
    imgUrl="/static/gall.png"
    name="Liam Gallagher"
    jobTitle="Junior Physiotherapist"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  />
));
