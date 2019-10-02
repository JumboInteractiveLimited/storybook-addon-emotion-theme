import * as React from "react";
import addons from "@storybook/addons";
import { Themes } from "./Themes";

addons.register("storybook/themes", (api) => {
    // Also need to set a unique name to the panel.
    addons.addPanel("storybook/themes/panel", {
        title: "Themes",
        render: ({ active, key }) => {
            return (<Themes channel={addons.getChannel()} api={api} active={active} key={key} />);
        },
    });
});
