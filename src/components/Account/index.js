import React from 'react';

import { PasswordForgetLink } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
    <div>
        <h1 className = "text-center">Account: </h1>  
        <div className = "row">
            <div className = "col-6 mx-auto">
                <PasswordChangeForm />          
            </div>
        </div>
        <div className = "text-center mt-3">
            <PasswordForgetLink />
        </div>
    </div>
);

export default AccountPage;