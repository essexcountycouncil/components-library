import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
    if (props.type === 'submit') {
        return <input type="submit" className="button" value={props.children} />;
    }

    if (props.type === 'text') {
        return <button className="text" type="button">{props.children}</button>
    }

    return (
        <a className="button button-start" href={props.href} role="button">
            {props.children}
        </a>
    )
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    type: PropTypes.oneOf(['button', 'text', 'submit'])
}

Button.defaultProps = {
    href: '',
    type: 'button'
}

export default Button;
