import * as React from "react";
import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from "../dist/index";

const defaultTheme = {
  name: "DEFAULT",
  backgroundColor: 'azure',
  textColor: "dimgrey",
  borderRadius: "30px",
};

const darkTheme = {
  name: "DARK",
  backgroundColor: "black",
  textColor: "seashell",
  borderRadius: "100px",
};

const themes = [defaultTheme, darkTheme];
const demoCallback = (theme) => {
  console.log("callback triggered with:", theme);
}

addDecorator(withThemesProvider(themes, demoCallback));

// automatically import all files ending in *.stories.js
const req = require.context('../', true, /.stories.tsx/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
