import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Demo } from "./Demo";

storiesOf("Examples", module).add("Demo", () => <Demo />).add("Selected theme should persist", () => <Demo />);
