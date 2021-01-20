import React from "react";
import PropTypes from "prop-types";

export const LinkBoxListItem = ({ href, text, supportingText }) => {
    return (
        <li className="link-box">
            <div className="link-content">
                <a href={href} className="sub-section-heading">
                    {text}
                </a>
                <p>{supportingText}</p>
            </div>
        </li>
    );
};

LinkBoxListItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    supportingText: PropTypes.string.isRequired,
};

export const LinkBoxList = ({ children }) => {
    return <ul className="link-boxes">{children}</ul>;
};

LinkBoxList.propTypes = {
    children: PropTypes.node,
};

export default LinkBoxList;
