import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({name, value}) => (
    <div class="multiple-choice">
        <input id={name} name={name} type="checkbox" value={value} />
        <label htmlFor={name}>{value}</label>
    </div>
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default Checkbox;
