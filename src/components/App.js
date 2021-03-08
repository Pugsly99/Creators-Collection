import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideBar from './SideBar';
import Home from './Home';
import DominicFike from './Musicians/DominicFike';
import Benee from './Musicians/Benee';
import FrankOcean from './Musicians/FrankOcean';
import AlexLafollette from './Artists/AlexLafollette';
import PobloPicasso from './Artists/PobloPicasso';
import CalvinKlein from './Designers/CalvinKlein';
import Versace from './Designers/Versace';
import LouisVuitton from './Designers/LouisVuitton';
import OurPlan from './About/OurPlan';
import ContactUs from './About/ContactUs';



function App(){
  return (
    <Router>
        <SideBar />
      <Switch>
        <Route path = "/home" exact component = {Home} />
        <Route path = "/musicians/dominicfike" exact component = {DominicFike} />
        <Route path = "/musicians/benee" exact component = {Benee} />
        <Route path = "/musicians/frankocean" exact component = {FrankOcean} />
        <Route path = "/Artists/pablopicasso" exact component = {PobloPicasso} />
        <Route path = "/Artists/alexlafollette" exact component = {AlexLafollette} />
        <Route path = "/Designers/CalvinKlein" exact component = {CalvinKlein} />
        <Route path = "/Designers/Versace" exact component = {Versace} />
        <Route path = "/Designers/LouisVuitton" exact component = {LouisVuitton} />
        <Route path = "/About/OurPlan" exact component = {OurPlan} />
        <Route path = "/About/ContactUs" exact component = {ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
