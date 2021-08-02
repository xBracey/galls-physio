import React, { ChangeEvent } from "react";
import {
  Input,
  TextInputOuterContainer,
  TextInputContainer,
  TextAreaInput,
} from "./TextInput.styled";

const TextInputWrapper = ({ children }) => (
  <TextInputOuterContainer>
    <TextInputContainer>{children}</TextInputContainer>
  </TextInputOuterContainer>
);

interface ITextInput {
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
  isTextArea?: boolean;
}

export const TextInput = ({
  text,
  setText,
  placeholder,
  isTextArea,
}: ITextInput) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return isTextArea ? (
    <TextInputWrapper>
      <TextAreaInput
        onChange={onChange}
        value={text}
        placeholder={placeholder}
      />
    </TextInputWrapper>
  ) : (
    <TextInputWrapper>
      <Input
        onChange={onChange}
        value={text}
        type={"text"}
        placeholder={placeholder}
      />
    </TextInputWrapper>
  );
};
