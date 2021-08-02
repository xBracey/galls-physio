import styled, { css } from "styled-components";
import { colours, fonts } from "theme";

interface IInput {
  isDisabled: boolean;
}

export const TextInputOuterContainer = styled.div`
  display: flex;
  margin: 10px;
`;

export const TextInputContainer = styled.div`
  position: relative;
  transition: all 0.5s;
  flex: 1;
`;

const InputStyle = css`
  background-color: ${colours.grey100};
  border: none;
  display: block;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: ${fonts.size.medium};
  color: ${colours.black200};
  font-family: ${fonts.family.roboto};
  border: 2px solid ${colours.grey200};
  transition: all 0.3s;
  position: relative;
  z-index: 10;
  width: calc(100% - 46px);
  pointer-events: ${props => (props.isDisabled ? "none" : "auto")};

  :invalid {
    box-shadow: none;
  }

  &::placeholder {
    color: ${colours.black100};
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: ${colours.blue100};
  }
`;

export const Input = styled.input<IInput>`
  ${InputStyle}
`;

export const TextAreaInput = styled.textarea<IInput>`
  ${InputStyle}
`;
