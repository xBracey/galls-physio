import { Button, IButton } from "components/Button";
import React from "react";
import marked from "marked";
import {
  ImageTextContainer,
  ImageContent,
  ImageContentContainer,
  ImageImage,
  ImageTextOuterContainer,
} from "./ImageText.styled";
import { formatMarkdown } from "lib/formatMarkdown";

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

  return (
    <ImageTextOuterContainer blueBackground={blueBackground}>
      <ImageTextContainer blueBackground={blueBackground}>
        <ImageContentContainer>
          <ImageContent
            dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
          />
          {callToActionComponent}
        </ImageContentContainer>
        <ImageContentContainer>
          <ImageImage src={imgUrl} />
        </ImageContentContainer>
      </ImageTextContainer>
    </ImageTextOuterContainer>
  );
};
