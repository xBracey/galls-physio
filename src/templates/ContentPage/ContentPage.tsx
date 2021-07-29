import { IPageMenu, PageMenu } from "components/PageMenu";
import { formatMarkdown } from "lib/formatMarkdown";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "redux/actions/content";
import { ISingleContent } from "redux/reducers/content";
import { IRootState, types } from "redux/reducers/index";
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
  activeContent: string;
}

export const ContentPage = ({ pageMenu, activeContent }: IContentPage) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: types.content.CONTENT_SET_ACTIVE_CONTENT,
      data: { activeContent },
    });

    dispatch(getContent());
  }, []);

  const contentState = useSelector((state: IRootState) => state.content);

  const activeContentState: ISingleContent = contentState[activeContent];

  const { header, imgUrl, content } = activeContentState || {};

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
              dangerouslySetInnerHTML={{
                __html: content ? formatMarkdown(content) : "",
              }}
            />
          </ContentPageHeroContainer>
        </ContentPageHeroOuterContainer>
      </ContentPageContainer>
    </Page>
  );
};
