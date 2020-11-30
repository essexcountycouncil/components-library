import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({children, label, name}) => (
    <>
        <label htmlFor={name} className="form-hint">{label}</label>
        <select className="form-control" id={name} name={name}>
            {children}
        </select>
    </>
);

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Dropdown;
