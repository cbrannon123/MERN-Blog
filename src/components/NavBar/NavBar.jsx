import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div className="divGuy">
            <div>
                <Link to='' onClick={props.handleLogOut}>Log Out</Link>
            </div>
            <div>
                <p>{props.user.name}</p>
            </div>
        </div>
        :
        <div  >
            <div className="divGuy" >
                <Link to='/login'>LOG IN</Link>
            </div>
            <div>
                <Link to='/signup' >SIGN UP</Link>
            </div>
        </div>

    return (

        <div className='NavBar'>
            <div>
                <div style={{margin: '-15px 0 0 0'}}><h3>Hacker News</h3></div>
            </div>
            <div>
                {nav}
            </div>
        </div>
    );
};

export default NavBar;