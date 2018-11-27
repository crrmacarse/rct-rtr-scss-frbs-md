import React from 'react';

import SignInForm from './SigininForm';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';


const Signin = () => (
    <div className="container">
        <div className="row mx-auto">
            <div className="col-6 mx-auto">
                <h1 className="text-right">Sign-in</h1>
                <SignInForm />
            </div>
        </div>
        <div className="row mx-auto">
            <div className="col-6 mx-auto mt-5">
                <SignUpLink />
                <PasswordForgetLink />
            </div>
        </div>

    </div>
);


export default Signin;