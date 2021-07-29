import React from "react";
import { Page } from "templates/Page";
import {
  ComingSoonHeader,
  ComingSoonHeaderContainer,
} from "./ComingSoonPage.styled";

export const ComingSoonPage = () => {
  return (
    <Page title="ComingSoon">
      <ComingSoonHeaderContainer>
        <ComingSoonHeader>Coming Soon...</ComingSoonHeader>
      </ComingSoonHeaderContainer>
    </Page>
  );
};
