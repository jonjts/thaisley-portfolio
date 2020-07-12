import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'

import {
  Brand,
  Navbar,
  Dot,
  ToggleButton,
  ToggleButtonGroup
} from './styles'
import Nav from 'react-bootstrap/Nav';

const languageStorage = '@thaisley-lang'

const Index: React.FC = () => {

  const [lang, setLang] = useState('pt-br')
  const [navSelected, setNavSelected] = useState<string | null>('#home')
  const { t, i18n } = useTranslation()

  useEffect(() => {
    loadLanguage()
  }, [])

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  function handleLanguageChange(val: string) {
    localStorage.setItem(languageStorage, val)
    setLang(val)
  }


  function loadLanguage() {
    let lang = localStorage.getItem(languageStorage)
    if (lang) {
      setLang(lang)
    } else {
      lang = 'pt-br'
      localStorage.setItem(languageStorage, lang)
      setLang(lang)
    }
  }

  return (
    <>
      <Navbar
        bg='light'
        expand='lg'
        sticky='top'
      >
        <Brand href="#home">T.</Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            activeKey={navSelected}
            onSelect={setNavSelected}
          >
            <Nav.Link href="#home">{t('menu.home')}</Nav.Link>
            <Dot />
            <Nav.Link href="#about-me">{t('menu.about_me')}</Nav.Link>
            <Dot />
            <Nav.Link href="#contact">{t('menu.contact')}</Nav.Link>
          </Nav>
          <ToggleButtonGroup
            type="radio"
            value={lang}
            name='lang'
            onChange={handleLanguageChange}
            className="mb-2">

            <ToggleButton value='en'>EN</ToggleButton>
            <ToggleButton value='pt-br'>PT</ToggleButton>
          </ToggleButtonGroup>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Index