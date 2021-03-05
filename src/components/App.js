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
    <>
    <SideBar />
    </>
  );
}

export default App;
