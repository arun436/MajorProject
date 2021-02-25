import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TheCity from './images/TheCity.jpg';
import City from './SideComponents/City';

const FirstBody = () => {
    // const [cityButton, setCityButton] = useState(false);
    const openCityButton = () => {
        window.location = '/city';
    }
    return (
        <section id="body-1">
            <div className="about-left-col">
                <img src={TheCity}></img>
                <div className="buttons-body1">
                <button className="body-1-open-button" onClick={openCityButton}>Open for more details and location</button>
                </div>
            </div>
            <div className="about-right-col">
                <div className="about-text">
                <h1>The City</h1>
                <div className="square">
                    <p>         Once known as 'The Garden City' of India, earliest records of a place named ’Bengaluru’ date back to a 9th century temple in an area that is now known as ’Old Bangalore’.
                        The city is split into two main districts: ’Urban’ and ’Rural’. Within the city itself, Mahatma Gandhi Road (M.G. Road), running from Trinity Circle at one end to Anil Kumble Circle at the other, 
                        is the main thoroughfare filled with banks, smart shops and restaurants. The city’s other main hub, Gandhinagar, in the western part of the city, is where you will find the central bus stand and the main railway station. 
                        Nicknamed “Majestic”, the area is crowded, busy and and full of shops, cinemas and budget hotels. In the northern part of the town reside the Raj-era buildings, the High Court and the racecourse.
                        </p>
                </div>
                <h2>“The world is a book and those who do not travel read only a page.”</h2>
                <h3>~ Saint Augustine.</h3>

                </div>
            </div>
        </section>
    );
};

export default FirstBody;