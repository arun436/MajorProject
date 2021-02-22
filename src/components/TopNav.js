import React from 'react';

const TopNav = () => {
    return (
        <>
        <ul id="top-nav-ul">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
        <div className="title-main">
            <h1>Travel Guide</h1>
            <h2>-------------------------------------</h2>
            <h1>Bangalore</h1>
        </div>
        </>
    );
};

export default TopNav;