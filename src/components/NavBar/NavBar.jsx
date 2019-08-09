import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div >

            <div>
                <Link to='' onClick={props.handleLogOut}>Log Out</Link>
            </div>
            <div>
                <p>{props.user.name}</p>
            </div>
        </div>
        :
        <div >
            <div>
                <Link to='/login'>LOG IN</Link>
            </div>
            <div>
                <Link to='/signup' >SIGN UP</Link>
            </div>
        </div>;

    return (

        <div className='NavBar'>
            <div>
                <div className='NavBar-img'>X</div>
            </div>
            <div>
                {nav}
            </div>
        </div>
    );
};

export default NavBar;