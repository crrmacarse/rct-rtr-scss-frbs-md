import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetLink } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

import { withAuthorization } from '../Session';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1 className="text-center">Account: {authUser.email}</h1>
                <div className="row">
                    <div className="col-6 mx-auto">
                        <PasswordChangeForm />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <PasswordForgetLink />
                </div>
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);