import React from 'react';
import SideBar from './SideBar';
import About from './About';
import Contact from './Contact';
import Artists from './Artists';
import Musicians from './Musicians';
import Designers from './Designers';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App(){
  return (
    <div className='App'>
      <Router>
        <SideBar />
        <Switch>
          <Route path='/'>
            <About />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
          <Route path='/Artists'>
            <Artists />
          </Route>
          <Route path='/Musicians'>
            <Musicians />
          </Route>
          <Route path='/Designers'>
            <Designers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
