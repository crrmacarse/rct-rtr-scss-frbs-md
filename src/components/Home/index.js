import React from 'react';
import { withAuthorization } from '../Session';

const Home = () => (
    <div className="row">
        <div className="col-12 mt-5">
            <p className="display-1 text-center">W E L C O M E</p>
        </div>
    </div>

);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);