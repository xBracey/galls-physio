import React, { useState } from "react";
import { TextInput } from "./TextInput";
import { storiesOf } from "@storybook/react";
import { StorybookWrapper } from "theme";
import { boolean, text } from "@storybook/addon-knobs";

const story = storiesOf("Components/TextInput", module);

story.add("TextInput Component", () => {
  const [inputText, setText] = useState("");

  return (
    <StorybookWrapper>
      <TextInput
        setText={setText}
        text={inputText}
        placeholder={text("Placeholder", "")}
        isTextArea={boolean("Text Area", false)}
      />
    </StorybookWrapper>
  );
});
