import React from 'react';
import { useTranslation } from 'react-i18next'

import Navbar from './Navbar';


const Index: React.FC = () => {

  const { t, i18n } = useTranslation()

  return (
    <>
      <Navbar />

    </>
  );
}

export default Index