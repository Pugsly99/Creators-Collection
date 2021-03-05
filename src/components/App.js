import React from 'react';
import SideBar from './SideBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Artists from './Artists';
import Musicians from './Musicians';
import Designers from './Designers';
import { FaRProject } from 'react-icons/fa';


function App(){
  return (
    <Router>
    <SideBar />
    </Router>
  );
}

export default App;
