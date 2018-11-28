import React from 'react';

import SignInForm from './SigininForm';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';


const Signin = () => (
        <div className="row">
            <div className="col-6 mx-auto">
                <h1 className="text-right">Sign-in</h1>
                <SignInForm />
            </div>
            <div className="col-12 text-center mt-5">
                <SignUpLink />
                <PasswordForgetLink />
            </div>
        </div>
);


export default Signin;