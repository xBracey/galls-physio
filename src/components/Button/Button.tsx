import { icons } from "assets";
import Link from "next/link";
import React, { MouseEvent } from "react";
import { ButtonOuterContainer, ButtonContainer } from "./Button.styled";

export interface IButton {
  text: string;
  link?: string;
  onClick?: (event: MouseEvent) => void;
  buttonType?: string;
  isDisabled?: boolean;
  isLocked?: boolean;
}

const LinkWrapper = ({
  children,
  link,
}: {
  children: JSX.Element;
  link: string;
}) => (link ? <Link href={link}>{children}</Link> : children);

export const Button = ({
  text,
  onClick = () => {},
  link,
  buttonType = "blue",
  isDisabled,
  isLocked,
}: IButton) => {
  const onPress = (event: MouseEvent) => {
    if (!isDisabled && !isLocked) onClick(event);
  };

  const lockedComponent = isLocked ? <icons.lock /> : null;

  return (
    <ButtonOuterContainer>
      <LinkWrapper link={link}>
        <ButtonContainer
          buttonType={buttonType}
          onClick={onPress}
          isDisabled={isDisabled || isLocked}
        >
          {lockedComponent}
          {text}
        </ButtonContainer>
      </LinkWrapper>
    </ButtonOuterContainer>
  );
};
