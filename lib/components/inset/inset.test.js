import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Inset from "./index.jsx";

afterEach(cleanup);

test("That the base <Inset /> can render correctly", () => {
    render(<Inset text="Some test text" />);
    const element = screen.getByTestId("inset");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Some test text");

    expect(element.children.length).not.toEqual(2);
});

test("That an <Inset /> with a heading can render correctly", () => {
    render(<Inset heading="Test heading" text="Some test text" />);
    const element = screen.getByTestId("inset");
    expect(element).toBeInTheDocument();

    expect(element.children.length).toEqual(2);

    // Check heading
    const heading = element.children[0];
    expect(heading).toHaveClass("section-heading");
    expect(heading).toHaveTextContent("Test heading");
});
