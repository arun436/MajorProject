import React from 'react';
import City1 from '../images/City1.jpg';
import City2 from './citySectionImages/City2.jpg';
import City3 from './citySectionImages/City3.jpg';
import City4 from './citySectionImages/City4.jpg';
import City5 from './citySectionImages/City5.jpg';
import City6 from './citySectionImages/City6.jpg';
import './csscomponents/city.css';
const City = () => {
    return (
        <div id="city-section-for-h1-tag">
        <h1 id="heading-city-section">The City</h1>
            <section id="city-1-section-in-city">
                        
                        <div className="text-div">
                        <p>Once known as 'The Garden City' of India, earliest records of a place named ’Bengaluru’ date back to a 9th century temple in an area that is now known as ’Old Bangalore’. 
                        And legends surround Bangalore: while one legend has it that Bengaluru (Town of Boiled Beans) got its name after an old woman served cooked pulses to a lost and hungry Hoysala king, 
                        another one has it that a feudal lord was hunting in the area when a rabbit turned and attacked his dog, and as this made a great impression on the lord, 
                        he gave the place the title of Gandu Bhoomi (the place of heroes).</p>
                        </div>
                        <div className="img-div">
                            <img src={City1}/>
                        </div>
            </section>
            <section id="city-2-section-in-city">
                        <div className="img-div">
                            <img src={City2}/>
                        </div>
                            <div className="text-div">

                            <p>Besides the magic atmosphere that old Indian traditions have created around the city, 
                        Bangalore is also a metropolitan hub, and constantly changing. 
                        Buildings rise up at a fast pace while a new city centre has come into the world, 
                        in a clutch of skyscrapers in the area surrounding Cubbon Park.</p>
                    </div>
                    </section>
                    
                    <section id="city-3-section-in-city">
                            <div className="text-div">
                        <p>The city is split into two main districts: ’Urban’ and ’Rural’. 
                        Within the city itself, Mahatma Gandhi Road (M.G. Road), 
                        running from Trinity Circle at one end to Anil Kumble Circle at the other, 
                        is the main thoroughfare filled with banks, smart shops and restaurants. </p>
                        <p>
                        The city’s other main hub, Gandhinagar, in the western part of the city, 
                        is where you will find the central bus stand and the main railway station. 
                        Nicknamed “Majestic”, the area is crowded, busy and and full of shops, 
                        cinemas and budget hotels. In the northern part of the town reside the Raj-era buildings, 
                        the High Court and the racecourse.</p>
                        <p>
                        Bangalore Urban district contains the city itself and many of the main sights, and it is further divided into the North, 
                        South and also the Anekal districts, comprising more than 600 villages in total. The Bangalore Rural district comprises 1,000 different villages and it is ideal if you fancy escaping from the chaos of the city life. 
                        Outside the city, Savandurga is a famous hilltop with temples dedicated to Gangadeshwara, Hanna Devi and a cave spring called Pattala, that – in a bull-shaped figure – has enchanted tourists for years.</p>
                        </div>
                        <div className="img-div">
                            <img src={City3} id="img-4-city"/>
                            <img src={City4} id="img-5-city"/>
                        </div>
            </section>
            <section id="city-4-section-in-city">
                <div id="img-6-city">
                    <img src={City5}/>
                </div>
                <div id="img-7-city">
                    <img src={City6}/>
                </div>
            </section>
        </div>
    );
};

export default City;