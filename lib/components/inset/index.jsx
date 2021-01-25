import React from "react";
import PropTypes from "prop-types";

export const Inset = ({ heading, text }) => {
    return (
        <div className="inset" data-testid="inset">
            {heading.length > 0 && (
                <div className="section-heading">{heading}</div>
            )}
            <p>{text}</p>
        </div>
    );
};

Inset.propTypes = {
    text: PropTypes.string.isRequired,
    heading: PropTypes.string,
};

Inset.defaultProps = {
    heading: "",
};

export default Inset;
