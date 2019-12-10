import React from 'react';
import Header from './screen-field/header';
import About from './screen-field/About';
import OpenDay from './screen-field/OpenDay';
import Equipament from './screen-field/Equipament';

import './general.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <section className="delimiter">
        <About />
        <Equipament />
        <OpenDay />
      </section>
      <Footer/>
    </div>
   
  );
}

export default App;
