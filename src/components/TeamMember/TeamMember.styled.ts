import styled from "styled-components";
import { colours } from "theme";

interface TeamMemberImage {
  imgUrl: string;
}

export const TeamMemberContainer = styled.div`
  width: 350px;
  margin: 25px;
  background-color: ${colours.white};
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  color: ${colours.black200};
`;

export const TeamMemberImage = styled.div<TeamMemberImage>`
  height: 100px;
  width: 100px;
  background-image: url(${props => props.imgUrl});
  background-position: top;
  background-size: cover;
  border-radius: 50%;
  filter: grayscale(100%);
  margin: 8px 0;
`;

export const TeamMemberName = styled.h3`
  margin: 12px 0;
`;

export const TeamMemberJob = styled.p`
  margin: 8px 0;
  font-style: italic;
`;

export const TeamMemberDescription = styled.p`
  margin: 8px 0;
`;
