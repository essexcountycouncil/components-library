import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Header from "./index.jsx";

afterEach(cleanup);

test("That the base <Header /> can render correctly", () => {
    render(<Header />);

    // Expected classes are present
    const base = screen.getByTestId("header");
    expect(base).toBeInTheDocument();
    expect(base).toHaveClass("header-background");

    const header = base.firstChild;
    expect(header).toHaveClass("header");

    const nav = header.firstChild;
    expect(nav).toHaveClass("nav");

    const logoWrap = nav.firstChild;
    expect(logoWrap).toHaveClass("logo-wrap");

    // Link is present
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveClass("logo-text seax");
    expect(link).toHaveTextContent("Essex.gov.uk");

    // Image is correct
    const image = link.firstChild;
    // TODO: Work out how to test that the seax is present
    expect(image).toHaveAttribute("width", "36");
    expect(image).toHaveAttribute("height", "30");
    expect(image).toHaveAttribute("alt", "Essex County Council logo");

    // That navLinks is not present
    expect(screen.queryByTestId("header-links")).not.toBeInTheDocument();
});

test("That a <Header /> with custom title can render correctly", () => {
    render(<Header title="ECC Storybook" />);

    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("ECC Storybook");
});

test("That a <Header /> with navLinks can render correctly", () => {
    render(
        <Header
            navLinks={[
                { href: "#1", text: "Link 1" },
                { href: "#2", text: "Link 2" },
            ]}
        />
    );

    const navLinks = screen.getByTestId("header-links");
    expect(navLinks).toBeInTheDocument();
    expect(navLinks).toHaveClass("nav-links");
    expect(navLinks.children.length).toEqual(2);

    // Just test the first link
    const firstLink = navLinks.firstChild.firstChild;
    expect(firstLink).toHaveAttribute("href", "#1");
    expect(firstLink).toHaveTextContent("Link 1");
});
