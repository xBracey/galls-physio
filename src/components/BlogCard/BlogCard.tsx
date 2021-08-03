import { formatDate } from "lib/formatDate";
import React, { MouseEvent } from "react";
import Truncate from "react-truncate";
import {
  BlogCardContainer,
  BlogCardImage,
  BlogCardHeader,
  BlogCardInfo,
  BlogCardAuthor,
} from "./BlogCard.styled";

interface IBlogCard {
  header: string;
  author: string;
  published: string;
  imgUrl: string;
  onClick: (event: MouseEvent) => void;
}

export const BlogCard = ({
  header,
  author,
  published,
  imgUrl,
  onClick,
}: IBlogCard) => {
  return (
    <BlogCardContainer onClick={onClick}>
      <BlogCardImage imgUrl={imgUrl} />
      <BlogCardHeader>
        <Truncate lines={3} width={240}>
          {header}
        </Truncate>
      </BlogCardHeader>
      <BlogCardInfo>
        <BlogCardAuthor>{author}</BlogCardAuthor>
        <BlogCardAuthor>{formatDate(published)}</BlogCardAuthor>
      </BlogCardInfo>
    </BlogCardContainer>
  );
};
