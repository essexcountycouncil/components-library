import React from 'react';
import PropTypes from 'prop-types';

export const BackLink = ({href}) => (
    <a href={href} className="link-back">Back</a>
);

BackLink.propTypes = {
    href: PropTypes.string.isRequired
}

export default BackLink;