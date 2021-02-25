import React from 'react'
import './SideComponents/Home.css';
import ShoppingMallMain from './images/ShoppingMallMain.jpg';

function FifthBodyShopping() {
    return (
        <section id="body-5">
            <div id="shopping-left-col">
                <img src={ShoppingMallMain}/>
            </div>
            <div id="shopping-right-col">
                <div id="shopping-heading">
                    <h1>Shopping</h1>
                </div>
                <div id="shopping-text">
                    <p>
                    Bangalore is an every shopper's paradise, as the cosmopolitan city features diverse trends and products ranging from pure silk saris over chic dresses to branded gold jewellery.
                    With exclusive boutiques, modern shopping malls, traditional shopping markets and street side sellers, shopping in Bangalore is indeed a wonderful experience.
                    Gaining recognition from the world, with the very first shopping mall in whole India, Bangalore soon became a hub for shoppers and it still remains until today.
                    </p>
                </div>
                <div id="button-shopping">
                    <button id="btn-shopping">Open for more details and location</button>
                </div>
            </div>
        </section>
    )
}

export default FifthBodyShopping;
