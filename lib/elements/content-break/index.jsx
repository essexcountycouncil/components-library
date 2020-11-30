import React from 'react';
import PropTypes from 'prop-types';

export const ContentBreak = ({isBig}) => {
    const className = (isBig) ? 'content-break-large' : 'content-break-small';

    return (
        <div className={className} />
    )
};

ContentBreak.propTypes = {
    isBig: PropTypes.bool.isRequired
}

export default ContentBreak;