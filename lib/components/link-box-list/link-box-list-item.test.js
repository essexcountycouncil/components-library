import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { LinkBoxListItem } from "./link-box-list.jsx";

afterEach(cleanup);

test("That the base <LinkBoxListItem /> can render correctly", () => {
    render(
        <LinkBoxListItem
            href="/"
            text="Test text"
            supportingText="Supporting test text"
        />
    );

    const element = screen.getByRole("listitem");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("link-box");

    const link = screen.getByRole("link");
    expect(link).toHaveClass("sub-section-heading");
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveTextContent("Test text");

    const content = link.nextSibling;
    expect(content).toHaveTextContent("Supporting test text");
});
