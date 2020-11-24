import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({children, className, label, name, type}) => {
    let classNames = 'group';
    if (className && className !== '') {
        classNames += ` ${className}`;
    }

    const hint = children ? children : null;

    return (
        <div className={classNames}>
            <label for={name}>{label}</label>
            {hint}
            <input className='form-control' id={name} name={name} type={type} />
        </div>
    )
};

Input.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
};

Input.defaultProps = {
    children: null,
    className: '',
    type: 'text'
};

export default Input;
