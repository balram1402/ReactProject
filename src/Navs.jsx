import React from 'react';
import {NavLink} from 'react-router-dom';


function Navs() {
    return (
        <>
            <div className= "navs">
            <NavLink exact to = '/' className = "nav" activeclassName = "active">Home</NavLink>
            <NavLink exact to = '/profile' className = "nav" activeclassName = "active">Profile</NavLink>
            <NavLink exact to = '/services' className = "nav" activeclassName = "active">Services</NavLink>
            </div>
            </>
    )
}
export default Navs;