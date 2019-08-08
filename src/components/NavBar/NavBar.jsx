import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <Link to='' onClick={props.handleLogOut}>LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/create'>Create</Link>
            <span>WELCOME, {props.user.name}</span>
        </div>
        :
        <div>
            <Link to='/login'>LOG IN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
             <Link to='/signup' >SIGN UP</Link>
        </div>;

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;