import React from "react";
import { ContentPage } from "templates/ContentPage";

const About = () => {
  const content = `
### Header look at me!

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,

remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,

remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

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
      header="About Us"
      imgUrl="/static/hero-1.jpg"
      content={content}
    />
  );
};

export default About;
