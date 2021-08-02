import { Button } from "components/Button";
import { TextInput } from "components/TextInput";
import React, { useReducer, SyntheticEvent } from "react";
import {
  ContactFormContainer,
  ContactFormDummySubmit,
  ContactFormHeader,
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
}

export const ContactForm = ({ onSave }: IContactForm) => {
  const [state, dispatch]: [IContactFormReducer, any] = useReducer(
    reducer,
    initialState
  );

  const { name, email, message } = state;

  const onSubmit = (event?: SyntheticEvent) => {
    event?.preventDefault();
    onSave(state);
  };

  return (
    <ContactFormContainer onSubmit={onSubmit}>
      <ContactFormHeader>Contact Us</ContactFormHeader>
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
    </ContactFormContainer>
  );
};
