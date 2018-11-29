import React from 'react';

import { withAuthorization } from '../Session';


const ManagePage = () => (
    <div className="row">
        <div className="col-12 text-center">
            <h1>Manage Page</h1>
        </div>
    </div>
)

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ManagePage);