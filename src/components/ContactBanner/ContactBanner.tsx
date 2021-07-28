import { Button, IButton } from "components/Button";
import React from "react";
import {
  ContactBannerContainer,
  ContactBannerOuterContainer,
  ContactText,
} from "./ContactBanner.styled";

interface IContactBanner {
  text: string;
  callToAction: IButton;
}

export const ContactBanner = ({ text, callToAction }: IContactBanner) => {
  return (
    <ContactBannerOuterContainer>
      <ContactBannerContainer>
        <ContactText>{text}</ContactText>
        <Button {...callToAction} />
      </ContactBannerContainer>
    </ContactBannerOuterContainer>
  );
};
