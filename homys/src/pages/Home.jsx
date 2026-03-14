import React, { Component } from 'react';
import './Home.css';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import Hero from './../components/Hero';
import HeroBody from '../components/HeroBody';
import NextStay from '../components/NextStay';
import AboutHero from '../components/AboutHero';
import Separator from '../common/Separator';
import FaqHero from '../components/FaqHero';
import SeaSection from '../components/SeaSection';
import Whatsapp from '../common/Whatsapp';

const Home = () => {

  return (
    <>
<Nav/>
<Whatsapp/>
<Hero/>
<HeroBody/>
<SeaSection/>
<NextStay/>
<AboutHero/>
<Separator/>
<FaqHero/>
<Footer/>
</>
  );
};

export default Home;