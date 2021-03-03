import React from 'react'
import './SideComponents/Home.css';
import HotelsMain from './images/HotelsMain.jpg';
import Hotels from './SideComponents/Hotels';

function FourthBodyHotels() {
    const openHotels = () => {
        window.location = "/hotels";
    }
    return (
        <section id="body-4">
            <div id="hotels-left-col">
                <div id="hotels-heading">
                <h1>Hotels</h1>
                </div>
                <div id="hotels-text">
                <p>Hotel rooms have everything you need for a pleasant stay: large comfortable beds covered with special bedspreads that get made by themselves, and bathrooms that are clean and shiny.
                Hotel rooms are known for having terraces with views that are perfect for enjoyment.Here are some cool hotels that you can checkout by clicking the below button.</p>
                </div>
                <div id="button-hotel">
                    <button id="btn-hotel" onClick={openHotels}>Open</button>
                </div>
            </div>
            <div id="hotels-right-col">
                <img src={HotelsMain}/>
            </div>
        </section>
    )
}

export default FourthBodyHotels;
