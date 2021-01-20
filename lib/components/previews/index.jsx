import React from "react";
import PropTypes from "prop-types";

export const Previews = ({ children }) => (
    <div className="previews" data-testid="previews">
        {children}
    </div>
);

Previews.propTypes = {
    children: PropTypes.node.isRequired,
};

export const Preview = ({
    href,
    image,
    linkHeading,
    metaText,
    supportingText,
}) => {
    return (
        <div className="preview" data-testid="preview">
            {image && image}
            <h3 className="sub-section-heading">
                <a href={href}>{linkHeading}</a>
            </h3>
            <p>{supportingText}</p>
            {metaText && <p className="meta">{metaText}</p>}
        </div>
    );
};

Preview.propTypes = {
    href: PropTypes.string.isRequired,
    image: PropTypes.element,
    linkHeading: PropTypes.string.isRequired,
    metaText: PropTypes.string,
    supportingText: PropTypes.string.isRequired,
};

Preview.defaultProps = {
    metaText: "",
    image: undefined,
};

export default Preview;
