import React from 'react';

import { Link } from 'react-router-dom';

import PasswordForgetForm from './PasswordForgetForm';

import * as ROUTES from '../../constants/routes';

const PasswordForget = () => (
        <div className = "row">
            <div className = "col-6 mx-auto">  
                <h1>Forgot Password?</h1>
                <PasswordForgetForm />
            </div>
        </div>
);

const PasswordForgetLink = () => (
    <p>
        <Link to = { ROUTES.PASSWORD_FORGET }>Forgot Password?</Link>
    </p>
)

export default PasswordForget;

export { PasswordForgetLink };