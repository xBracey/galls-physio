import React from "react";
import { ContactForm } from "./ContactForm";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const story = storiesOf("Components/ContactForm", module);

story.add("ContactForm Component", () => (
  <ContactForm onSave={action("Save")} contactStatus={0} />
));
