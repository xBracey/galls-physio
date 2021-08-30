import React from "react";
import { ContentPage } from "templates/ContentPage";

const WeAlsoOffer = () => {
  return (
    <ContentPage
      pageMenu={{
        header: "We Also Offer",
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
      activeContent="weAlsoOffer"
    />
  );
};

export default WeAlsoOffer;
