import React from "react";
import PropTypes from "prop-types";

// Via https://raw.githubusercontent.com/alphagov/static/main/app/views/components/_emergency_banner.html.erb with some modifications
/**
 * EmergencyBanner
 *
 * @param {String} type The type of banner to display
 * @param {String} heading Banner Heading
 * @param {String} content Banner Content
 * @param {Object} link An object containing a href, title and text for the link
 * @returns {Component} EmergencyBanner
 */
export const EmergencyBanner = ({ type, heading, content, link }) => (
    <div
        className={`emergency-banner emergency-banner--${type}`}
        role="banner"
        data-nosnippet
    >
        <div className="container">
            <section className="content">
                <div className="column-two-thirds">
                    <h2 className="emergency-banner__heading">{heading}</h2>
                    {content && (
                        <p className="emergency-banner__description">
                            {content}
                        </p>
                    )}
                    {link.url && (
                        <a
                            href={link.url}
                            className="emergency-banner__link govuk-link"
                            title={link.title}
                        >
                            {link.text}
                        </a>
                    )}
                </div>
            </section>
        </div>
    </div>
);

EmergencyBanner.propTypes = {
    type: PropTypes.oneOf([
        "notable-death",
        "national-emergency",
        "local-emergency",
    ]).isRequired,
    heading: PropTypes.string.isRequired,
    content: PropTypes.string,
    link: PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        title: PropTypes.string,
    }),
};

EmergencyBanner.defaultProps = {
    content: "",
    link: null,
};

export default EmergencyBanner;
