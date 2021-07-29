import React from "react";
import styled from "styled-components";
import { Page } from "templates/Page";
import { colours } from "theme";

const BlogHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.blackHero};
  min-height: calc(100vh - 130px - 185px - 204px - 249px - 63px);
  height: 100%;
`;

const BlogHeader = styled.h1`
  color: ${colours.white};
  text-align: center;
  padding: 10px;
`;

const Blog = () => {
  return (
    <Page title="Blog">
      <BlogHeaderContainer>
        <BlogHeader>Coming Soon...</BlogHeader>
      </BlogHeaderContainer>
    </Page>
  );
};

export default Blog;
