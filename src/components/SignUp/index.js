import React from 'react';

import SignUpForm from './SignUpForm';

import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Signup = () => (
    <div className="row">
        <div className="col-12 text-center">
            <h1>Signup Form</h1>
        </div>
        <div className="col-6 mx-auto">
            <SignUpForm />
        </div>
    </div>

);


const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}> Sign Up</Link>
    </p>
);

export default Signup;


export { SignUpLink };