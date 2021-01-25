import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { LinkBoxList } from "./link-box-list.jsx";

afterEach(cleanup);

test("That the base <LinkBoxList /> can render correctly", () => {
    render(<LinkBoxList />);
    const element = screen.getByRole("list");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("link-boxes");
});
