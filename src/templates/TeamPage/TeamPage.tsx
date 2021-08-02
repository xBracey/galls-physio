import { ITeamMember, TeamMember } from "components/TeamMember";
import React from "react";
import { Page } from "templates/Page";
import { PageHeader } from "theme";
import { TeamPageContainer, TeamPageOuterContainer } from "./TeamPage.styled";

interface ITeamPage {
  teamMembers: ITeamMember[];
}

export const TeamPage = ({ teamMembers }: ITeamPage) => {
  const membersComponent = teamMembers.map(teamMember => (
    <TeamMember key={teamMember.name} {...teamMember} />
  ));

  return (
    <Page title={"Meet the Team"}>
      <PageHeader>Meet the Team</PageHeader>
      <TeamPageOuterContainer>
        <TeamPageContainer>{membersComponent}</TeamPageContainer>
      </TeamPageOuterContainer>
    </Page>
  );
};
