import React from 'react';
import PropTypes from 'prop-types';

const PhaseBanner = ({children, phaseTag}) => (
    <div className="phase-banner-background" role="region" aria-label="phasebanner">
        <div className="phase-banner" id="phasebanner">
            <p className="phase-content">
                <strong className="phase-tag">{phaseTag}</strong>
                <span className="phase-text">{children}</span>
            </p>
        </div>
    </div>
);

PhaseBanner.propTypes = {
    children: PropTypes.node,
    phaseTag: PropTypes.string.isRequired
};

PhaseBanner.defaultProps = {
    children: null
};

export default PhaseBanner;
