import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Radio from "./index.jsx";

afterEach(cleanup);

test('That we have a wrapping "multiple-choice" class', () => {
    render(<Radio name="telephone" text="Telephone" value="telephone" />);
    expect(screen.getByTestId("radio")).toHaveClass("multiple-choice");
});

test("That the input has expected ids/names/values", () => {
    render(<Radio name="telephone" text="Telephone" value="telephone" />);
    const radio = screen.getByRole("radio");

    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute("id", "telephone");
    expect(radio).toHaveAttribute("name", "telephone");
    expect(radio).toHaveAttribute("type", "radio");
    expect(radio).toHaveValue("value", "telephone");
});

test("That the label has expected for and name", () => {
    render(<Radio name="telephone" text="Telephone" value="telephone" />);
    const label = screen.getByText("Telephone");

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "telephone");
});
