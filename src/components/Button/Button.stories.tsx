import React from "react";
import { Button } from "./Button";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { colours, StorybookWrapper } from "theme";

const story = storiesOf("Components/Button", module);

story.add("Button Component White", () => (
  <StorybookWrapper style={{ backgroundColor: colours.blue200 }}>
    <Button
      onClick={() => {}}
      buttonType={"black"}
      text={"Test Button"}
      isLocked={boolean("Is Locked", false)}
    />
  </StorybookWrapper>
));

story.add("Button Component Blue", () => (
  <Button onClick={() => {}} buttonType={"blue"} text={"Test Button"} />
));

story.add("Button Component Blue isDisabled", () => (
  <Button
    onClick={() => {}}
    buttonType={"blue"}
    text={"Test Button"}
    isDisabled
  />
));
