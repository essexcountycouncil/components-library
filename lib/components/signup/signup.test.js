import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Signup from "./index.jsx";

afterEach(cleanup);

test("That the base <Signup /> can render correctly", () => {
    render(<Signup />);
    const element = screen.getByRole("region");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("signup");
});

test("That the base <Signup /> can set the correct link", () => {
    render(<Signup href="https://www.essex.gov.uk" />);
    const element = screen.getByRole("link");
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("href", "https://www.essex.gov.uk");
});

test("That the isBig <Signup /> can render correctly", () => {
    render(<Signup isBig />);
    const element = screen.getByRole("region");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("signup-background");
});

test("That the input <Signup /> can render correctly", () => {
    render(<Signup input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
});
