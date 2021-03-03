import React from 'react';
import Ebony from './restaurantSectionImages/Ebony.webp';
import Italia from './restaurantSectionImages/Italia.jpg';
import Dakshin from './restaurantSectionImages/Dakshin.jpg';
import Karavalli from './restaurantSectionImages/Karavalli.jpg';
import Millers46 from './restaurantSectionImages/Millers46.jpg';
import Chianti from './restaurantSectionImages/Chianti.jpg';
import Wharf from './restaurantSectionImages/Wharf.jpg';
import Sattvam from './restaurantSectionImages/Sattvam.jpg';
import Gardenia from './restaurantSectionImages/Gardenia.jpg';
import Terrace from './restaurantSectionImages/Terrace.jpg';
import './csscomponents/restaurants.css';

const Restaurants = () => {
    return (
        <>
            <div id="restaurants-body-main-div">
            <div id="heading">
            <h1 id="heading-restaurants-h1">Restaurants</h1>
            </div>
            <h1>1. Ebony</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Ebony}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10848.755704064559!2d77.60161078526451!3d12.975624448539486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167db31d1f1f%3A0x794a755ea4417e24!2sEbony%20Restaurant!5e0!3m2!1sen!2sin!4v1614702961334!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; Barton Centre, 13th Floor, 84, Bangalore</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Daily 12:30pm–3pm / 7pm–11pm</p>
            </div>
                <p>Ebony is an elevator ride up to the 13th floor where it boasts a lounge bar and a terrace with tables overlooking the city. 
                    Indian and western businessmen head to this restaurant for its variety of food, 
                    ranging from typical Indian dishes to Thai to French specialities. 
                    Try the Manan’s pepper mutton that comes from the temple town of Kumbakonam in Tamil Nadu, 
                    while vegetarians should sample the delicious paneer kairi dopiaza, made from paneer, 
                    mangoes, onions and fresh coriander.</p>
            </div>
            <h1>2. Italia</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Italia}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20567.977306492332!2d77.61911534174763!3d12.935865057053599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145d3724c2a7%3A0x83884f5ab2ff25b2!2sGo%20Italia!5e0!3m2!1sen!2sin!4v1614704452709!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 14/7 Bhaskaran Road, Bangalore</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Monday–Friday 7pm–11:30pm, Saturday–Sunday 12:30pm–3pm / 7pm–11:30pm</p>
            </div>
                <p>One of the best Italian restaurants in town, 
                    ITALIA at The Park Bangalore, is characterised by a deep love for the 
                    best ingredients and peculiar flavours. Here you will experience exquisitely 
                    prepared dishes from pasta to salads that are rigorously delicious and absolutely 
                    authentic.</p>
            </div>
            <h1>3. Dakshin</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Dakshin}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.62137630807!2d77.57785113955076!3d12.950872200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c5e4568845%3A0x16223fbc2f1cbf4c!2sDAKSHIN!5e0!3m2!1sen!2sin!4v1614705204352!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 25, Golf Course Rd Windsor Square, Abshot Layout, Vasanth Nagar Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Daily 12:30pm–2:25pm / 7pm–11:30pm</p>
            </div>
                <p>Dakshin is a perfect dining option with live music and a sophisticated atmosphere. 
                    Enjoy food from Kerala, Tamil Nadu, Andhra Pradesh and Karnataka all in one place, 
                    as you will here travel through Indian's best cuisines.</p>
            </div>
            <h1>4. Karavalli</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Karavalli}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.991652762117!2d77.60643671407846!3d12.972385518372727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167e46fb00e5%3A0x777b03419880fc1f!2sKaravalli!5e0!3m2!1sen!2sin!4v1614705538496!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; Ground Floor, The Gateway Hotel, Residency Rd, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Daily 12:30pm–3pm / 7pm–11:30pm</p>
            </div>
                <p>Set in a wonderfully evocative location that calls an old and royal Mangalorean 
                    home to mind, completed with antique furniture and an open-air courtyard, Karavalli 
                    at The Gateway Hotel offers some of the best dishes in the city. Try the Goan baby 
                    lobster, the Alleppey fish curry or the Mangalorean black pomfret, which are all 
                    known delicacies prepared by Chef Jose Thomas.</p>
            </div>
            <h1>5. Millers 46</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Millers46}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6913542664324!2d77.59196931407871!3d12.99158221795636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1642f1fc8687%3A0x1c9d4606fb71092a!2sMillers%2046%20Steak%20House%20And%20Bar!5e0!3m2!1sen!2sin!4v1614705837362!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 46, Millers Rd, Kaverappa Layout, Vasanth Nagar, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Daily 11am–11pm</p>
            </div>
                <p>Millers 46 is one of the top steak houses in Bangalore. 
                    While the menu includes a great variety of meat, seafood and vegetarian dishes, 
                    accompanied by a tempting selection of drinks, the portions are big and the price is worthy.</p>
            </div>
            <h1>6. Chianti</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Chianti}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62208.47275951646!2d77.6052056791016!3d12.969961100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7900992f3%3A0xab931161e661c50d!2sChianti%2C%20Indiranagar!5e0!3m2!1sen!2sin!4v1614706229560!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; No 12, KHB Colony, 5th Block, Koramangala, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Monday–Friday 12pm–3:30pm / 6:30–10:30pm, Saturday–Sunday 12pm–11pm</p>
            </div>
                <p>As much as the traditional Indian cuisine is truly delicious, 
                    especially in Bangalore, Chianti offers a welcoming change with its 
                    wide range of Italian dishes. Pastas, pizzas and salads in a mouth-watering 
                    selection of dishes await you and you will not leave hungry still</p>
            </div>
            <h1>7. The Fisherman's Wharf</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Wharf}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8962045911444!2d77.66432811407788!3d12.914392219627025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13701fd82d8f%3A0xb3edfcc323516a9b!2sThe%20Fisherman&#39;s%20Wharf!5e0!3m2!1sen!2sin!4v1614706862037!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; Opp. Shub Enclave Harulur Road, Ambalipura Village,Sarjapur Road, Bangalore</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Daily 12:30pm–3:30pm / 6:30pm–12am</p>
            <p className="Opening-rest"><span className="Opening-1-rest">More Info: </span> &nbsp;  This restaurant has different venues that are presented on their website.</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  thefishermanswharf.in</p>
            </div>
                <p>The authentic and unique flavours of the Goan cuisine can be truly experienced at 
                    the Fisherman's Wharf. While Vegetarian dishes take a seat back here, this 
                    restaurant offers a wide variety of seafood specialities and, quite regularly, 
                    live music that creates a vibrant and lively atmosphere.</p>
            </div>
            <h1>8. Sattvam</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Sattvam}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124423.92303907995!2d77.51361689721011!3d12.956002245645003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163698b5519b%3A0x56db55b8863569be!2sSattvam%20Restaurant!5e0!3m2!1sen!2sin!4v1614707288491!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 35, Opposite Shell Petrol Bunk, Sankey Rd, Sadashiva Nagar, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Daily 12pm–3:30pm / 7pm–11pm</p>
            <p className="Opening-rest"><span className="Opening-1-rest">More Info: </span> &nbsp;  This restaurant has different venues that are presented on their website.</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.sattvamrestaurant.com</p>
            </div>
                <p>Sattvam food is known for being divine, authentic and inspiring. While both service and buffet are just unique, 
                    the great variety of vegetarian food offers options for indeed everyone.</p>
            </div>
            <h1>8. ITC Gardenia</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Gardenia}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0760589499682!2d77.5933634148219!3d12.966984790858914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276dd2cf216d3%3A0x523e0c08edd084f2!2sITC%20Gardenia%2C%20A%20Luxury%20Collection%20Hotel%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1614708017603!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 1, Residency Rd, Ashok Nagar, Bengaluru, Karnataka</p>
            {/* <p className="Opening-rest"><span className="Opening-1-rest">Opening hours: </span> &nbsp;  Daily 12pm–3:30pm / 7pm–11pm</p> */}
            {/* <p className="Opening-rest"><span className="Opening-1-rest">More Info: </span> &nbsp;  This restaurant has different venues that are presented on their website.</p> */}
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.itchotels.com/in/en/itcgardenia-bengaluru</p>
            </div>
                <p>From the refined and local pleasures of royal Indian traditions, 
                    to the delectable flavours of the West and the Far East, all paired 
                    with an extensive collection of the finest beverages, the gourmet offerings 
                    at ITC Gardenia promises an inspiring culinary experience, matched by warm, personalized and 
                    efficient service.</p>
            </div>
            <h1>9. Spice Terrace</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Terrace}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62207.95413615192!2d77.56003787910157!3d12.972034900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16774816fe73%3A0x9fb3e6f0eb4107ef!2sSpice%20Terrace!5e0!3m2!1sen!2sin!4v1614708706443!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 24, JW Marriott Bengaluru, 1, Vittal Mallya Rd, Ashok Nagar, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Phone: </span> &nbsp;  +918067189999</p>
            </div>
                <p>Relax in the unbeatable landcape of hotel's poolside restaurant with innovative regional 
                    specialties and award-winning craft beer at Spice Terrace. The enticing Indian dishes 
                    and chilled microbrews are perfect for unwinding after a busy day in Bangalore.</p>
            </div>
            </div>
            <div className="footer-rest">
                <div className="footer-bottom rest">
                &copy; Travelguides.com | Designed by Arun Kumar Chintha
                </div>
            </div>
        </>
    );
};

export default Restaurants;