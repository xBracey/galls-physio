import React, { useState } from "react";
import Link from "next/link";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMobileMenu,
  HeaderMobileMenuContainer,
  HeaderOuterContainer,
  MenuContainer,
  MobileMenuContainer,
} from "./Header.styled";
import { renderMenu } from "./HeaderComponents";
import { icons } from "assets";
import { HeaderLockScroll } from "theme";

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
  isTop: boolean;
}

export const Header = ({ menu, isTop }: IHeader) => {
  const [open, setOpen] = useState(false);

  const menuComponent = menu.map(renderMenu);

  const mobileMenuComponent = open ? (
    <>
      <HeaderLockScroll />
      <HeaderMobileMenu>{menuComponent}</HeaderMobileMenu>
    </>
  ) : null;

  const onMenuClick = () => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
    setOpen(!open);
  };

  return (
    <HeaderOuterContainer isTop={isTop}>
      <HeaderContainer>
        <Link href="/">
          <HeaderLogo src="/static/logo-2.png" isTop={isTop} />
        </Link>
        <MenuContainer>{menuComponent}</MenuContainer>
        {mobileMenuComponent}
        <HeaderMobileMenuContainer>
          <MobileMenuContainer onClick={onMenuClick}>
            {open ? <icons.close /> : <icons.menu />}
          </MobileMenuContainer>
        </HeaderMobileMenuContainer>
      </HeaderContainer>
    </HeaderOuterContainer>
  );
};
