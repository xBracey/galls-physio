import React, { useState } from "react";
import Link from "next/link";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMobileMenu,
  HeaderMobileMenuContainer,
  MenuContainer,
  MobileMenuContainer,
} from "./Header.styled";
import { renderMenu } from "./HeaderComponents";
import ScrollLock from "react-scrolllock";
import { icons } from "assets";

export interface ISubMenu {
  label: string;
  link: string;
  externalLink?: boolean;
}

export interface IMenu extends ISubMenu {
  subMenu?: ISubMenu[];
}

export interface IHeader {
  menu: IMenu[];
}

export const Header = ({ menu }: IHeader) => {
  const [open, setOpen] = useState(false);

  const menuComponent = menu.map(renderMenu);

  const mobileMenuComponent = open ? (
    <>
      <ScrollLock />
      <HeaderMobileMenu>{menuComponent}</HeaderMobileMenu>
    </>
  ) : null;

  const onMenuClick = () => {
    window.scrollTo(0, 0);
    setOpen(!open);
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <HeaderLogo src="/static/logo.jpg" />
      </Link>
      <MenuContainer>{menuComponent}</MenuContainer>
      {mobileMenuComponent}
      <HeaderMobileMenuContainer>
        <MobileMenuContainer onClick={onMenuClick}>
          {open ? <icons.close /> : <icons.menu />}
        </MobileMenuContainer>
      </HeaderMobileMenuContainer>
    </HeaderContainer>
  );
};
