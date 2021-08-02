import { formatMarkdown } from "lib/formatMarkdown";
import React from "react";
import {
  ContentBoxContainer,
  ContentBoxHeader,
  ContentBoxContent,
} from "./ContentBox.styled";

interface IContentBox {
  header: string;
  content: string;
}

export const ContentBox = ({ header, content }: IContentBox) => {
  return (
    <ContentBoxContainer>
      <ContentBoxHeader>{header}</ContentBoxHeader>
      <ContentBoxContent
        dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
      />
    </ContentBoxContainer>
  );
};
