import { Button } from "components/Button";
import { TextInput } from "components/TextInput";
import React, { useReducer, SyntheticEvent } from "react";
import {
  ContactFormContainer,
  ContactFormDummySubmit,
  ContactFormHeader,
  ContactFormLoading,
  ContactFormLoadingMessageContainer,
  ContactFormMessage,
  ContactFormNameEmail,
} from "./ContactForm.styled";
import {
  IContactFormReducer,
  initialState,
  reducer,
} from "./ContactFormReducer";

interface IContactForm {
  onSave: (state: IContactFormReducer) => void;
  contactStatus: number;
}

export const ContactForm = ({ onSave, contactStatus = 0 }: IContactForm) => {
  const [state, dispatch]: [IContactFormReducer, any] = useReducer(
    reducer,
    initialState
  );

  const { name, email, message } = state;

  const onSubmit = (event?: SyntheticEvent) => {
    event?.preventDefault();
    onSave(state);
  };

  const formComponent = (
    <>
      <ContactFormNameEmail>
        <TextInput
          text={name}
          setText={name => dispatch({ type: "edit", data: { name } })}
          placeholder="Name"
        />
        <TextInput
          text={email}
          setText={email => dispatch({ type: "edit", data: { email } })}
          placeholder="Email"
        />
      </ContactFormNameEmail>
      <ContactFormMessage>
        <TextInput
          text={message}
          setText={message => dispatch({ type: "edit", data: { message } })}
          isTextArea
          placeholder="Message"
        />
      </ContactFormMessage>
      <ContactFormNameEmail>
        <ContactFormDummySubmit type="submit" />
        <Button text="Submit" onClick={onSubmit} />
      </ContactFormNameEmail>
    </>
  );

  return (
    <ContactFormContainer onSubmit={onSubmit}>
      <ContactFormHeader>Book an appointment</ContactFormHeader>
      {contactStatus === 0 && formComponent}
      {contactStatus === 1 && (
        <ContactFormNameEmail>
          <ContactFormLoadingMessageContainer>
            Sending Message
            <ContactFormLoading />
          </ContactFormLoadingMessageContainer>
        </ContactFormNameEmail>
      )}
      {contactStatus === 2 && (
        <ContactFormNameEmail>
          <ContactFormLoadingMessageContainer>
            Message has been sent, you should receive a reply from our team in
            the next few days
          </ContactFormLoadingMessageContainer>
        </ContactFormNameEmail>
      )}
    </ContactFormContainer>
  );
};
