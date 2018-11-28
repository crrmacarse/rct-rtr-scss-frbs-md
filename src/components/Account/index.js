import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetLink } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

import { withAuthorization } from '../Session';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className="row">
                <div className="col-12 text-center">
                    <p className = "h1">Account: {authUser.email}</p>
                </div>
                <div className="col-6 mx-auto">
                    <PasswordChangeForm />
                    <span className="text-center mt-3"> 
                        <PasswordForgetLink />
                    </span>
                </div>
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);