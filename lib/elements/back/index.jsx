import React from "react";
import PropTypes from "prop-types";

export const Back = ({ href, text }) => {
    return (
        <a href={href} className="link-back">
            {text}
        </a>
    );
};

Back.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Back;
