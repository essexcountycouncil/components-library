import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Image from "./index.jsx";

afterEach(cleanup);

test("That the image has correct props", () => {
    render(
        <Image
            src="https://images.unsplash.com/photo-1603731655293-c0b1e452b36b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
            alt="Autumn leaves in the woods"
        />
    );

    expect(screen.getByRole("img")).toHaveAttribute(
        "src",
        "https://images.unsplash.com/photo-1603731655293-c0b1e452b36b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
    );
    expect(screen.getByRole("img")).toHaveAttribute(
        "alt",
        "Autumn leaves in the woods"
    );
});
