import React from "react";

export const BrowserCheck = () => (
    <div
        id="browser-check"
        className="browser-check-background"
        role="region"
        aria-label="browsercheck"
    >
        <div className="browser-check">
            <p className="browser-content">
                You’re currently using an old browser.{" "}
                <a href="/browsers" title="Learn about the latest browsers">
                    Find out how to update your browser
                </a>{" "}
                to get the best experience on this website.
            </p>
        </div>
    </div>
);

export default BrowserCheck;
