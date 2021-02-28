import React from 'react';
import City from './SideComponents/City';
import MostVisited from './SideComponents/MostVisited';
import Restaurants from './SideComponents/Restaurants';
import Bars from './SideComponents/Bars';
import Cafes from './SideComponents/Cafes';
import Hotels from './SideComponents/Hotels';
import Shopping from './SideComponents/Shopping';
import Weather from './SideComponents/Weather';
import Home from './SideComponents/Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import RegisterFormMain from './RegisterFormMain';
import MostVisited1 from './SideComponents/MapsFolder/MostVisited1';
import CubbonParkMap from './SideComponents/MapsFolder/CubbonParkMap';
import BangalorePalaceMap from './SideComponents/MapsFolder/BangalorePalaceMap';
import NandiHillsMap from './SideComponents/MapsFolder/NandiHillsMap';
import IskconTempleMap from './SideComponents/MapsFolder/IskconTempleMap';
import WonderlaMap from './SideComponents/MapsFolder/WonderlaMap';
import MysorePalaceMap from './SideComponents/MapsFolder/MysorePalaceMap';
import LalbaghGardenMap from './SideComponents/MapsFolder/LalbaghGardenMap';
import NehruPlanetoriumMap from './SideComponents/MapsFolder/NehruPlanetoriumMap';

const SideNav = () => {

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/city" component={City}/>
                    <Route path="/mostVisited" component={MostVisited}/>
                    <Route path="/restaurants" component={Restaurants}/>
                    <Route path="/hotels" component={Hotels}/>
                    <Route path="/shopping" component={Shopping}/>
                    <Route path="/cafes" component={Cafes}/>
                    <Route path="/bars" component={Bars}/>
                    <Route path="/Weather" component={Weather}/>
                    <Route path="/register" component={RegisterFormMain}/>
                    <Route path="/VidhanSoudha" component={MostVisited1}/>
                    <Route path="/CubbonPark" component={CubbonParkMap}/>
                    <Route path="/BangalorePalace" component={BangalorePalaceMap}/>
                    <Route path="/NandiHills" component={NandiHillsMap}/>
                    <Route path="/Iskcon" component={IskconTempleMap}/>
                    <Route path="/Wonderla" component={WonderlaMap}/>
                    <Route path="/MysorePalace" component={MysorePalaceMap}/>
                    <Route path="/Lalbagh" component={LalbaghGardenMap}/>
                    <Route path="/NehruPlanetorium" component={NehruPlanetoriumMap}/>
                </Switch>
            </Router>
        </>
    );
}
export default SideNav;