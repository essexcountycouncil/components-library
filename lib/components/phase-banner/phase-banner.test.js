import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import PhaseBanner from "./index.jsx";

afterEach(cleanup);

test("That <PhaseBanner /> can render as expected", () => {
    render(
        <PhaseBanner phaseTag="alpha">
            This is our new website design - it&apos;s work in progress.
        </PhaseBanner>
    );

    const phasebannerBase = screen.getByRole("region");
    expect(phasebannerBase).toBeInTheDocument();
    expect(phasebannerBase).toHaveClass("phase-banner-background");

    const phasebanner = phasebannerBase.firstChild;
    expect(phasebanner).toHaveClass("phase-banner");

    const phasebannerContent = phasebanner.firstChild;
    expect(phasebannerContent).toHaveClass("phase-content");

    const phaseTag = phasebannerContent.firstChild;
    expect(phaseTag).toHaveClass("phase-tag");
    expect(phaseTag).toHaveTextContent("alpha");

    const phasebannerChild = phasebannerContent.lastChild;
    expect(phasebannerChild).toHaveClass("phase-text");
    expect(phasebannerChild).toHaveTextContent(
        "This is our new website design - it's work in progress."
    );
});
