import React from 'react';
import PropTypes from 'prop-types';

export const Embed = ({src, title}) => (
    <div className="embed-container" data-testid="embed">
        <iframe src={src} title={title} />
    </div>
);

Embed.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Embed;
