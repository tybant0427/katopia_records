import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Bookings from './components/pages/Bookings';
import Contact from './components/pages/Contact';
import Team from './components/pages/Team';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/bookings' exact component={Bookings} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
     
    
  );
}

export default App;
