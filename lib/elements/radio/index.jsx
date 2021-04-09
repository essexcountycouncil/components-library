import React from "react";
import PropTypes from "prop-types";

export const Radio = ({ name, text, value }) => (
    <div className="multiple-choice" data-testid="radio">
        <input id={value} name={name} type="radio" value={value} />
        <label htmlFor={value}>{text}</label>
    </div>
);

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default Radio;
