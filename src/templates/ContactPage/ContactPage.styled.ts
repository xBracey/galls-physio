import styled from "styled-components";
import { colours } from "theme";

export const ContactPageOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 25px 75px 25px;
  background-color: ${colours.grey100};
`;

export const ContactPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  flex-direction: column;
`;

export const ContactPageContentMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactPageMap = styled.img`
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.3);
  margin: 25px 0;
`;

export const ContactPageContentMapContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
