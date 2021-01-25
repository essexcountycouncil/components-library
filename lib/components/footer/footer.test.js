import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Footer from "./index.jsx";

afterEach(cleanup);

test("That the base <Footer /> can render correctly", () => {
    render(<Footer />);
    const element = screen.getByRole("contentinfo");
    expect(element).toBeInTheDocument();

    // Make sure there is an accessibility link (checks for any link with the text content of "accessibility")
    const accessibilityLink = screen.getByRole("link", {
        name: /accessibility/i,
    });
    expect(accessibilityLink).toBeInTheDocument();
});

test("That the <Footer /> contains an accessibility link", () => {
    render(<Footer />);
    const accessibilityLink = screen.getByRole("link", {
        name: /accessibility/i,
    });
    expect(accessibilityLink).toBeInTheDocument();
});
