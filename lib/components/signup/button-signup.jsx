import React from "react";
import PropTypes from "prop-types";

const ButtonSignupMarkup = (href) => (
    <>
        <h2 className="section-heading">Sign up for e-newsletters</h2>
        <p>Get the latest news and information about your council services</p>
        <div className="btn-area signup-button" id="submitYourEmailAddress">
            <a href={href} className="button subscribe">
                Subscribe
            </a>
        </div>
    </>
);

export const ButtonSignup = ({ href, isBig }) => (
    <section
        className={isBig ? "signup-background" : "signup"}
        aria-label="Subscribe to email"
    >
        {isBig ? (
            <div className="signup">{ButtonSignupMarkup(href)}</div>
        ) : (
            ButtonSignupMarkup(href)
        )}
    </section>
);

ButtonSignup.propTypes = {
    href: PropTypes.string,
    isBig: PropTypes.bool,
};

ButtonSignup.defaultProps = {
    href: "",
    isBig: false,
};

export default ButtonSignup;
