import React, { ReactNode } from "react";
import { Header } from "components/Header";
import { PageContainer } from "./Page.styled";
import { header } from "data/header";

interface IPage {
  children: ReactNode;
}

export const Page = ({ children }: IPage) => {
  return (
    <PageContainer>
      <Header menu={header} />
      {children}
    </PageContainer>
  );
};
