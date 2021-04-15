import React from "react";
import PropTypes from "prop-types";

export const Link = ({
    children,
    download,
    external,
    href,
    tag: Tag,
    target,
    title,
}) => {
    if (external) {
        let infoMsg = "Replacing your browser tab with an external website";

        if (target === "_blank") {
            infoMsg = "Opening a new tab from an external website";
        }

        if (download) {
            infoMsg = "Clicking this will download or open this file";
        }

        return (
            <a
                href={href}
                rel="external"
                className="external-link"
                target={target}
                title={title}
            >
                {children}
                <span className="visually-hidden">{infoMsg}</span>
            </a>
        );
    }

    return (
        <Tag href={href} to={href} title={title}>
            {children}
        </Tag>
    );
};

Link.propTypes = {
    children: PropTypes.node.isRequired,
    download: PropTypes.bool,
    external: PropTypes.bool,
    href: PropTypes.string.isRequired,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    target: PropTypes.oneOf(["", "_blank"]),
    title: PropTypes.string.isRequired,
};

Link.defaultProps = {
    download: false,
    external: false,
    tag: "a",
    target: "",
};

export default Link;
