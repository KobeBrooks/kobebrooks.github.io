import React from 'react';
import '../../App.css';
import Hero from '../Hero.js';
import Cards from '../Card';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <Hero />
            <Cards />
            <Footer />
        </>
    )
}

export default Home