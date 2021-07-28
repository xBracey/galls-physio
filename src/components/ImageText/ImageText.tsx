import { Button, IButton } from "components/Button";
import React from "react";
import marked from "marked";
import {
  ImageTextContainer,
  ImageContent,
  ImageContentContainer,
  ImageImage,
} from "./ImageText.styled";

interface IImageText {
  content: string;
  imgUrl: string;
  callToAction?: IButton;
  blueBackground?: boolean;
}

export const ImageText = ({
  content,
  imgUrl,
  callToAction,
  blueBackground,
}: IImageText) => {
  const callToActionComponent =
    callToAction && callToAction.text ? (
      <Button
        text={callToAction.text}
        link={callToAction.link}
        buttonType={blueBackground ? "black" : "blue"}
      />
    ) : null;

  const contentHTML = marked(
    content.replaceAll(
      "\\n",
      `
   `
    ),
    { breaks: true }
  );

  return (
    <ImageTextContainer blueBackground={blueBackground}>
      <ImageContentContainer>
        <ImageContent dangerouslySetInnerHTML={{ __html: contentHTML }} />
        {callToActionComponent}
      </ImageContentContainer>
      <ImageContentContainer>
        <ImageImage src={imgUrl} />
      </ImageContentContainer>
    </ImageTextContainer>
  );
};
