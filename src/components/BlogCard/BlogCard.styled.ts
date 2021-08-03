import styled from "styled-components";
import { colours } from "theme";

interface IBlogCardImage {
  imgUrl: string;
}

export const BlogCardContainer = styled.div`
  width: 300px;
  margin: 25px;
  background-color: ${colours.white};
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
  color: ${colours.black200};
  overflow: hidden;

  &:hover {
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const BlogCardImage = styled.div<IBlogCardImage>`
  background-image: url(${props => props.imgUrl});
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 150px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const BlogCardHeader = styled.h3`
  margin: 0;
  padding: 30px 30px;
  text-align: center;
  line-height: 28px;
  height: 84px;
`;

export const BlogCardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.grey050};
  width: 100%;
`;

export const BlogCardAuthor = styled.p`
  margin: 0;
  padding: 20px 15px;
  font-size: 14px;
  flex: 1;
  text-align: center;
`;
