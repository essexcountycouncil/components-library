import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Impact from "./index.jsx";

afterEach(cleanup);

test("That the base <Impact /> can render correctly", () => {
    render(
        <Impact
            href="/"
            linktext="Link text"
            supportingtext="Supporting test text"
        />
    );
    const element = screen.getByTestId("impact");
    expect(element).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Link text");
    expect(link).toHaveAttribute("href", "/");

    const supporting = link.parentElement.nextSibling;
    expect(supporting).toHaveTextContent("Supporting test text");
});
