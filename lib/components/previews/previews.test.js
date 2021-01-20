import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Previews } from "./index.jsx";

afterEach(cleanup);

test("That the base <Previews /> can render correctly", () => {
    render(
        <Previews>
            <p>Test</p>
        </Previews>
    );

    const element = screen.getByTestId("previews");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("previews");
});
