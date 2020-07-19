import React from 'react';
import Presentation from './Presentation'

import Navbar from './Navbar';
import Footer from './Footer'
import Content from './Content'


const Index: React.FC = () => {


  return (
    <>
      <Navbar />
      <Presentation />
      <Content />
      <Footer />
    </>
  );
}

export default Index