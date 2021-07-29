import React from "react";
import { ContentPage } from "templates/Page/ContentPage";

const GeneralPhysio = () => {
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
      header="General Physio"
      imgUrl="/static/hero-1.jpg"
      content={content}
      title="Sports Physio"
    />
  );
};

export default GeneralPhysio;
