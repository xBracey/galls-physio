import React from "react";
import { BlogHero } from "components/BlogHero";
import { formatDate } from "lib/formatDate";
import { formatMarkdown } from "lib/formatMarkdown";
import { Page } from "templates/Page";
import { icons } from "assets";
import {
  BlogPageContainer,
  BlogAuthorContainer,
  BlogAuthor,
  BlogPageContent,
  BlogAuthorOuterContainer,
  BlogSocial,
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
    <Page
      title={header}
      metaTags={{
        title: header ?? "",
        image: imgUrl ?? "",
        type: "article",
      }}
    >
      <BlogHero header={header} imgUrl={imgUrl} />
      <BlogAuthorOuterContainer>
        <BlogAuthorContainer>
          <BlogAuthor>{author}</BlogAuthor>
          <BlogAuthor>{formatDate(published)}</BlogAuthor>
          <BlogSocial>
            <a
              href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
            >
              <icons.facebook />
            </a>
            <a
              href={`https://twitter.com/share?url=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
            >
              <icons.twitter />
            </a>
          </BlogSocial>
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
