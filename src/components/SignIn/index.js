import React from 'react';

import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';


const Signin = () => (
    <div>
        <h1>Signin</h1>
        <Link to = {ROUTES.SIGN_UP}>SIGN UP</Link>
    </div>
);

export default Signin;