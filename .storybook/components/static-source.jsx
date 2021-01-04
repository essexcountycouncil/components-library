import React from "react";
import ReactDOMServer from "react-dom/server";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import { Source } from "@storybook/addon-docs/blocks";

const StaticSource = ({ code }) => {
    const staticCode = ReactDOMServer.renderToStaticMarkup(code);
    const formattedCode = prettier.format(staticCode, {
        parser: "html",
        plugins: [parserHtml],
    });

    return <Source language="html" code={formattedCode} />;
};

export default StaticSource;
