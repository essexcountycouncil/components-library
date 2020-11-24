import React from 'react';
import PropTypes from 'prop-types';

const SignupMarkup = (
    <>
        <h2 class="section-heading">Stay up to date</h2>
        <p>Get the latest news and information about your council services</p>
        <form action="/search" method="get" class="form">
            <div class="group">
                <div class="signup-input">
                    <label for="email">Enter your email address
                        <input type="text" id="email" name="email" autocomplete="off" />
                    </label>
                </div>
                <div class="signup-button" id="submitYourEmailAddress">
                    <button type="submit" class="button subscribe">Subscribe</button>
                </div>
            </div>
        </form>
    </>
);

export const Signup = ({isBig}) => (
    <section class={isBig ? 'signup-background' : 'signup'} role="form" aria-label="Subscribe to email">
        {isBig ? <div className='signup'>{SignupMarkup}</div> : SignupMarkup}
    </section>
);

Signup.propTypes = {
    isBig: PropTypes.bool
};

Signup.defaultProps = {
    isBig: false
};

export default Signup;
