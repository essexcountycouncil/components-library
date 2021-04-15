import React from "react";
import PropTypes from "prop-types";

export const Back = (props) => {
    const { href, tag: Tag, text, ...attributes } = props;

    return (
        <Tag href={href} className="link-back" {...attributes}>
            {text}
        </Tag>
    );
};

Back.propTypes = {
    href: PropTypes.string.isRequired,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    text: PropTypes.string.isRequired,
};

Back.defaultProps = {
    tag: "a",
};

export default Back;
