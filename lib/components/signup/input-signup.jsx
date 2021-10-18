import React from "react";
import PropTypes from "prop-types";

const InputSignupMarkup = (
    <>
        <h2 className="section-heading">Stay up to date</h2>
        <p>Get the latest news and information about your council services</p>
        <form action="/search" method="get" className="form">
            <div className="group">
                <div className="signup-input">
                    <label htmlFor="email">
                        Enter your email address
                        <input
                            type="text"
                            id="email"
                            name="email"
                            autoComplete="off"
                        />
                    </label>
                </div>
                <div className="signup-button" id="submitYourEmailAddress">
                    <button type="submit" className="button subscribe">
                        Subscribe
                    </button>
                </div>
            </div>
        </form>
    </>
);

export const InputSignup = ({ isBig }) => (
    <section
        className={isBig ? "signup-background" : "signup"}
        aria-label="Subscribe to email"
    >
        {isBig ? (
            <div className="signup">{InputSignupMarkup}</div>
        ) : (
            InputSignupMarkup
        )}
    </section>
);

InputSignup.propTypes = {
    isBig: PropTypes.bool,
};

InputSignup.defaultProps = {
    isBig: false,
};

export default InputSignup;
