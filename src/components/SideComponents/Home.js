import React from 'react';
// import App from './App';
import center from '../images/center.jpg';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedlin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import './Home.css';
import TopNav from '../TopNav';
import FirstBody from '../FirstBody';
import SecondBody from '../SecondBody';

const Home = () => {
    return (
        <>
            <header id="background-image-section">
                <TopNav/>
            </header>
            <FirstBody/>
            <SecondBody/>
            <div className="sideNav-social-icons">
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={linkedlin} />
                    <img src={twitter} />
            </div>
        </>
    );
};

export default Home;