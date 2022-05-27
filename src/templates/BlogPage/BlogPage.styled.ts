import styled from "styled-components";
import { colours } from "theme";

export const BlogPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.white};
`;

export const BlogAuthorOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.blue300};
`;

export const BlogAuthorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 100%;
  max-width: 500px;
  color: ${colours.white};
`;

export const BlogAuthor = styled.p`
  margin: 8px 24px;
  text-align: center;
  font-size: 18px;
`;

export const BlogPageContent = styled.div`
  padding: 50px 25px;
  width: 100%;
  max-width: 800px;
`;

export const BlogSocial = styled.div`
  svg {
    margin: 0px 8px;
  }
`;
