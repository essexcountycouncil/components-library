import React from "react";
import ReactDOMServer from "react-dom/server";
import { Source } from "@storybook/addon-docs/blocks";

const StaticSource = ({ code }) => (
    <Source language="html" code={ReactDOMServer.renderToStaticMarkup(code)} />
);

export default StaticSource;
