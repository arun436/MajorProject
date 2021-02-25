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
import ThirdBodyRestaurants from '../ThirdBodyRestaurants';
import FourthBodyHotels from '../FourthBodyHotels';
import FifthBodyShopping from '../FifthBodyShopping';
import SixthBodyCafes from '../SixthBodyCafes';
import SeventhBodyBars from '../SeventhBodyBars';
import EigthBodyWeather from '../EighthBodyWeather';
import FooterBody from '../FooterBody';

const Home = () => {
    return (
        <>
            <header id="background-image-section">
                <TopNav/>
            </header>
            <FirstBody/>
            <SecondBody/>
            <ThirdBodyRestaurants/>
            <FourthBodyHotels/>
            <FifthBodyShopping/>
            <SixthBodyCafes/>
            <SeventhBodyBars/>
            <EigthBodyWeather/>
            <FooterBody/>
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