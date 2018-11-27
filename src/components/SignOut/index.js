import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" className="nav-link btn btn-link" onClick={firebase.doSignOut}>
    Sign Out
  </button> 
);

export default withFirebase(SignOutButton);