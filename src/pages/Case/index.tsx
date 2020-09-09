import React from 'react';

// import { Container } from './styles';
import Footer from "../Footer";
import Navbar from "../Navbar";
import Content from './Content';

const Contact: React.FC = () => {
    return (
        <>
            <Navbar />
            <Content />
            <Footer />
        </>
    )
}

export default Contact;