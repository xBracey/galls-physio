import styled, { css } from "styled-components";
import { colours, device, fonts } from "theme";

interface IHeaderOuterContainer {
  isTop: boolean;
}

interface IMenuContainer {
  open: boolean;
}

export const HeaderOuterContainer = styled.div<IHeaderOuterContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 5000;
  width: 100%;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 4px 6px -2px rgba(35, 35, 35, 0.5);

  background-color: ${props =>
    props.isTop ? colours.blackHero : colours.white};

  color: ${props => (props.isTop ? colours.white : colours.blue200)};
`;

export const HeaderContainer = styled.div`
  height: 130px;
  width: calc(100% - 64px);
  max-width: 1000px;
  padding: 0px 32px;

  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.img<IHeaderOuterContainer>`
  height: 110px;
  width: 135.85px;
  cursor: pointer;
  transition: all 0.4s;
  ${props => (props.isTop ? "filter: brightness(150%)" : null)}
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

export const MenuLink = styled.p`
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
  left: -40px;
  right: -40px;
  background-color: ${colours.blue200};
  padding: 12px;
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
  flex-direction: column;
  overflow: hidden;
  height: 0;
  z-index: -1;

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
    height: initial;
  }
`;

export const MenuSubMenuLink = styled.div`
  ${SingleMenu}

  &:hover {
    ${SubMenuContainer} {
      opacity: 1;
      z-index: 1;
      height: initial;
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
