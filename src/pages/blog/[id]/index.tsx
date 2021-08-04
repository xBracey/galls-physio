import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "redux/actions/blogs";
import { IRootState } from "redux/reducers/index";
import { AppDispatch } from "redux/store";
import { BlogPage } from "templates/BlogPage";
import { useRouter } from "next/router";
import { IBlog } from "redux/reducers/blogs";

const BlogSingle = () => {
  const router = useRouter();

  const { id }: { id?: string } = router.query;

  const dispatch: AppDispatch = useDispatch();

  const blogs = useSelector((state: IRootState) => state.blogs);
  const blog: IBlog = blogs.blogs[id];

  useEffect(() => {
    if (id) dispatch(getBlog(id));
  }, [id]);

  console.log(blog?.content);

  return (
    <BlogPage
      author={blog?.author}
      content={blog?.content}
      imgUrl={blog?.imgUrl}
      published={blog?.published}
      header={blog?.header}
    />
  );
};

export default BlogSingle;
