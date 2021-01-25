import React from "react";
import PropTypes from "prop-types";

export const Impact = ({ href, linktext, supportingtext }) => {
    return (
        <div className="impact" data-testid="impact">
            <div className="hero campaign">
                <div className="overlay"></div>
                <div className="overlay-box">
                    <div className="overlay-content">
                        <div className="content-heading">
                            <a href={href}>{linktext}</a>
                        </div>
                        <p>{supportingtext}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Impact.propTypes = {
    href: PropTypes.string.isRequired,
    linktext: PropTypes.string.isRequired,
    supportingtext: PropTypes.string.isRequired,
};

export default Impact;
