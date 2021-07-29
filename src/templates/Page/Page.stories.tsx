import React from "react";
import { Page } from "./Page";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Templates/Page", module);

story.add("Page Component", () => <Page title="Hello">Hello World</Page>);
