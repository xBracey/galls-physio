import { ButtonContainer } from "components/Button/Button.styled";
import styled from "styled-components";

export const BlogListPageOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 25px;
`;

export const BlogListPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

export const BlogListLoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 25px;
  width: 100%;

  ${ButtonContainer} {
    padding: 25px 45px;
    font-size: 22px;
    border-radius: 15px;
  }
`;
