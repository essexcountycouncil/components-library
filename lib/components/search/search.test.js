import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Search from "./index.jsx";

afterEach(cleanup);

test("That the base <Search /> can render correctly", () => {
    render(<Search />);
    const element = screen.getByRole("search");
    expect(element).toBeInTheDocument();
});
