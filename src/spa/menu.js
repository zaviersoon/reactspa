import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <Link to='/'>Home</Link>
            &nbsp;&nbsp;
            <Link to='/contact'>Contact</Link>
            &nbsp;&nbsp;
            <Link to='/service'>Services</Link>

            {/* <a href="2">Home</a>
            &nbsp;
            <a href="1">Help</a> */}
        </div>
      );
}

export default Menu;
