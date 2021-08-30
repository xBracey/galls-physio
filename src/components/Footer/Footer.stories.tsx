import React from "react";
import { Footer } from "./Footer";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/Footer", module);

story.add("Footer Component", () => (
  <Footer
    address="Tes Address, Hartlepool TS27 8NF"
    mobile="07456546346"
    facebook="/"
    email="fakeemail@hotmail.com"
    openingHours="text"
    services={[
      {
        text: "General Physio",
        link: "/services/general-physio",
      },
      {
        text: "We Also Offer",
        link: "/services/we-also-offer",
      },
    ]}
  />
));
