import { BlogHero } from "components/BlogHero";
import { formatDate } from "lib/formatDate";
import { formatMarkdown } from "lib/formatMarkdown";
import React from "react";
import { Page } from "templates/Page";
import {
  BlogPageContainer,
  BlogAuthorContainer,
  BlogAuthor,
  BlogPageContent,
  BlogAuthorOuterContainer,
} from "./BlogPage.styled";

interface IBlogPage {
  header: string;
  imgUrl: string;
  author: string;
  published: string;
  content: string;
}

export const BlogPage = ({
  header,
  imgUrl,
  author,
  published,
  content,
}: IBlogPage) => {
  return (
    <Page title={header}>
      <BlogHero header={header} imgUrl={imgUrl} />
      <BlogAuthorOuterContainer>
        <BlogAuthorContainer>
          <BlogAuthor>{author}</BlogAuthor>
          <BlogAuthor>{formatDate(published)}</BlogAuthor>
        </BlogAuthorContainer>
      </BlogAuthorOuterContainer>
      <BlogPageContainer>
        <BlogPageContent
          dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
        />
      </BlogPageContainer>
    </Page>
  );
};
