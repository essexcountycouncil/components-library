/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Preview } from "./index.jsx";

afterEach(cleanup);

test("That the base <Preview /> can render correctly", () => {
    render(
        <Preview
            href="/"
            linkHeading="Preview heading"
            supportingText="Preview copy explaining what content it contains"
        />
    );

    const element = screen.getByTestId("preview");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("preview");

    expect(element.children.length).toEqual(2); // Heading + Text

    const heading = element.children[0];
    expect(heading).toHaveClass("sub-section-heading");
    expect(heading.firstChild).toHaveAttribute("href", "/");
    expect(heading).toHaveTextContent("Preview heading");

    const supportText = element.children[1];
    expect(supportText).toHaveTextContent(
        "Preview copy explaining what content it contains"
    );
});

test("That a <Preview /> with a metatext can render correctly", () => {
    render(
        <Preview
            href="/"
            linkHeading="Preview heading"
            supportingText="Preview copy explaining what content it contains"
            metaText="8 days ago"
        />
    );

    const element = screen.getByTestId("preview");
    expect(element.children.length).toEqual(3); // Heading + Text + MetaText

    const metaText = element.lastChild;
    expect(metaText).toHaveClass("meta");
    expect(metaText).toHaveTextContent("8 days ago");
});

test("That a <Preview /> with an image can render correctly", () => {
    render(
        <Preview
            href="/"
            linkHeading="Preview heading"
            supportingText="Preview copy explaining what content it contains"
            image={
                <img
                    src="https://essexcountycouncil.github.io/essex-county-council-digital-manual/assets/images/news.jpg"
                    alt="Image description"
                />
            }
        />
    );

    const element = screen.getByTestId("preview");
    expect(element.children.length).toEqual(3); // Image + Heading + Text

    const image = element.firstChild;
    expect(image).toHaveAttribute(
        "src",
        "https://essexcountycouncil.github.io/essex-county-council-digital-manual/assets/images/news.jpg"
    );
    expect(image).toHaveAttribute("alt", "Image description");
});
