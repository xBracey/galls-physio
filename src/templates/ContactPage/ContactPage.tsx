import { ContactForm } from "components/ContactForm";
import { IContactFormReducer } from "components/ContactForm/ContactFormReducer";
import { ContentBox } from "components/ContentBox";
import React, { useEffect } from "react";
import { Page } from "templates/Page";
import { PageHeader } from "theme";
import sgMail from "@sendgrid/mail";
import {
  ContactPageContainer,
  ContactPageMap,
  ContactPageOuterContainer,
} from "./ContactPage.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import { sendMail } from "redux/actions/contact";
import { IRootState, types } from "redux/reducers/index";

interface IContactPage {
  contentBox: {
    header: string;
    content: string;
  };
  imgUrl: string;
}

export const ContactPage = ({ contentBox, imgUrl }: IContactPage) => {
  const dispatch: AppDispatch = useDispatch();

  const sentMailStatus = useSelector(
    (state: IRootState) => state.contact.sentMailStatus
  );

  useEffect(() => {
    dispatch({ type: types.contact.CONTACT_RESET_SENT_MAIL });
  }, []);

  const onSave = (state: IContactFormReducer) => {
    dispatch(sendMail(state));
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
          <ContactForm onSave={onSave} contactStatus={sentMailStatus} />
        </ContactPageContainer>
      </ContactPageOuterContainer>
    </Page>
  );
};
