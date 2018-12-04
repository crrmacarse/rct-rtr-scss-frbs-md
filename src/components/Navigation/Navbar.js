import React from 'react';

import AspectRatio from '@material-ui/icons/AspectRatio';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const NavbarTop = () => (
    <nav className = "navbar navbar-expand-lg fixed-top">
         <a class="navbar-brand" href="#"> <AspectRatio /> </a>
         <div className = "vl"></div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>


    </nav>
)

const NavbarSide = () => (
    <React.Fragment>
        <nav className = "navbar navbar-expand-lg w-20 position-fixed navbar-side">
          
        </nav>
    </React.Fragment>
)

export default NavbarTop;

export { NavbarSide };