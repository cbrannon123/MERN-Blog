import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import './IndexPage.css'

const IndexPage = (props) => {
    return (
        <div>
            <NavBar
                user={props.user}
                handleLogOut={props.handleLogOut}
            />
        </div>
    );
};





export default IndexPage