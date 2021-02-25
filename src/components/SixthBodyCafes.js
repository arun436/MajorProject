import React from 'react'
import CafesMain from './images/CafesMain.jpg';

function SixthBodyCafes() {
    return (
        <section id="body-6">
            <div id="cafes-left-col">
                <div id="cafe-heading">
                    <h1>Cafes</h1>
                </div>
                <div id="cafe-text">
                    <p>
                With the emergence of a cosmopolitan cafe culture, 
                new venues and fast food outlets pop up in Bangalore, 
                and the high tea became a social event not only for the upper class but for everybody. 
                While predictable café chain like Barista and Coffee Day soon settled, 
                hip hangouts with DJs or live music as well as more traditional settings also rose up in the heart of the city, 
                awaiting you for having a break.
                </p>
                </div>
                <div id="button-cafe">
                    <button id="btn-cafe">Open for more details and location</button>
                </div>
            </div>
            <div id="cafes-right-col">
                <img src={CafesMain}/>
            </div>
        </section>
    )
}

export default SixthBodyCafes;
