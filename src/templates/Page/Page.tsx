import React, { ReactNode } from "react";
import { Header } from "components/Header";
import { PageContainer, PageContent } from "./Page.styled";
import { header } from "data/header";
import { useScroll } from "./PageHelpers/useScroll";

interface IPage {
  children: ReactNode;
}

export const Page = ({ children }: IPage) => {
  const isTop = useScroll();

  console.log(isTop);

  return (
    <PageContainer>
      <Header menu={header} isTop={isTop} />
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
};
