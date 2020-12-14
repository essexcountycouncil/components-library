import { withTests } from "@storybook/addon-jest";

import "./../lib/scss/styles.scss";
import results from "../.jest-test-results.json";

export const decorators = [
    withTests({
        results,
    }),
];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: {
            order: ["Introduction", "Elements", "Components"],
        },
    },
};
