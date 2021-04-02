import React from 'react';
import '../styles/App.css';

const TopNav = () => {
    const OpenRegister = () => {
        window.location = "/register";
    }
    return (
        <>
        <ul id="top-nav-ul">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
        <div className="title-main">
            <h1>Bangalore Sights</h1>
            <button id="register-home" onClick={OpenRegister}>Register</button>
        </div>
        </>
    );
};

export default TopNav;