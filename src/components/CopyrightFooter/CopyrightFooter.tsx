import React from "react";
import {
  CopyrightFooterContainer,
  CopyrightText,
  AuthorText,
  CopyrightFooterOuterContainer,
} from "./CopyrightFooter.styled";

interface ICopyrightFooter {}

export const CopyrightFooter = ({}: ICopyrightFooter) => {
  const year = new Date().getFullYear();

  return (
    <CopyrightFooterOuterContainer>
      <CopyrightFooterContainer>
        <CopyrightText>{`Copyright ${year} First Team Physiotherapy ©`}</CopyrightText>
        <AuthorText href="https://www.tombrace.co.uk/">{`Made by Thomas Brace`}</AuthorText>
      </CopyrightFooterContainer>
    </CopyrightFooterOuterContainer>
  );
};
