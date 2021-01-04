import React from "react";
import PropTypes from "prop-types";

import Button from "../../elements/button";

export const InformationAlert = ({ children }) => (
    <div className="alert info">
        <div className="alert-icon">
            <span className="fas fa-info-circle"></span>
        </div>
        <div className="alert-text">
            {children}
            <Button type="text">Hide this message</Button>
        </div>
    </div>
);

export const WarningAlert = ({ children }) => (
    <div className="alert warning">
        <div className="alert-icon">
            <span className="fas fa-exclamation-triangle"></span>
        </div>
        <div className="alert-text">
            {children}
            <Button type="text">Hide this message</Button>
        </div>
    </div>
);

export const ErrorAlert = ({ children }) => (
    <div className="alert error">
        <div className="alert-icon">
            <span className="fas fa-exclamation-circle"></span>
        </div>
        <div className="alert-text">
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
