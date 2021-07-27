import styled, { css } from "styled-components";
import { colours, device, fonts } from "theme";
import Link from "next/link";

interface IMenuContainer {
  open: boolean;
}

export const HeaderContainer = styled.div`
  background-color: ${colours.white};
  height: 130px;
  width: calc(100% - 64px);
  padding: 0px 32px;

  display: flex;
  align-items: center;

  color: ${colours.white};
`;

export const HeaderLogo = styled.img`
  height: 110px;
  width: 135.85px;
  cursor: pointer;
`;

const SingleMenuHover = css`
  &:hover {
    border-bottom: ${colours.blue200} 3px solid;

    @media ${device.menu} {
      border-bottom: transparent 3px solid;
    }
  }
`;

const SingleMenu = css`
  margin: 19px 20px;
  color: ${colours.blue200};
  border-bottom: transparent 3px solid;
  transition: 0.4s ease-in-out;
  font-size: ${fonts.size.large};
  text-align: center;
  position: relative;
  height: 19px;
  display: block;
  cursor: pointer;
  white-space: pre;
  padding: 5px 10px 3px 10px;

  @media ${device.laptop} {
    margin: 19px 10px;
  }
`;

export const MenuLink = styled(Link)`
  ${SingleMenu}
  ${SingleMenuHover}
`;

export const MenuExternalLink = styled.a`
  ${SingleMenu}
  ${SingleMenuHover}
`;

export const MenuContainer = styled.div<IMenuContainer>`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  a {
    text-decoration: none;
  }

  @media ${device.menu} {
    display: none;
  }
`;

export const SubMenuContainer = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  left: -20px;
  right: -20px;
  background-color: ${colours.blue200};
  padding: 12px;
  transition: 0.4s ease-in-out;
  opacity: 0;
  z-index: -1;
  flex-direction: column;

  ${MenuLink}, ${MenuExternalLink} {
    color: ${colours.white};
    margin: 5px 0;
    height: initial;
    min-width: 88px;
    font-size: 14px;
    width: calc(100% - 20px);
    border-bottom: transparent 2px solid;

    &:hover {
      border-bottom: ${colours.white} 2px solid;
    }
  }

  @media ${device.menu} {
    position: static;
    opacity: 1;
    z-index: 1;
  }
`;

export const MenuSubMenuLink = styled.div`
  ${SingleMenu}

  &:hover {
    ${SubMenuContainer} {
      opacity: 1;
      z-index: 1;
    }
  }
`;

export const HeaderMobileMenuContainer = styled.div`
  display: none;
  flex: 1;
  justify-content: flex-end;

  @media ${device.menu} {
    display: flex;
  }
`;

export const MobileMenuContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: scale(1.4);

  path {
    fill: ${colours.blue200};
  }
`;

export const HeaderMobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 130px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colours.blue200};
  z-index: 1000;
  padding: 32px 16px;
  flex-direction: column;
  overflow: auto;

  @media ${device.menu} {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  ${MenuLink}, ${MenuExternalLink} ,${MenuSubMenuLink} {
    color: ${colours.white};
    margin: 15px 36px;
    height: initial;
    font-size: 24px;
    border-bottom: none !important;
    text-align: left;
  }

  ${SubMenuContainer} {
    padding: 12px 12px 0px 12px;

    ${MenuLink}:last-child {
      margin-bottom: 0px;
    }
  }
`;
