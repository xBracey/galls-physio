import React from "react";
import { ContentPage } from "templates/ContentPage";

const GeneralPhysio = () => {
  return (
    <ContentPage
      pageMenu={{
        header: "General Physio",
        menu: [
          {
            text: "General Physio",
            link: "/services/general-physio",
          },
          {
            text: "We Also Offer",
            link: "/services/we-also-offer",
          },
        ],
      }}
      activeContent="generalPhysio"
    />
  );
};

export default GeneralPhysio;
