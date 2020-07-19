import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer'
import Me from './Me'
// import { Container } from './styles';

const AboutMe: React.FC = () => {

    return (
        <>
            <Navbar />
            <Me />
            <Footer />
        </>
    )
}

export default AboutMe;