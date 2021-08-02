import { ContactForm } from "components/ContactForm";
import { IContactFormReducer } from "components/ContactForm/ContactFormReducer";
import { ContentBox } from "components/ContentBox";
import React from "react";
import { Page } from "templates/Page";
import { PageHeader } from "theme";
import {
  ContactPageContainer,
  ContactPageContentMap,
  ContactPageMap,
  ContactPageOuterContainer,
  ContactPageContentMapContainer,
} from "./ContactPage.styled";

interface IContactPage {
  contentBox: {
    header: string;
    content: string;
  };
  imgUrl: string;
}

export const ContactPage = ({ contentBox, imgUrl }: IContactPage) => {
  const onSave = (state: IContactFormReducer) => {
    console.log(state);
  };

  return (
    <Page title="Contact" isContact>
      <PageHeader>{"Contact Us"}</PageHeader>
      <ContactPageOuterContainer>
        <ContactPageContainer>
          <ContentBox {...contentBox} />
          <a href={imgUrl}>
            <ContactPageMap src={imgUrl} />
          </a>
          <ContactForm onSave={onSave} />
        </ContactPageContainer>
      </ContactPageOuterContainer>
    </Page>
  );
};
