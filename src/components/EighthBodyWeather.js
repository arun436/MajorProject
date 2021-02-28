import React from 'react'
import WeatherMain from './images/WeatherMain.jpg';
import './SideComponents/Home.css';

function EighthBodyWeather() {
    return (
        <section id="body-8">
            <div id="weather-left-col">
                <div id="weather-heading">
                    <h1>Weather</h1>
                </div>
                <div id="weather-text">
                    <p>If you want to visit to Bangalore? If yes, then checkout the weather that suits you to visit. Click on the button below to checkout.</p>
                </div>
                <div id="button-weather">
                    <button id="btn-weather">Open</button>
                </div>
            </div>
            <div id="weather-right-col">
                <img src={WeatherMain}/>
            </div>
        </section>
    )
}

export default EighthBodyWeather;
