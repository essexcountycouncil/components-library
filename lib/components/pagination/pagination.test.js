import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Pagination from "./index.jsx";

afterEach(cleanup);

test("That the base <Pagination /> can render correctly", () => {
    render(
        <Pagination
            prevhref="/prev"
            prevtext="Previous"
            nexthref="/next"
            nexttext="Next"
        />
    );
    const element = screen.getByRole("navigation");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("pagination");
    const items = screen.getAllByRole("listitem");
    expect(items.length).toEqual(2);

    const previous = items[0];
    expect(previous.children[0]).toHaveAttribute("href", "/prev");
    expect(previous.children[0]).toHaveTextContent("PreviousPrevious");

    const next = items[1];
    expect(next.children[0]).toHaveAttribute("href", "/next");
    expect(next.children[0]).toHaveTextContent("NextNext");
});
