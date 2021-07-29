import styled from "styled-components";
import { colours, device } from "theme";

export const ContentPageContainer = styled.div``;

export const ContentPageHeroOuterContainer = styled.div`
  display: flex;
  background-color: ${colours.white};
  justify-content: center;
  align-items: center;
  padding: 25px 25px 75px 25px;
`;

export const ContentPageHeroContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;

  @media ${device.menu} {
    flex-direction: column;
  }
`;

export const PageMenuContainer = styled.div`
  padding-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${device.menu} {
    padding: 0 0 50px 0;
  }
`;

export const ContentPageHeader = styled.h1`
  color: ${colours.white};
  text-align: center;
  padding: 60px 0 60px 0;
  margin: 40px 0;
  background-color: ${colours.blue300};
`;

export const ContentPageHeaderImage = styled.img`
  margin-top: 25px;
  width: 400px;
  border-radius: 5px;
`;

export const ContentPageContent = styled.div`
  flex: 1;
  color: ${colours.black200};
  padding-left: 50px;

  @media ${device.menu} {
    padding: 0 0 0 0;
  }

  & > *:first-child {
    margin-top: 10px;
  }
`;
