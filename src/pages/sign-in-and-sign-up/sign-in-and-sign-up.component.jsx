/**
 * libraries
 */
import React from "react";

/**
 * CSS
 */

import "./sign-in-and-sign-up.styles.scss";

/**
 * component
 */
import SignIn from "../../componnents/sign-in/sign-in.component";
import SignUp from "../../componnents/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
