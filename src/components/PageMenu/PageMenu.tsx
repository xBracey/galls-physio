import Link from "next/link";
import React from "react";
import {
  PageMenuContainer,
  PageMenuHeader,
  PageMenuSplitter,
  PageSingleMenu,
} from "./PageMenu.styled";

interface IMenu {
  text: string;
  link: string;
}

export interface IPageMenu {
  header: string;
  menu: IMenu[];
}

export const PageMenu = ({ header, menu }: IPageMenu) => {
  const menuComponent = menu.map(singleMenu => (
    <Link href={singleMenu.link}>
      <PageSingleMenu>{singleMenu.text}</PageSingleMenu>
    </Link>
  ));

  return (
    <PageMenuContainer>
      <PageMenuHeader>{header}</PageMenuHeader>
      <PageMenuSplitter />
      {menuComponent}
    </PageMenuContainer>
  );
};
