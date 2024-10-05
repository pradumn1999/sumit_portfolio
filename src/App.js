import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Activities from './components/Activities';
import PoliticalCarrier from './components/PoliticalCarrier';
import Contact from './components/Contact';
import Footers from './components/Footers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="activities">
          <Activities />
        </section>
        <section id="politicalCarrier">
          <PoliticalCarrier />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footers />
    </div>
  );
}

export default App;
