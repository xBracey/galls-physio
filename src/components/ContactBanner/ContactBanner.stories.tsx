import React from "react";
import { ContactBanner } from "./ContactBanner";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/ContactBanner", module);

story.add("ContactBanner Component", () => (
  <ContactBanner
    text="Interested in booking?"
    callToAction={{
      text: "Contact Us",
      link: "/contact-us",
    }}
  />
));
