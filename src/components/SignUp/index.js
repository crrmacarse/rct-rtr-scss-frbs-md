import React from 'react';

import SignUpForm from './SignUpForm';

import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Signup = () => (
    <div>
        <div className="row">
            <div className="col-auto mx-auto">
                <h1>Signup Form</h1>
            </div>
        </div>
        <SignUpForm />
    </div>
);


const SignUpLink = () => (
        <p>
            Don't have an account? <Link to={ROUTES.SIGN_UP}> Sign Up</Link>
        </p>
);

export default Signup;


export { SignUpLink };