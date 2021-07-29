import Link from "next/link";
import React from "react";
import {
  FooterContainer,
  FooterThird,
  FooterHeader,
  FooterText,
  FooterLink,
  FooterLogos,
  FooterLogo,
  FooterLogoLink,
  FooterOuterContainer,
} from "./Footer.styled";

interface IService {
  text: string;
  link: string;
}

interface IFooter {
  address: string;
  mobile: string;
  facebook: string;
  email: string;
  openingHours: string;
  services: IService[];
}

export const Footer = ({
  address,
  mobile,
  facebook,
  email,
  openingHours,
  services,
}: IFooter) => {
  const servicesComponent = services.map(service => (
    <Link key={service.text} href={service.link}>
      <FooterLink key={service.text}>{service.text}</FooterLink>
    </Link>
  ));

  return (
    <FooterOuterContainer>
      <FooterContainer>
        <FooterThird>
          <FooterHeader>Contact Us</FooterHeader>
          <FooterText>{address}</FooterText>
          <FooterText>
            {`Phone: `}
            <FooterLink href={`tel:${mobile}`}>{mobile}</FooterLink>
          </FooterText>
        </FooterThird>
        <FooterThird>
          <FooterHeader>Opening Hours</FooterHeader>
          <FooterText>{openingHours}</FooterText>
          <FooterLogos>
            <FooterLogoLink href={facebook}>
              <FooterLogo src={"/static/logo/facebook.png"} />
            </FooterLogoLink>
            <FooterLogoLink href={`mailto:${email}`}>
              <FooterLogo src={"/static/logo/email.svg"} />
            </FooterLogoLink>
          </FooterLogos>
        </FooterThird>
        <FooterThird>
          <FooterHeader>Services</FooterHeader>
          {servicesComponent}
        </FooterThird>
      </FooterContainer>
    </FooterOuterContainer>
  );
};
