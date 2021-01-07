import React from "react";
import PropTypes from "prop-types";

export const Preview = ({ supportingText, linkHeading }) => {
    return (
        
            <div className="previews">
                <div className="preview">
                    <h3 className="sub-section-heading">
                        <a href="#">{linkHeading}</a>
                    </h3>
                    <p>{supportingText}</p>
                </div>
                <div className="preview">
                    <h3 className="sub-section-heading">
                        <a href="#">{linkHeading}</a>
                    </h3>
                    <p>{supportingText}</p>
                </div>
                <div className="preview">
                    <h3 className="sub-section-heading">
                        <a href="#">{linkHeading}</a>
                    </h3>
                    <p>{supportingText}</p>
                </div>
                <div className="preview">
                    <h3 className="sub-section-heading">
                        <a href="#">{linkHeading}</a>
                    </h3>
                    <p>{supportingText}</p>
                </div>
                <div className="preview">
                    <h3 className="sub-section-heading">
                        <a href="#">{linkHeading}</a>
                    </h3>
                    <p>{supportingText}</p>
                </div>
            </div>
       
    );
};

Preview.propTypes = {
   supportingText: PropTypes.string.isRequired,
   linkHeading: PropTypes.string.isRequired,
};

export default Preview;