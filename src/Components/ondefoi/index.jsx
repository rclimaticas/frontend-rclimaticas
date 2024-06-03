import React, { useState } from 'react';
import Hero from './Hero.jsx'
import About from './About.jsx'
import Header from '../../common/header.jsx'
import Strategies from './Strategies.jsx'
import Dashboard from './Dashboard.jsx'
import TrustedBy from './TrustedBy.jsx'

export default function Index() {
    const [imageLoad, setImageLoad] = useState(false);

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Strategies />
            <Dashboard />
            <TrustedBy />
        </>
    );
}