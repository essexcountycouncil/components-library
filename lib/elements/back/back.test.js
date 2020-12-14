import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Back from "./index.jsx";

afterEach(cleanup);

test("That the base <Back /> can render correctly", () => {
    render(<Back href="/back" text="Back" />);
    const element = screen.getByRole("link");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("link-back");
    expect(element).toHaveAttribute("href", "/back");
    expect(element).toHaveTextContent("Back");
});
