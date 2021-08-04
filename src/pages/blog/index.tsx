import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "redux/actions/blogs";
import { IRootState } from "redux/reducers/index";
import { AppDispatch } from "redux/store";
import { BlogListPage } from "templates/BlogListPage";

const Blog = () => {
  const dispatch: AppDispatch = useDispatch();

  const blogs = useSelector((state: IRootState) => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <BlogListPage
      blogs={Object.values(blogs.blogs)}
      hasLoadedAll={blogs.hasLoadedAll}
    />
  );
};

export default Blog;
