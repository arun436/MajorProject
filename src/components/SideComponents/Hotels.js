import React from 'react';
import ITC from './hotelSectionImages/ITC.jpg';
import Leela from './hotelSectionImages/Leela.webp';
import Taj from './hotelSectionImages/Taj.webp';
import Welcom from './hotelSectionImages/Welcom.webp';
import Oberoi from './hotelSectionImages/Oberoi.webp';
import Conrad from './hotelSectionImages/Conrad.webp';
import Taj2 from './hotelSectionImages/Taj2.webp';
import Shangrila from './hotelSectionImages/Shangrila.webp';

const Hotels = () => {
    return (
        <>
            <div id="restaurants-body-main-div">
            <div id="heading">
            <h1 id="heading-restaurants-h1">Hotels</h1>
            </div>
            <h1>1. ITC Gardenia, A Luxury Collection Hotel</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={ITC}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0759772657466!2d77.5933634140784!3d12.966990018489648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276dd2cf216d3%3A0x523e0c08edd084f2!2sITC%20Gardenia%2C%20A%20Luxury%20Collection%20Hotel%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1614709727480!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 1, Residency Rd, Ashok Nagar, Bengaluru, Karnataka</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.marriott.com</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Phone: </span> &nbsp;  +918022119898</p>
            </div>
                <p>Boasting an operable helipad and a spacious outdoor swimming pool, 
                  ITC Gardenia offers luxurious rooms. Guests can also choose between 7 in-house 
                  restaurants.</p>
            </div>
            <h1>2. The Leela Palace Bangalore</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Leela}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1749377766755!2d77.64616651407833!3d12.960655218626883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14067cca9bdd%3A0x111bbe37cc24e71a!2sThe%20Leela%20Palace%20Bengaluru%2C%20A%20Contemporary%20Luxury%20Hotel!5e0!3m2!1sen!2sin!4v1614710165439!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 23, HAL Old Airport Rd, HAL 2nd Stage, Kodihalli, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.theleela.com</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Phone: </span> &nbsp;  +918025211234</p>
            </div>
                <p>Nestled in the midst of lush gardens that spread across 7 acres, 
                  The Leela Palace Bangalore features décor reflecting the grandeur of the bygone era 
                  and features of facilities such as an outdoor swimming pool, 
                  a spa and wellness center, Yoga studio and 4 award winning food and beverage / dining 
                  options. Free private parking is provided.</p>
            </div>
            <h1>3. Taj MG Road Bengaluru </h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Taj}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1749377766755!2d77.64616651407833!3d12.960655218626883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14067cca9bdd%3A0x111bbe37cc24e71a!2sThe%20Leela%20Palace%20Bengaluru%2C%20A%20Contemporary%20Luxury%20Hotel!5e0!3m2!1sen!2sin!4v1614710165439!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 41/3 M G Road, 560001 Bangalore</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.tajhotels.com</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Phone: </span> &nbsp;  +918066604444</p>
            </div>
                <p>Taj MG Road Bengaluru is located in the center of Bangalore's business and entertainment area, 
                  within 1.2 mi from the Government Museum. It features an outdoor pool and a spa.
                  Conveniently located in Bengaluru, Taj MG Road Bengaluru is a 5-minute walk from Garuda Mall and a 
                  10-minute drive from Sree Kanteerava Stadium. Bengaluru International Airport is about 17 mi from the hotel.
                  Each room is spacious and luxuriously appointed with fine beddings and furnishings. 
                  They are fitted with a flat-screen TV, a safe and tea/coffee maker. 
                  They have ample work space, living areas and a large bathroom with a bathtub.</p>
            </div>
            <h1>4. WelcomHotel Bengaluru </h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Welcom}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.046240268535!2d77.6121759144522!3d12.968892990857656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168210251fdf%3A0xc66dd8a58a2f9346!2sWelcomhotel%20Bengaluru%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1614711362588!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 46, Richmond Rd, Victoria Layout, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.itchotels.com</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Phone: </span> &nbsp;  +918067041806</p>
            </div>
                <p>Offering an outdoor pool, a fitness center and a spa and wellness center, 
                  WelcomHotel Bengaluru is located in Bangalore. It operates a 24-hour front desk to welcome guests 
                  at all hours. The hotel also offers happy hours at the bar lounge Swizzle.
                  Each room here will provide you with a TV, air conditioning and a mini-bar. 
                  There is also an electric kettle. Featuring a shower, private bathroom also comes with a hairdryer 
                  and bathrobes. You can enjoy garden view from the room. Extras include a seating area and satellite channels.
                  At WelcomHotel Bengaluru you will find a restaurant and a fitness center. Other facilities offered 
                  at the property include meeting facilities, a shared lounge and a ticket service. The property offers 
                  free parking</p>
            </div>
            <h1>5. The Oberoi Bengaluru </h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Oberoi}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9771583851834!2d77.61597031407845!3d12.97331271835265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16835c3ada19%3A0x7065f59042b7b2db!2sThe%20Oberoi%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1614711765722!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 37-39, Mahatma Gandhi Rd, Yellappa Chetty Layout, Sivanchetti Gardens, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.oberoihotels.com</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Phone: </span> &nbsp;  +918025585858</p>
            </div>
                <p>Award-winning gardens with century-old raintrees are featured throughout The Oberoi Bangalore, 
                  a 5-star property on the prestigious Mahatma Gandhi Road. Pampering spa treatments and a gym are 
                  provided. Personal butlers and room service are available 24 hours. Complimentary WiFi is available in all rooms.
                  Luxurious and elegant, all the air-conditioned guestrooms enjoy beautiful garden views. 
                  A flat-screen TV, mini-bar and personal safe are included. Private bathrooms come with 
                  hot-water showers and Ayurvedic toiletries.</p>
            </div>
            <h1>6. Conrad Bengaluru </h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Conrad}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.946118360366!2d77.61824291407846!3d12.975298118309576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae169b41c32eeb%3A0xd7be5acf89a61a1d!2sConrad%20Bengaluru!5e0!3m2!1sen!2sin!4v1614712104998!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 25/3, Kensington Rd, Someshwarpura, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.hilton.com</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Phone: </span> &nbsp;  +918022144444</p>
            </div>
                <p>Ideally located 500 m from MG Road, Conrad Bengaluru is located in the heart of the central 
                  business district. With five distinct dining venues, 24-hour fitness center and an infinity pool, 
                  each room and suite overlooks the city skyline and Ulsoor Lake.The hotel features a hot tub and a 
                  24-hour front desk.At the hotel, every room is equipped with a desk. 
                  The rooms are equipped with air conditioning and a TV, and selected rooms also 
                  feature a city view. The units at Conrad Bengaluru are equipped with a private 
                  bathroom fitted with a bath or shower</p>
            </div>
            <h1>7. Taj Yeshwantpur Bengaluru</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Taj2}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.102521098978!2d77.53851931407902!3d13.029142917140021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6b78323a6d%3A0x52c990fae2561020!2sTaj%20Yeshwantpur%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1614712573589!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; 2275, Tumkur Rd, Yeshwanthpur Industrial Area, Phase 1, Yeswanthpur, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.tajhotels.com</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Phone: </span> &nbsp;  +918066900111</p>
            </div>
                <p>With a large outdoor pool fronting the property, Taj Yeshwantpur Bengaluru features 
                  a day spa and fitness facilities. Modern rooms boast floor-to-ceiling windows, a 
                  flat-screen TV and a DVD player. Just 1.9 mi from the ISKCON Temple Bangalore, 
                  Taj Yeshwantpur Bengaluru is 9.3 mi from the city center. It is 22 mi from Bengalaru 
                  International Airport and provides free parking. The World Trade Center and the Colombia 
                  Asia Referral Hospital Yeshwantpur are 1.2 mi, the BIEC is 5 mi and the Manyata Tech Park is 
                  6.2 mi from the property</p>
            </div>
            <h1>8. Shangri-La Hotel, Bengaluru</h1>
            <div id="sections-restaurants">
            <section id="restaurants-left-col-page">
                <img src={Shangrila}/>
            </section>
            <section id="restaurants-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.68684924714!2d77.58610431445244!3d12.991869990842558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160d16f18803%3A0x93e9c670e6e9c7e6!2sShangri-La%20Hotel%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1614712907632!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                </div>
            </section>
            </div>
            <div id="Info-rest">
                <div className="address-info">
            <p className="Address-rest"><span className="Address-1-rest">Address: </span> &nbsp; No.56, 6B, Palace Rd, Abshot Layout, Vasanth Nagar, Bengaluru</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Website: </span> &nbsp;  www.shangri-la.com</p>
            <p className="Opening-rest"><span className="Opening-1-rest">Phone: </span> &nbsp;  +918045126100</p>
            </div>
                <p>Located in Bangalore, the garden city of India, the Shangri-La Hotel features an award winning 
                  restaurant and 5 specialty alfresco dining options, an outdoor swimming pool and a well-equipped 
                  health club. The elegantly appointed guestrooms have private bathrooms featuring walk-in 
                  wardrobes and rain showers, luxurious amenities, bathrobes, and a hairdryer. Other features 
                  include daily housekeeping, satellite TV channels, a spacious writing desk, complimentary 
                  high-speed Internet access, complimentary Wi-Fi in the guestrooms and in public areas.
                  Fully equipped cardiovascular and weight-training systems are provided at the state-of-the-art gym. 
                  CHI, The Spa offers treatments inspired by the legend of the Shangri-La origin.</p>
            </div>
            <div className="footer">
                <div className="footer-bottom">
                &copy; Travelguides.com | Designed by Arun Kumar Chintha
                </div>
            </div>
            </div>
        </>
    );
};

export default Hotels;