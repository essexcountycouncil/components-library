import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
    const { children, href, tag: Tag, type } = props;

    if (type === "submit") {
        return <input type="submit" className="button" value={children} />;
    }

    if (type === "text") {
        return (
            <button className="text" type="button">
                {children}
            </button>
        );
    }

    return (
        <Tag
            className="button button-start"
            href={href}
            role="button"
            to={href}
        >
            {children}
        </Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.oneOf(["button", "text", "submit"]),
};

Button.defaultProps = {
    href: "",
    tag: "a",
    type: "button",
};

export default Button;
