import React from 'react';

import { FirebaseContext } from '../Firebase';
import SignUpForm from './SignUpForm';

const Signup = () => (
    <div>
        <div className="row">
            <div className="col-auto mx-auto">
                <h1>Signup Form</h1>
            </div>
        </div>
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

export default Signup;