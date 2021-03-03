import React from 'react';
import DyuArt from './cafesSectionImages/DyuArt.jpg';
import CafeCoffee from './cafesSectionImages/CafeCoffee.jpg';
import Beans from './cafesSectionImages/Beans.jpg';
import Lavonne from './cafesSectionImages/Lavonne.jpg';
import Brahmin from './cafesSectionImages/Brahmin.jpg';
import Wall from './cafesSectionImages/Wall.webp';

const Cafes = () => {
    return (
        <>
          <div id="restaurants-body-main-div">
            <div id="heading">
            <h1 id="heading-restaurants-h1">Cafes</h1>
            </div>
            <h1>1. Brahamin's Coffee Bar</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Brahmin}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.279976215644!2d77.56667841407827!3d12.953928018772501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f0a35b8ae3%3A0xc02176d1e45cb964!2sBrahmins&#39;%20Coffee%20Bar!5e0!3m2!1sen!2sin!4v1614760998032!5m2!1sen!2sin" width="400" height="280" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp;Near Shankar Mutt, Ranga Rao Rd, Shankarapura, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;Monday–Saturday 6am–12pm / 3pm–7pm, closed on Sunday</p>
            </div>
                <p>A tiny and intimate coffee shop, Brahamin's Coffee Bar, is a well renowned 
                  breakfast spot in Bangalore since 1965. The idli (rice cake) here is an absolute 
                  must-try, as well as some incredibly delicious South Indian specialities that depict 
                  Bangalore's current coffee culture best.</p>
            </div>
            <h1>2. Dyu Art Cafe</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={DyuArt}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.538959842151!2d77.6153950144518!3d12.937326690878376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144f0a0442f3%3A0x5cf634310edf27a8!2sDyu%20Art%20Cafe!5e0!3m2!1sen!2sin!4v1614758187847!5m2!1sen!2sin" width="400" height="280" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; No 23, KHB MIG Colony, Old 5th Block, Koramangala 8th Block, Koramangala, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;   Monday 12pm–10:30pm, Tuesday–Sunday 10am–10:30pm</p>
            </div>
                <p>With its laid back atmosphere and a passion for art, Dyu Art Cafe offers a relaxing 
                  spot and a great place to enjoy a good cup of coffee. The cafe also boasts an alluring 
                  breakfast menu and some cakes that will certainly satisfy your sweet tooth.</p>
            </div>
            <h1>3. Café Coffee Day</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={CafeCoffee}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.901205716821!2d77.63660691407851!3d12.978170318247368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a4fb9647f7%3A0x820f976a220aa291!2sCaf%C3%A9%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1614758912945!5m2!1sen!2sin" width="400" height="280" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp;Msk Plaza, 100 Feet Road, Hal 2Nd Stage 3rd Main Road Indira Nagar III Stage Binnamangala, Hoysala Nagar, Indiranagar Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;Monday 12pm–10:30pm, Tuesday–Sunday 10am–10:30pm</p>
            </div>
                <p>Café Coffee Day is a reliable Starbucks-style cafe chain that serves a wide variety of 
                  coffees and teas in a relaxed and contemporary venue. As pizzas, quiches, cakes and 
                  sundaes are also served here, this is the perfect spot for a break nearly all day long.</p>
            </div>
            <h1>4. Mr. Beans - Home Café</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Beans}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6667448098274!2d77.61959001407803!3d12.929127719308859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145a2a60c635%3A0xd9703dafb8736d45!2sMr.%20Beans%20-%20Home%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1614759375111!5m2!1sen!2sin" width="400" height="280" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp;No. 651, Tank Road, Next to Karnataka Bank ATM, 3rd Block, Koramangala, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;Daily 8:30am–11pm</p>
            </div>
                <p>Mr. Beans - Home Café is the perfect place to go for a pit stop. 
                  They serve coffee and teas par excellence and a wide selection of (predominantly Western) food.</p>
            </div>
            <h1>5. Lavonne Café</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Lavonne}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.07931044216!2d77.6369564!3d12.966776699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae141dd14789a1%3A0x7119c0ddc5321683!2sLavonne%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1614760426417!5m2!1sen!2sin" width="400" height="280" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp;263, 3rd Cross Rd, 2nd Stage, Defence Colony, Domlur, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;Daily 8:30am–11pm</p>
            </div>
                <p>Lavonne Café is a French-inspired patisserie focused on bringing a piece of France 
                  to the people of Bangalore, and they definitely rule the market since their opening. 
                  Make sure to come early as desserts and savouries fly like hotcakes here.</p>
            </div>
            <h1>6. The Hole In The Wall Cafe</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Wall}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.110581449646!2d77.62161544514127!3d12.93484180534804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1467f472d4cb%3A0x51e2bde54ef70494!2sThe%20Hole%20In%20The%20Wall%20Cafe!5e0!3m2!1sen!2sin!4v1614765792923!5m2!1sen!2sin" width="400" height="280" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp;Door No 4, 8th Main Rd, Koramangala 4th Block, Koramangala, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;Daily 8:00am–9:00pm except Monday</p>
            </div>
                <p>A landmark legendary All- Day Diner with Breakfast, lunch and dinner options. 
                    They serve Burgers, pasta, Sandwiches, Breakfast spread, waffles, pancakes and 
                    beverages! Your absolute go-to-place for any meal of the day.</p>
            </div>
            </div>
            <div className="footer-rest">
                <div className="footer-bottom">
                &copy; Travelguides.com | Designed by Arun Kumar Chintha
                </div>
            </div>
        </>
    );
};

export default Cafes;