import styled, { createGlobalStyle } from "styled-components";
import { colours } from "./colours";
import { fonts } from "./fonts";

interface IStorybookWrapper {
  width?: number;
}

export const GlobalStyles = createGlobalStyle`
    html, body{
        overflow-x: hidden;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1,h2,h3,p,a,div {
        font-family: ${fonts.family.poppins}
    }

    h1 {
        font-size: ${fonts.size.header1};
        margin: 32px 0;
    }

    h2 {
        font-size: ${fonts.size.header2};
        margin: 24px 0;
    }

    h3 {
        font-size: ${fonts.size.header3};
        margin: 16px 0;
    }

    p {
        margin: 8px 0;
    }

    p,a,div {
        font-size: ${fonts.size.medium};
    }

    a {
        text-decoration: none;
        color: inherit;
    } 
`;

export const StorybookWrapper = styled.div<IStorybookWrapper>`
  padding: 16px;
  width: ${props => props.width ?? 600}px;
  display: flex;
`;

export const HeaderLockScroll = createGlobalStyle`
  html {
      overflow: hidden;
  }
`;

export const PageHeader = styled.h1`
  color: ${colours.white};
  text-align: center;
  padding: 60px 0 60px 0;
  margin: 0;
  background-color: ${colours.blue300};
`;
