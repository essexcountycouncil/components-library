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

test("That the isBig <Signup /> can render correctly", () => {
    render(<Signup isBig />);
    const element = screen.getByRole("region");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("signup-background");
});
