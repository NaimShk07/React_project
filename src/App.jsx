import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import Home from './components/Home';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Contact.scss";
import "./styles/Footer.scss";
import "./styles/Mediaquery.scss";



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<><Home /></>} />
        <Route path='/contact' element={<><Contact /></>} />
        <Route path='/services' element={<><Services /></>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;