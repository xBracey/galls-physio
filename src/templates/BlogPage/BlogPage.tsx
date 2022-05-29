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
import { IMetaTags } from "components/Head/types";

interface IBlogPage {
  header: string;
  imgUrl: string;
  author: string;
  published: string;
  content: string;
  metaTags?: IMetaTags;
}

export const BlogPage = ({
  header,
  imgUrl,
  author,
  published,
  content,
  metaTags,
}: IBlogPage) => {
  return (
    <Page title={header} metaTags={metaTags}>
      <BlogHero header={header} imgUrl={imgUrl} />
      <BlogAuthorOuterContainer>
        <BlogAuthorContainer>
          <BlogAuthor>{author}</BlogAuthor>
          <BlogAuthor>{formatDate(published)}</BlogAuthor>
          <BlogSocial>
            <a
              href={`https://www.facebook.com/sharer.php?u=${
                typeof window !== "undefined" ? window.location.href : ""
              }`}
              target="_blank"
              rel="noreferrer"
            >
              <icons.facebook />
            </a>
            <a
              href={`https://twitter.com/share?url=${
                typeof window !== "undefined" ? window.location.href : ""
              }`}
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
