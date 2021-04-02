import React,{ useState } from 'react';
import './SideComponents/Home.css';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import * as SiIcons from 'react-icons/si';
import * as ImIcons from 'react-icons/im';

export default function FooterBody(){

        function register(){
            window.location = '/register';
        }



    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">Bangalore Sights</h2>
                    {/* <p>Bangalore Sights is a fictional blog created by Arun for the purpose of utilising his skills in project making and other things.</p> */}
                    <div className="contact">
                        <span className="footer-phone"><i className="fas fa-phone"></i>Phone : &nbsp; 123-456-789</span>
                        <span className="footer-email"><i className="fas fa-email"></i>Email : &nbsp; info@travelguides.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"><GrIcons.GrFacebook/></i></a>
                        <a href="#"><i className="fab fa-instagram"><SiIcons.SiInstagram/></i></a>
                        <a href="#"><i className="fab fa-twitter"></i><ImIcons.ImTwitter/></a>
                        <a href="#" id="linkedin"><i className="fab fa-linkedin"></i><IoIcons.IoLogoLinkedin/></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <ul id="footer-flex">
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Most Visited</li>
                        <li>The City</li>
                        <li>Restaurants</li>
                        <li>Hotels</li>
                        <li>Shopping</li>
                        <li>Bars and Nightlife</li>
                        <li>Weather</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                </div>
            <div className="footer-bottom">
                &copy; Travelguides.com | Designed by Arun Kumar Chintha
            </div>
        </div>
    )
}

