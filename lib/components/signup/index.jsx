import React from "react";
import PropTypes from "prop-types";

import ButtonSignup from "./button-signup";
import InputSignup from "./input-signup";

export const Signup = ({ href, isBig, input }) => {
    if (input) return <InputSignup isBig={isBig} />;
    return <ButtonSignup href={href} isBig={isBig} />;
};

Signup.propTypes = {
    href: PropTypes.string,
    isBig: PropTypes.bool,
    input: PropTypes.bool,
};

Signup.defaultProps = {
    href: "",
    isBig: false,
    input: false,
};

export default Signup;
