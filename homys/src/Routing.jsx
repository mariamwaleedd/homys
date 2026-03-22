import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Stays from './pages/Stays'; 
import Nav from './common/Nav';
import Footer from './common/Footer';
import Whatsapp from './common/Whatsapp';
import Error from './pages/Error';
import PropertyDetails from './pages/PropertyDetails';
import AboutUs from './components/AboutUs';
import Profile from './pages/Profile';
import ContactUs from './pages/ContactUs';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Cart from './pages/Cart';

const Routing = () => {
  return (
    <Router>
      <Nav />
      <Whatsapp />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error />} /> 
      </Routes>

      <Footer />
    </Router>
  );
};

export default Routing;