import React from 'react'
import RestaurantsMain from './images/RestaurantsMain.jpg';
import './SideComponents/Home.css';

function ThirdBodyRestaurants() {
    return (
        <section id="body-3">
            <div id="restaurants-left-col">
                <img src={RestaurantsMain}/>
            </div>
            <div id="restaurants-right-col">
                <div className="restaurants-heading">
                    <h1>Restaurants</h1>
                </div>
                <div className="restaurants-text">
                    <p>After finding a perfect blend of modernity and then blending with tradition, Bangalore has managed to rise the ranks from merely being a garden city to become one of the most sought-after cities in the world. Some of these best restaurants in Bangalore are a testament to the changing times in Karnataka’s capital which has evolved into a rich and diverse food paradise for travelers and locals alike.</p>
                    <div className="button-restaurants">
                        <button id="btn-restaurant">Open for more details and location</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThirdBodyRestaurants;
