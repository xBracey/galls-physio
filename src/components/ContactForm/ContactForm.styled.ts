import { TextInputOuterContainer } from "components/TextInput/TextInput.styled";
import styled from "styled-components";
import { colours } from "theme";

export const ContactFormContainer = styled.form`
  width: 450px;
  margin: 25px 25px 45px 25px;
  background-color: ${colours.white};
  border: 2px solid ${colours.grey200};
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  color: ${colours.black200};
  position: relative;
  border-radius: 10px;
`;

export const ContactFormHeader = styled.h3`
  color: ${colours.blue300};
  margin: 15px 0 30px 0;
`;

export const ContactFormNameEmail = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactFormMessage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${TextInputOuterContainer} {
    width: 100%;
    max-width: 100%;

    textarea {
      resize: vertical;
    }
  }
`;

export const ContactFormDummySubmit = styled.input`
  height: 0;
  width: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
  border: 0;
`;
