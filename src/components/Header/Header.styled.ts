import styled, { css } from "styled-components";
import { colours, fonts } from "theme";
import Link from "next/link";

export const HeaderContainer = styled.div`
  background-color: ${colours.blue300};
  height: 120px;
  width: calc(100% - 64px);
  padding: 0px 32px;

  display: flex;
  align-items: center;

  color: ${colours.white};
`;

export const HeaderLogo = styled.img`
  height: 100px;
  width: 100px;
  cursor: pointer;
`;

const SingleMenu = css`
  margin: 24px;
  color: ${colours.white};
  border-bottom: transparent 3px solid;
  transition: 0.4s ease-in-out;
  font-size: ${fonts.size.large};

  &:hover {
    border-bottom: ${colours.white} 3px solid;
  }
`;

export const MenuLink = styled(Link)`
  ${SingleMenu}
`;

export const MenuExternalLink = styled.a`
  ${SingleMenu}
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  a {
    text-decoration: none;
  }
`;
