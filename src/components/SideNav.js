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
                </Switch>
            </Router>
        </>
    );
}
export default SideNav;