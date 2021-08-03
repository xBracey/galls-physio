import { BlogCard } from "components/BlogCard";
import { Button } from "components/Button";
import dayjs from "dayjs";
import React from "react";
import { useDispatch } from "react-redux";
import { getBlogs } from "redux/actions/blogs";
import { IBlog } from "redux/reducers/blogs";
import { Page } from "templates/Page";
import { PageHeader } from "theme";
import {
  BlogListPageContainer,
  BlogListPageOuterContainer,
  BlogListLoadMore,
} from "./BlogListPage.styled";

interface IBlogListPage {
  blogs: IBlog[];
  hasLoadedAll: boolean;
}

export const BlogListPage = ({ blogs, hasLoadedAll }: IBlogListPage) => {
  const dispatch = useDispatch();

  const onBlogClick = (id: number) => {
    console.log(id);
  };

  const onLoadMore = () => {
    dispatch(getBlogs());
  };

  const blogsComponent = blogs
    .sort(blog => dayjs(blog.published).unix())
    .map(blog => (
      <BlogCard
        key={blog.id}
        author={blog.author}
        published={blog.published}
        header={blog.header}
        imgUrl={blog.thumbnailImgUrl}
        onClick={() => onBlogClick(blog.id)}
      />
    ));

  const loadMoreButton = hasLoadedAll ? null : (
    <BlogListLoadMore>
      <Button text={"Load More"} onClick={onLoadMore} />
    </BlogListLoadMore>
  );

  return (
    <Page title="Blogs">
      <PageHeader>{"Blogs"}</PageHeader>
      <BlogListPageOuterContainer>
        <BlogListPageContainer>
          {blogsComponent}
          {loadMoreButton}
        </BlogListPageContainer>
      </BlogListPageOuterContainer>
    </Page>
  );
};
