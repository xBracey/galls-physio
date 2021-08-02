import React from "react";
import { Testimonial } from "./Testimonial";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

const story = storiesOf("Components/Testimonial", module);

story.add("Testimonial Component", () => (
  <Testimonial
    name={text("Name", "John Smith")}
    company={text("Company", "Hartlepool United FC")}
    quote="First Team Physio was great value. They aided in my recovery for a hamstring strain! Would recommended to anyone needing a physio "
  />
));
