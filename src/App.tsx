import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { About } from './components/About';
import { Help } from './components/Help';
import { Contacts } from './components/Contacts';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Help />
      <Contacts />
      <Footer />
    </div>
  );
};
