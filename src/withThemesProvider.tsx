import * as React from "react";
import { List } from "immutable";
import { ThemesProvider } from "./ThemesProvider";

import { Theme } from "./types/Theme";

export const withThemesProvider = (themes: Theme[], cb?: (theme: Theme) => void) => (story): JSX.Element => {
    return <ThemesProvider themes={List(themes)} cb={cb}>{story()}</ThemesProvider>;
};
