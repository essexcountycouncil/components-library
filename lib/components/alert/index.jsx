import React from "react";
import PropTypes from "prop-types";

import Button from "../../elements/button";

export const InformationAlert = ({ children }) => (
    <div class="alert info">
        <div class="alert-icon">
            <span class="fas fa-info-circle"></span>
        </div>
        <div class="alert-text">
            {children}
            <Button type="text">Hide this message</Button>
        </div>
    </div>
);

export const WarningAlert = ({ children }) => (
    <div class="alert warning">
        <div class="alert-icon">
            <span class="fas fa-exclamation-triangle"></span>
        </div>
        <div class="alert-text">
            {children}
            <Button type="text">Hide this message</Button>
        </div>
    </div>
);

export const ErrorAlert = ({ children }) => (
    <div class="alert error">
        <div class="alert-icon">
            <span class="fas fa-exclamation-circle"></span>
        </div>
        <div class="alert-text">
            {children}
            <Button type="text">Hide this message</Button>
        </div>
    </div>
);

export const Alert = ({ children, type }) => {
    if (type === "info") {
        return <InformationAlert children={children} />;
    } else if (type === "warning") {
        return <WarningAlert children={children} />;
    } else if (type === "error") {
        return <ErrorAlert children={children} />;
    }

    return null;
};

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["info", "warning", "error"]).isRequired,
};

export default Alert;
