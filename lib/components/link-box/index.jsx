import React from "react";
import PropTypes from "prop-types";

export const LinkBox = ({ href, text, supportingText }) => {
    return (
        <ul className="link-boxes">
            <li className="link-box">
                <div className="link-content">
                    <a href={href} className="sub-section-heading">
                        {text}
                    </a>
                    <p>{supportingText}</p>
                </div>
            </li>            
            <li className="link-box">
                <div className="link-content">
                    <a href={href} className="sub-section-heading">
                        {text}
                    </a>
                    <p>{supportingText}</p>
                </div>
            </li>            
            <li className="link-box">
                <div className="link-content">
                    <a href={href} className="sub-section-heading">
                        {text}
                    </a>
                    <p>{supportingText}</p>
                </div>
            </li>            
        </ul>
    );
};

LinkBox.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    supportingText: PropTypes.string.isRequired,
};

export default LinkBox;
