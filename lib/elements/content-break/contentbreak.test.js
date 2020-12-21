import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import ContentBreak from "./index.jsx";

afterEach(cleanup);

test("That the small content break has correct class", () => {
    render(<ContentBreak />);
    expect(screen.getByTestId("content-break")).toHaveClass(
        "content-break-small"
    );
});

test("That the large content break has correct class", () => {
    render(<ContentBreak isBig />);
    expect(screen.getByTestId("content-break")).toHaveClass(
        "content-break-large"
    );
});
