import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import SectionLinks from "./index.jsx";

afterEach(cleanup);

test("That the <SectionLinks /> can render correctly", () => {
    const exampleSections = [
        {
            title: "Section 1",
            links: [
                { path: "#1", title: "Link 1" },
                { path: "#2", title: "Link 2" },
                { path: "#3", title: "Link 3" },
            ],
        },
        {
            title: "Section 2",
            links: [
                { path: "#1", title: "Link 1" },
                { path: "#2", title: "Link 2" },
                { path: "#3", title: "Link 3" },
            ],
        },
    ];

    render(<SectionLinks sections={exampleSections} />);

    // Check it has 2 sections
    const lists = screen.getAllByRole("group");
    expect(lists.length).toEqual(2);

    // Check all links are present
    const links = screen.getAllByRole("link");
    expect(links.length).toEqual(6);

    // Check we are getting the title set
    const firstSection = lists[0];
    expect(firstSection.firstChild).toHaveTextContent("Section 1");
});
