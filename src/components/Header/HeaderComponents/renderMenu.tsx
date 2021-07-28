import Link from "next/link";
import React from "react";
import { IMenu, ISubMenu } from "../Header";
import {
  MenuExternalLink,
  MenuLink,
  MenuSubMenuLink,
  SubMenuContainer,
} from "../Header.styled";

const renderSubMenu = (subMenu: ISubMenu[]) => {
  return <SubMenuContainer>{subMenu.map(renderMenu)}</SubMenuContainer>;
};

export const renderMenu = (singleMenu: IMenu) => {
  if (singleMenu.subMenu && singleMenu.subMenu.length) {
    return (
      <MenuSubMenuLink href={singleMenu.link} key={singleMenu.label}>
        {singleMenu.label}
        {renderSubMenu(singleMenu.subMenu)}
      </MenuSubMenuLink>
    );
  }

  return singleMenu.externalLink ? (
    <MenuExternalLink href={singleMenu.link} key={singleMenu.label}>
      {singleMenu.label}
    </MenuExternalLink>
  ) : (
    <Link href={singleMenu.link} key={singleMenu.label}>
      <MenuLink key={singleMenu.label}>{singleMenu.label}</MenuLink>
    </Link>
  );
};
