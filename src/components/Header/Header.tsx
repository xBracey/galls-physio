import React from "react";
import Link from "next/link";
import {
  HeaderContainer,
  HeaderLogo,
  MenuLink,
  MenuExternalLink,
  MenuContainer,
} from "./Header.styled";

interface IMenu {
  label: string;
  link: string;
  externalLink?: boolean;
}

interface IHeader {
  menu: IMenu[];
}

export const Header = ({ menu }: IHeader) => {
  const menuComponent = menu.map(singleMenu =>
    singleMenu.externalLink ? (
      <MenuExternalLink href={singleMenu.link} key={singleMenu.link}>
        {singleMenu.label}
      </MenuExternalLink>
    ) : (
      <MenuLink href={singleMenu.link} key={singleMenu.link}>
        {singleMenu.label}
      </MenuLink>
    )
  );

  return (
    <HeaderContainer>
      <Link href="/">
        <HeaderLogo src="/static/logo.png" />
      </Link>
      <MenuContainer>{menuComponent}</MenuContainer>
    </HeaderContainer>
  );
};
