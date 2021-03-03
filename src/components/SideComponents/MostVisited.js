import React from 'react';
import './csscomponents/mostVisited.css';
import VidhanSoudhaImg from './mostVisitedSectionImages/VidhanSoudhaImg.jpg';
import CubbonPark from './mostVisitedSectionImages/CubbonPark.jpg';
import BangalorePalace from './mostVisitedSectionImages/BangalorePalace.jpg';
import NandiHills from './mostVisitedSectionImages/NandiHills.jpg';
import Iskcon from './mostVisitedSectionImages/Iskcon.jpg';
import wonderla from './mostVisitedSectionImages/wonderla.jfif';
import MysorePalace from './mostVisitedSectionImages/MysorePalace.jpg';
import Lalbagh from './mostVisitedSectionImages/Lalbagh.jpg';
import planetorium from './mostVisitedSectionImages/planetorium.jpg';

const MostVisited = () => {
    return (
        <div id="mostvisited-body-main-div">
            <div id="heading">
            <h1 id="heading-mostvisited-h1">Most Visited Places in Bangalore</h1>
            </div>
            <p id="entry-para">
            Despite Bangalore's sudden development, the city preserves its charm unaltered, in a plethora of old buildings, temples, colourful markets and peaceful gardens.

The extraordinary timber-built Tipu Sultan Palace in the heart of the city gives a fascinating glimpse into Bangalore's past, and a sense of perspective in this wannabe-modern city projected into the future. A renowned 17th-century temple and the ruins of Bangalore's fort are only a few steps away, creating a hub of historical constructions. Karnataka's State Legislature and Secretariat building, one of India’s greatest buildings, is located north-west of Cubbon Park.

Despite the rush of modern life, Bangalore has a strong religious tradition, so make sure to head to Bugle Hill and the Bull Temple. As a favourite among travellers, this breathtaking 16th-century construction literally dwarfs whoever passes by.

Bangalore is a city to be experienced and explored. The Garden City is famous for its parks, with some of them dating back over 200 years, and the most impressive ones are the botanical gardens of Lal Bagh.
            </p>
            <h1 className="heading-1">1. Vidhana Soudha</h1>
            <div id="sections-most-visited">
            <section id="mostvisited-left-col-page">
                <img src={VidhanSoudhaImg}/>
            </section>
            <section id="mostvisited-right-col-page">
                <div id="map-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4391.144904229182!2d77.58958812613491!3d12.97952803958199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae166dd8fee8b7%3A0xa3112775dc579453!2sVidhana%20Soudha%2C%20Ambedkar%20Veedhi%2C%20Sampangi%20Rama%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1614679468604!5m2!1sen!2sin" width="500" height="300" style={{border:0}}  loading="lazy"></iframe>
                </div>
            </section>
            </div>
            <div id="Info-Vidhan">
                <div className="address-info">
            <p className="Address-Vidhan"><span className="Address-1-Vidhan">Address: </span> &nbsp; Ambedkar Veedhi, Sampangi Rama Nagara, Bengaluru</p>
            <p className="Opening-Vidhan"><span className="Opening-1-Vidhan">Opening hours: </span> &nbsp;  Monday–Friday 9am–5pm, closed on Saturday–Sunday</p>
            </div>
                <p>The Vidhana Soudha is one of India's finest pieces of architecture. 
                    Located at the north-west part of Cubbon Park, the Neo-Dravidian granite palace is a blend of styles from across India, 
                    boasting the country’s most recognisable symbol, the four-headed gold lion of Ashoka. 
                    Across the road, you can spot Karnataka’s High Court building, Attara Kacheri, 
                    with its impressive red brick and monumental Corinthian column facade.</p>
            </div>
            <h1 id="Cubbon-park-heading">2. Cubbon Park</h1>
            <div id="sections-most-visited-2">
            <section id="mostvisited-2-left-col-page">
                    <div id="map-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7938.18552061648!2d77.58703813327455!3d12.979050237413512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1673e7d0672f%3A0xc62ca5a6e943dfb8!2sCubbon%20Park!5e0!3m2!1sen!2sin!4v1614686804385!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                    </div>
                </section>
                <section id="mostvisited-2-right-col-page">
                    <img src={CubbonPark}/>
                </section>
            </div>
            <div id="Info-Cubbon">
                <div className="address-info">
                <p className="Address-Cubbon"><span className="Address-1-Cubbon">Address:</span> &nbsp;Kasturba Road, Sampangi Rama Nagara, Bengaluru</p>
                <p className="Opening-Cubbon"><span className="Opening-1-Cubbon">Opening hours:</span> &nbsp;Monday–Saturday 6am–7pm, Sunday 6am–7:45pm</p>
                </div>
                <p>Dating back to 1864, Cubbon Park covers an area of 300 acres, 
                    and it is filled with an extraordinary selection of flora and fauna, 
                    offering a popular spot for picnics and playing cricket. 
                    The Public Library is also located within the premises, 
                    as well as the High Court, the Government Museum and the Visveswaraiah Technological and Industrial Museum, 
                    entertaining both tourists and locals alike, thanks to its relaxing atmosphere, which is ideal for a leisurely stroll</p>
            </div>
            <h1 id="Bangalore-palace-heading">3. Bangalore Palace</h1>
            <div id="sections-most-visited-3">
                <section id="mostvisited-3-left-col-page">
                    <img src={BangalorePalace}/>
                </section>
                <section id="mostvisited-3-right-col-page">
                    <div id="map-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.578864597233!2d77.58991841409573!3d12.998765990838027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1649294a5637%3A0xb1f8b77e331512cf!2sBangalore%20Palace!5e0!3m2!1sen!2sin!4v1614682163678!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                    </div>
                </section>
            </div>
            <div id="Info-Palace">
                <div className="address-info">
                <p className="Address-Palace"><span className="Address-1-Palace">Address:</span> &nbsp;Vasanth Nagar, Bengaluru</p>
                        <p className="Opening-Palace"><span className="Opening-1-Palace">Opening hours:</span> &nbsp;Daily 10:30am–5:30pm</p>
                </div>
                <p>Built to resemble the Windsor Castle in England, this is the seat of the current Maharajah of Mysore, 
                    head of the royal Wodeyar dynasty. Here, you can explore the lavish interiors and, also, 
                    a surprisingly wide exhibition of nudes which is displayed in some rooms here. 
                    The Palace also serves as a stage for live concerts and events, offering a fascinating venue being rich in history, 
                    and you do not want to miss that out</p>
            </div>
            <h1 id="Nandi-hills-heading">4. Nandi Hills</h1>
            <div id="sections-most-visited-4">
            <section id="mostvisited-4-right-col-page">
                    <div id="map-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46649.49518030455!2d77.66962544438692!3d13.375549703560097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e44f23b770ed%3A0x98a30c3014825b9e!2sNandi%20Hills%20Sunrise%20View%20Point!5e0!3m2!1sen!2sin!4v1614682865981!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                    </div>
                </section>
                <section id="mostvisited-4-left-col-page">
                    <img src={NandiHills}/>
                </section>
            </div>
            <div id="Info-Hills">
                <div className="address-info">
                <p className="Address-Hills"><span className="Address-1-Hills">Address:</span> &nbsp;10 km from Chickballapur town, Bengaluru</p>
                <p className="Opening-Hills"><span className="Opening-1-Hills">Opening hours:</span> &nbsp;Daily 6:00am–10:00pm</p>
                </div>
                <p>Nandi Hills, also known as Nandidurg or Nandi Betta is an ancient hill fortress situated in a district called Chikkabalapur in Karnataka.  
                    Situated near the town of Nandi, the ancient belief is that they are the origin of the Arkavathy River.
                    At a height of 4851m above sea level, Nandi Hills is a favorite destination for all nature lovers and a popular picnic spot.
                    If you like taking photographs and appreciating the beauty of nature and are moved by beautiful views that Mother Nature has created for us, 
                    then Nandi Hills is the ideal getaway for you. 
                    Some breathtaking scenery, rare flora, cool fresh air and peace, makes the hills the perfect place for a holiday.</p>
            </div>
            <h1 id="Iskcon-Temple-heading">5. Iskcon Temple</h1>
            <div id="sections-most-visited-5">
                <section id="mostvisited-5-left-col-page">
                    <img src={Iskcon}/>
                </section>
                <section id="mostvisited-5-right-col-page">
                    <div id="map-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.405451571955!2d77.54890771409592!3d13.009832790830773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ded0b360e07%3A0x7a7fb24a41a6b2b3!2sISKCON%20Temple%20Bangalore!5e0!3m2!1sen!2sin!4v1614684037914!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                    </div>
                </section>
            </div>
            <div id="Info-Temple">
                <div className="address-info">
                        <p className="Address-Temple"><span className="Address-1-Temple">Address:</span> &nbsp;Hare Krishna Hill, Chord Rd, Rajajinagar, Bengaluru</p>
                        <p className="Opening-Temple"><span className="Opening-1-Temple">Opening hours:</span> &nbsp;Daily 4:15 a.m to 5:00 a.m.,7:15 a.m to 1:00 p.m and 4:00 p.m to 8.20 p.m.</p>
                </div>
                <p>Located in the Rajaji Nagar in Bangalore, and a venture of the International Society of Krishna Consciousness, 
                    ISKCON Temple in Bangalore is a shrine to Lord Krishna. This splendid architecture was first erected by Sri Madhu Pandit Das 
                    and inaugurated in the year 1997 by the then President of India, Shankar Dayal SharmaThe ISKCON Temple at Bangalore is known 
                    for its unique and glorious architecture. The splendid thought and artwork that went behind the construction of this 
                    magnificent structure displays a striking amalgamation of glass and gopuram, 
                    which then becomes symbolic of the blending of traditional values with modern aesthetics.</p>
            </div>
            <h1 id="Wonderla-heading">6. Wonderla</h1>
            <div id="sections-most-visited-6">
            <section id="mostvisited-6-right-col-page">
                    <div id="map-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1692.1361262622347!2d77.40043809847319!3d12.834365720093698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae47c7ffab735b%3A0x5e52a4e8d0a84438!2sWonderla%20Amusement%20Park%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1614684781651!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                    </div>
                </section>
                <section id="mostvisited-6-left-col-page">
                    <img src={wonderla}/>
                </section>
            </div>
            <div id="Info-Wonderla">
                <div className="address-info">
                <p className="Address-Wonderla"><span className="Address-1-Wonderla">Address:</span> &nbsp;28th Km, Mysore Rd, Bengaluru</p>
                        <p className="Opening-Wonderla"><span className="Opening-1-Wonderla">Opening hours:</span> &nbsp;11 am to 6 pm from Wednesday to Sunday</p>
                </div>
                <p>The loudest, craziest, and the most amazing part of town. 
                    This simply is not just any amusement park in Bengaluru, 
                    but a world of breath-taking charm. It’s a place to celebrate the smaller
                     moments and share big wonders. Get on one of the 60+ exhilarating rides, 
                     or simply laze by the pool under the bright sun. But whatever you do, here,
                      everybody gets to enjoy a wonderful time together by the end of the day. 
                      And that's why it is touted as the best Amazement Park in India!</p>
            </div>
            <h1 id="Mysore-Palace-heading">7. Mysore Palace</h1>
            <div id="sections-most-visited-7">
                <section id="mostvisited-7-left-col-page">
                    <img src={MysorePalace}/>
                </section>
                <section id="mostvisited-7-right-col-page">
                    <div id="map-7">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1577266243357!2d76.6529862140866!3d12.305162991295537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf701103f9a1f9%3A0xc37fbae2a124da0d!2sMysore%20Palace!5e0!3m2!1sen!2sin!4v1614685366788!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                    </div>
                </section>
            </div>
            <div id="Info-Mysore">
                <div className="address-info">
                <p className="Address-Mysore"><span className="Address-1-Mysore">Address:</span> &nbsp;Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru</p>
                        <p className="Opening-Mysore"><span className="Opening-1-Mysore">Opening hours:</span> &nbsp;Daily from 10.00 am to 5.30 pm</p>
                </div>
                <p>The Mysore Palace is a historical palace and the royal residence(house) at Mysore in the Indian State of Karnataka. 
                    It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. 
                    The palace is in the centre of Mysore, and faces the Chamundi Hills eastward. 
                    Mysore is commonly described as the 'City of Palaces', and there are seven palaces including this one; however, 
                    'Mysore Palace' refers specifically to this one within the Old fort. 
                    The land on which the palace now stands was originally known as puragiri (literally, citadel), 
                    and is now known as the Old Fort. Yaduraya built the first palace inside the Old Fort in the 
                    14th century, which was demolished and constructed multiple times. 
                    The current structure was constructed between 1897 and 1912, after the Old Palace was burnt ablaze.
                    Mysore Palace is now one of the most famous tourist attractions in India, 
                    after the Taj Mahal, with more than 6 million annual visitors.</p>
            </div>
            <h1 id="Lalbagh-heading">8. Lalbagh Botanical Garden</h1>
            <div id="sections-most-visited-8">
            <section id="mostvisited-8-right-col-page">
                    <div id="map-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.33164351832!2d77.58389753209428!3d12.950617719706045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c191f2d31d%3A0x8e110b99df2fbe22!2sLalbagh%20Botanical%20Garden!5e0!3m2!1sen!2sin!4v1614685965630!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                    </div>
                </section>
                <section id="mostvisited-8-left-col-page">
                    <img src={Lalbagh}/>
                </section>
            </div>
            <div id="Info-Lalbagh">
                <div className="address-info">
                <p className="Address-Lalbagh"><span className="Address-1-Lalbagh">Address:</span> &nbsp;Mavalli, Bengaluru</p>
                        <p className="Opening-Lalbagh"><span className="Opening-1-Lalbagh">Opening hours:</span> &nbsp;Daily 8.00 AM to 6.00 PM</p>
                </div>
                <p>Lalbagh is a popular botanical garden situated in Bangalore (Bengaluru). 
                    This garden is a home to a variety of flora and fauna. There are many different kinds of bird 
                    species found here like Myna, Common Egret, Parakeets, and Pond Heron etc.
                    Lalbagh Botanical Garden also has a glass house, an aquarium and a lake that adds to the already 
                    existing beauty of the garden. There are two annual flower shows celebrated in the glass house. 
                    The largest collection of tropical plants in India is at Lalbagh.
                    This garden has also promoted and cultivated the concept of horticulture and is under the protection 
                    of Directorate of Horticulture. It is spread over 240 acres. It is one of the major tourist attractions in Bangalore.</p>
            </div>
            <h1 id="Nehru-Planetorium-heading">9. Jawaharlal Nehru Planetorium</h1>
            <div id="sections-most-visited-9">
                <section id="mostvisited-9-left-col-page">
                    <img src={planetorium}/>
                </section>
                <section id="mostvisited-9-right-col-page">
                    <div id="map-9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.796459601593!2d77.58744541409553!3d12.984866490847148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae166bedda581f%3A0x757d1ae9f63c2835!2sJawaharlal%20Nehru%20Planetarium!5e0!3m2!1sen!2sin!4v1614686517706!5m2!1sen!2sin" width="500" height="300" style={{border:0}}></iframe>
                    </div>
                </section>
            </div>
            <div id="Info-Nehru">
                <div className="address-info">
                <p className="Address-Nehru"><span className="Address-1-Nehru">Address:</span> &nbsp;Sri T. Choudaiah Road, High Grounds, Bengaluru</p>
                        <p className="Opening-Nehru"><span className="Opening-1-Nehru">Opening hours:</span> &nbsp;10:00 AM to 5:30 PM every day,except on Mondays and second Tuesdays</p>
                </div>
                <p>Established in the year 1989, the Jawaharlal Nehru Planetarium in Bangalore is 
                    one of the five planetariums in India, all of which have been named after the 
                    country’s first prime minister. The Bangalore Planetarium is administered by the 
                    Bangalore Association for Science Education (BASE), which has dedicated itself to 
                    popularizing scientific subjects among the public, especially children.</p>
            </div>
            <div className="footer">
                <div className="footer-bottom">
                &copy; Travelguides.com | Designed by Arun Kumar Chintha
                </div>
            </div>
        </div>
    );
};

export default MostVisited;