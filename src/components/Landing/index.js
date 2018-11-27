import React from 'react';

import { FirebaseContext } from '../Firebase';

import coffeebreaklogo from '../../assets/img/coffeebreaklogo.png';
import waffletimelogo from '../../assets/img/waffletimelogo.png';

const Landing = () => (
    <div className = "row">
        <div className = "col-12 mt-5 text-center LandingPageIntro">
                <p className = "h1 font-weight-bold Title">
                  Coffeebreak x Waffle Time x Mango Magic
                </p>
                <p className = "h4 Sub">
                    Content Management System
                </p>
        </div>
    </div>
);

export default Landing;