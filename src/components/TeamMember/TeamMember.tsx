import React from "react";
import {
  TeamMemberContainer,
  TeamMemberImage,
  TeamMemberName,
  TeamMemberJob,
  TeamMemberDescription,
} from "./TeamMember.styled";

export interface ITeamMember {
  imgUrl: string;
  name: string;
  jobTitle: string;
  description: string;
}

export const TeamMember = ({
  imgUrl,
  name,
  jobTitle,
  description,
}: ITeamMember) => {
  return (
    <TeamMemberContainer>
      <TeamMemberImage imgUrl={imgUrl} />
      <TeamMemberName>{name}</TeamMemberName>
      <TeamMemberJob>{jobTitle}</TeamMemberJob>
      <TeamMemberDescription>{description}</TeamMemberDescription>
    </TeamMemberContainer>
  );
};
