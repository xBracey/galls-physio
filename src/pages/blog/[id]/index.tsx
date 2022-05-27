import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "redux/actions/blogs";
import { IRootState } from "redux/reducers/index";
import { AppDispatch } from "redux/store";
import { BlogPage } from "templates/BlogPage";
import { useRouter } from "next/router";
import { IBlog } from "redux/reducers/blogs";
import { IMetaTags } from "components/Head/types";
import { formatImage } from "lib/formatImage";

interface IBlogSingle {
  metaTags?: IMetaTags;
}

const BlogSingle = ({ metaTags }: IBlogSingle) => {
  const router = useRouter();

  const { id }: { id?: string } = router.query;

  const dispatch: AppDispatch = useDispatch();

  const blogs = useSelector((state: IRootState) => state.blogs);
  const blog: IBlog = blogs.blogs[id];

  useEffect(() => {
    if (id) dispatch(getBlog(id));
  }, [id]);

  return (
    <BlogPage
      author={blog?.author}
      content={blog?.content}
      imgUrl={blog?.imgUrl}
      published={blog?.published}
      header={blog?.header}
      metaTags={metaTags}
    />
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;

  const res = await fetch(`http://strapi:1337/blogs/single/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      metaTags: {
        title: data.header,
        image: formatImage(data.image, "large"),
        type: "article",
      },
    },
  };
}

export default BlogSingle;
