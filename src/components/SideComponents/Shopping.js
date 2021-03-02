import React from 'react';
import './csscomponents/shopping.css'
import BangaloreCentral from './shoppingSectionImages/BangaloreCentral.jfif';
import UBCity from './shoppingSectionImages/UBCity.jpg';
import Brigade from './shoppingSectionImages/Brigade.jpg';
import Kr from './shoppingSectionImages/Kr.jpg';
import gandhi from './shoppingSectionImages/gandhi.jpg';
import Ananya1 from './shoppingSectionImages/Ananya1.jpg';

const Shopping = () => {
    return (
        <>
            <div id="restaurants-body-main-div">
            <div id="heading">
            <h1 id="heading-restaurants-h1">Shopping</h1>
            </div>
            <p id="entry-para">Bangalore is an every shopper's paradise, as the cosmopolitan city features diverse 
                trends and products ranging from pure silk saris over chic dresses to branded gold 
                jewellery. With exclusive boutiques, modern shopping malls, traditional shopping markets 
                and street side sellers, shopping in Bangalore is indeed a wonderful experience. 
                Gaining recognition from the world, with the very first shopping mall in whole India, 
                Bangalore soon became a hub for shoppers and it still remains until today.</p>
            <h1>1. Bangalore Central Mall</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={BangaloreCentral}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.974583619628!2d77.60904611407847!3d12.973477418349082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16812d080ceb%3A0x2f170f92885c24d0!2sBangalore%20Central%20Mall%2C%20Ashok%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1614713769313!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; Ashok Nagar, Bengaluru, Karnataka</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Daily 11am–9:30pm</p>
            </div>
                <p>The Bangalore Central Mall is the city's biggest shopping centre. At this extremely versatile mall, 
                    you will find everything from clothes and essential household goods to souvenirs and food.</p>
            </div>
            <h1>2. UB City</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={UBCity}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.004014072853!2d77.59386981407846!3d12.971594718389888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16775069abf7%3A0xe138768bb2a0df8a!2sUB%20City!5e0!3m2!1sen!2sin!4v1614714084308!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 24, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Monday–Friday 11am–9pm, Saturday–Sunday 11am–10pm</p>
            </div>
                <p>A luxury retail market in the heart of Bangalore, the UB City, boasts unique brands 
                    such as Burberry, Corneliani, Davidoff, Armani and lots more. As the three opulent 
                    floors also offer a great variety of restaurants, spas and bars, this location – with 
                    its great design – is a plethora of lavishness that only Bangalore can offer.</p>
            </div>
            <h1>3. Brigade Road</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Brigade}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0133705361095!2d77.60471091407845!3d12.970996118402816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d55cf36715%3A0x67c9c68d327b80dd!2sBrigade%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1614714506698!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; Brigade Road, Bangalore</p>
            </div>
                <p>While Brigade Road used to be the spot where British soldiers bought their essentials, 
                    it now is one of the most crowded streets of Bangalore. Besides its variety of stores, 
                    including Planet M, Louis Phillipe, Pepe Jeans, Levis, Lee and Nike, this hot spot also 
                    offers lovely street stalls.</p>
            </div>
            <h1>4. KR Market</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Kr}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1052616691763!2d77.57535131445213!3d12.965115740860082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160987431df5%3A0x45f318bfb67f33e1!2sKR%20Market%2C%20Huriopet%2C%20Chickpet%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1614714832549!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; Huriopet, Bangalore</p>
            </div>
                <p>The city's largest market is right in the heart of the city, and while it is over a 
                    century old, this venue still is the busiest and most colourful market in the whole 
                    of the city. Be sure to head to the Flower Market section at dusk, a spellbinding 
                    area filled with the most beautiful flowers stretching as far as the eye can see.</p>
            </div>
            <h1>5. Mahatma Gandhi Road / Commercial Street</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={gandhi}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.955285143363!2d77.60722061407847!3d12.97471181832232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1687393dbc13%3A0x8b70c8e652b73d9e!2sMahatma%20Gandhi%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1614715184522!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; Mahatma Gandhi Road, Bangalore</p>
            </div>
                <p>Some of the best shopping opportunities in Bangalore can be found along and 
                    around Mahatma Gandhi Road and Commercial Street. Here you will find gift shops 
                    equipped with all manner of souvenirs as well as arts, crafts and textiles.</p>
            </div>
            <h1>6. Shop Ananya</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Ananya1}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.636470917405!2d77.59189962380938!3d12.974758271466467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1678369bf649%3A0x1b7660252f1a81ca!2sShop%20Ananya!5e0!3m2!1sen!2sin!4v1614715568545!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 24 Lavelle Road, Bangalore</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Daily 9am–9pm</p>
            </div>
                <p>Shop Ananya is a great destination for beautifully made silks and gorgeous textiles. 
                    Here you will also find silver jewellery from Jaipur and Amrapali as well as bronze 
                    sculptures and wonderfully crafted teak furniture.</p>
            </div>
            </div>
        </>
    );
};

export default Shopping;