import React from "react";
import { ContentPage } from "templates/ContentPage";

const SportsPhysio = () => {
  return (
    <ContentPage
      pageMenu={{
        header: "Sports Physio",
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
      activeContent="sportsPhysio"
    />
  );
};

export default SportsPhysio;
