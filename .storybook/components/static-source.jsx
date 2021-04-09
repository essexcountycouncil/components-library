import React from "react";
import ReactDOMServer from "react-dom/server";
import { Source } from "@storybook/addon-docs/blocks";

import { html as formatHtml } from "js-beautify";

const StaticSource = ({ code }) => {
    const staticCode = ReactDOMServer.renderToStaticMarkup(code);
    const formattedCode = formatHtml(staticCode, {
        indent_size: 4,
    });

    return <Source language="html" code={formattedCode} />;
};

export default StaticSource;
