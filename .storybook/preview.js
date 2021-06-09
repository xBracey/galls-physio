import "typeface-roboto";
import React from "react";
import { GlobalStyles } from "../src/theme";

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
