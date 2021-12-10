import { TextInputOuterContainer } from "components/TextInput/TextInput.styled";
import styled from "styled-components";
import { colours, device, fonts } from "theme";

export const ContactFormContainer = styled.form`
  width: calc(100% - 64px);
  max-width: 750px;
  margin: 25px 0;
  background-color: ${colours.white};
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  color: ${colours.black200};
  position: relative;
  border-radius: 10px;

  ${TextInputOuterContainer} {
    width: 100%;
    max-width: 100%;

    textarea {
      resize: vertical;
    }
  }
`;

export const ContactFormHeader = styled.h3`
  margin: 15px 0 30px 0;
`;

export const ContactFormNameEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
    width: calc(100% - 20px);
  }
`;

export const ContactFormMessage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ContactFormDummySubmit = styled.input`
  height: 0;
  width: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
  border: 0;
`;

export const ContactFormLoadingMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  text-align: center;
`;

export const ContactFormLoading = styled.div`
  display: flex;
  border: 6px solid ${colours.grey100};
  border-radius: 50%;
  border-top: 6px solid ${colours.blue300};
  width: 18px;
  height: 18px;
  -webkit-animation: spin 1.5s linear infinite; /* Safari */
  animation: spin 1.5s linear infinite;
  margin-left: 12px;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
