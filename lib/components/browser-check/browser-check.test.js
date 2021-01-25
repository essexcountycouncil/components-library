import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import BrowserCheck from "./index.jsx";

afterEach(cleanup);

test("That the base <BrowserCheck /> can render correctly", () => {
    render(<BrowserCheck />);
    const element = screen.getByRole("region");
    expect(element).toBeInTheDocument();
});
