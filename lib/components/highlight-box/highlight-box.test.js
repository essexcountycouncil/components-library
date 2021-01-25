import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import HighlightBox from "./index.jsx";

afterEach(cleanup);

test("That the base <HighlightBox /> can render correctly", () => {
    render(<HighlightBox heading="Test heading" text="Test content" />);
    const element = screen.getByTestId("highlight-box");
    expect(element).toBeInTheDocument();
    expect(element.children.length).toEqual(2);

    const heading = element.children[0];
    expect(heading).toHaveTextContent("Test heading");

    const content = element.children[1];
    expect(content).toHaveTextContent("Test content");
});
