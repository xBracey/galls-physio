import React from "react";
import { Page } from "templates/Page";
import { {{ pascalCase name }}PageContainer } from "./{{ pascalCase name }}Page.styled";

export const {{ pascalCase name }}Page = () => {
  return (
    <Page>
      <{{ pascalCase name }}PageContainer>Hello World</{{ pascalCase name }}PageContainer>
    </Page>
  );
};
