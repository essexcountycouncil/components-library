import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Dropdown from "./index.jsx";

afterEach(cleanup);

test("That the label has correct props", () => {
    render(
        <Dropdown label="Test" name="test">
            <option>Option 1</option>
            <option>Option 2</option>
        </Dropdown>
    );

    const label = screen.getByText("Test");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("form-hint");
    expect(label).toHaveAttribute("for", "test");
});

test("That the dropdown select has correct props", () => {
    render(
        <Dropdown label="Test" name="test">
            <option>Option 1</option>
            <option>Option 2</option>
        </Dropdown>
    );

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toHaveClass("form-control");
    expect(dropdown).toHaveAttribute("id", "test");
    expect(dropdown).toHaveAttribute("name", "test");
});
