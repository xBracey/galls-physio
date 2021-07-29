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
            text: "Sports Physio",
            link: "/services/sports-physio",
          },
        ],
      }}
      activeContent="generalPhysio"
    />
  );
};

export default GeneralPhysio;
