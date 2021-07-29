import React from "react";

import { ContentPage } from "templates/ContentPage";

const Covid = () => {
  return (
    <ContentPage
      pageMenu={{
        header: "About",
        menu: [
          {
            text: "About Us",
            link: "/about",
          },
          {
            text: "Testimonials",
            link: "/about/testimonials",
          },
          {
            text: "COVID-19",
            link: "/about/covid",
          },
        ],
      }}
      activeContent="covid"
    />
  );
};

export default Covid;
