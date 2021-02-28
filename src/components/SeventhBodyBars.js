import React from 'react';
import BarsMain from './images/BarsMain.jpg';
import './SideComponents/Home.css';

function SeventhBodyBars() {
    return (
        <section id="body-7">
            <div id="bars-left-col">
                <img src={BarsMain}/>
            </div>
            <div id="bars-right-col">
                <div id="bars-heading">
                    <h1>Bars and Nightlife</h1>
                </div>
                <div id="bars-text">
                    <p>
                    The tech-savvy denizens of Bangalore might work hard but they certainly know how to enjoy themselves, 
                    and the city has in fact seen a boom in the numbers of pubs, bars and clubs. 
                    Thanks to vigilant local authorities who have imposed a 11:30pm curfew, 
                    Bangalore’s parties have to power up early, with the only exception of the 24 hours coffee shops. 
                    Despite this hindrance, the city offers great nights out as long as you properly plan ahead, 
                    with a great majority of clubs and bars located at hotels.
                    </p>
                </div>
                <div id="button-bars">
                    <button id="btn-bars">Open</button>
                </div>
            </div>
        </section>
    )
}

export default SeventhBodyBars;
