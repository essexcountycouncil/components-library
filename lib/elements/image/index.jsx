import React from 'react';
import PropTypes from 'prop-types';

// TODO: Needs to be responsive
export const Image = ({alt, src}) => (
    <img src={src} alt={alt} style={{maxWidth: '100%'}} />
);

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default Image;
