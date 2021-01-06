import React from "react";
import PropTypes from "prop-types";

export const Inset = ({ heading, text }) => {
    return (
        <div className="inset">
            <div className="section-heading">{heading}</div>
            <p>
                {text}
            </p>
        </div>
    );
};

Inset.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Inset;
