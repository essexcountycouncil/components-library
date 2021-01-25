import React from "react";
import PropTypes from "prop-types";

export const HighlightBox = ({ heading, text }) => {
    return (
        <div className="highlight-box" data-testid="highlight-box">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    );
};

HighlightBox.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default HighlightBox;
