import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import SignOutButton from '../SignOut';

const Navigation = ({ authUser }) => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to={ROUTES.LANDING}>Content Management System</Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </div>
    </nav>
);

const NavigationAuth = () => (
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={ROUTES.ADMIN}> Admin</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={ROUTES.ACCOUNT}> Account</Link>
        </li>

        <li className="nav-item active">
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <Link className="nav-link" to={ROUTES.SIGN_IN}>Sign in</Link>
        </li>
    </ul>
)

export default Navigation;