import React from 'react';
import VidhanaSoudha from './images/VidhanaSoudha.jpg'
import CubbonPark2 from './images/CubbonPark2.jpg';
import center from './images/center.jpg';
import NandiHills from './images/NandiHills.jpg';
import Iskcon from './images/Iskcon.jpg';
import wonderla from './images/wonderla.jfif';
import MysorePalace from './images/MysorePalace.jpg';
import Lalbagh from './images/Lalbagh.jpg';
import planetorium from './images/planetorium.jpg';

const SecondBody = () => {
    const openMostVisitedButton = () => {
        window.location = "./mostvisited";
    }
    const openMostVisited = () => {
        window.location = "/mostvisited";
    }
    return (
        <section id="body-2">
            <div className="Vidhan-left-div">
                <h1>Most Visited</h1>
                <p>To talk of innumerable epithets! Bangalore or Bengaluru as it is called, also offers some attractions in the form of historical temples, nightlife and lip-smacking delicacies. Aiming to explore Bangalore extensively on your next trip?</p>
                <p>Here are the list of famous places in Bangalore you must want to visit once in your life. If you are looking to plan a weekend trip with your family and friends, So these are the most attracting tourist places in Bangalore to visit that will make you fall in love.</p>
                <div className="buttons-body-2">
                    <button id="body-2-open-button" onClick={openMostVisitedButton}>Open</button>
                </div>
            </div>
            <div className="Vidhan-right-div" onClick={openMostVisited}>
                <div id="img-1-div" className="imgs-div">
                    <p className="img-description">Vidhan Soudha</p>
                    <img src={VidhanaSoudha} id="img-1-mostvisited"/>
                </div>
                <div id="img-2-div" className="imgs-div">
                    <p className="img-description">Cubbon Park</p>
                    <img src={CubbonPark2} id="img-2-mostvisited"/>
                </div>
                <div id="img-3-div" className="imgs-div">
                    <p className="img-description">Bangalore Palace</p>
                    <img src={center} id="img-3-mostvisited"/>
                </div>
                <div id="img-4-div" className="imgs-div">
                    <p className="img-description">Nandi Hills</p>
                    <img src={NandiHills} id="img-4-mostvisited"/>
                </div>
                <div id="img-5-div" className="imgs-div">
                    <p className="img-description">Iskcon Temple</p>
                    <img src={Iskcon} id="img-5-mostvisited"/>
                </div>
                <div id="img-6-div" className="imgs-div">
                    <p className="img-description">Wonderla</p>
                    <img src={wonderla} id="img-6-mostvisited"/>
                </div>
                <div id="img-7-div" className="imgs-div">
                    <p className="img-description">Mysore Palace</p>
                    <img src={MysorePalace} id="img-7-mostvisited"/>
                </div>
                <div id="img-8-div" className="imgs-div">
                    <p className="img-description">Lalbagh Garden</p>
                    <img src={Lalbagh} id="img-8-mostvisited"/>
                </div>
                <div id="img-9-div" className="imgs-div">
                    <p className="img-description">Nehru planetorium</p>
                    <img src={planetorium} id="img-9-mostvisited"/>
                </div>
            </div>
        </section>
    );
};

export default SecondBody;