import { IPageMenu, PageMenu } from "components/PageMenu";
import { formatMarkdown } from "lib/formatMarkdown";
import React from "react";
import { Page } from "templates/Page";
import {
  ContentPageContainer,
  ContentPageHeroOuterContainer,
  ContentPageHeroContainer,
  PageMenuContainer,
  ContentPageHeader,
  ContentPageHeaderImage,
  ContentPageContent,
} from "./ContentPage.styled";

interface IContentPage {
  pageMenu: IPageMenu;
  header: string;
  imgUrl: string;
  content: string;
}

export const ContentPage = ({
  pageMenu,
  header,
  imgUrl,
  content,
}: IContentPage) => {
  return (
    <Page title={header}>
      <ContentPageContainer>
        <ContentPageHeader>{header}</ContentPageHeader>
        <ContentPageHeroOuterContainer>
          <ContentPageHeroContainer>
            <PageMenuContainer>
              <PageMenu {...pageMenu} />
              <ContentPageHeaderImage src={imgUrl} />
            </PageMenuContainer>
            <ContentPageContent
              dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
            />
          </ContentPageHeroContainer>
        </ContentPageHeroOuterContainer>
      </ContentPageContainer>
    </Page>
  );
};
