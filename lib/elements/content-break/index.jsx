import React from 'react';
import PropTypes from 'prop-types';

export const ContentBreak = ({isBig}) => {
    const className = (isBig) ? 'content-break-large' : 'content-break-small';

    return (
        <div className={className} data-testid='content-break' />
    )
};

ContentBreak.propTypes = {
    isBig: PropTypes.bool
}

ContentBreak.defaultProps = {
    isBig: false
}

export default ContentBreak;
